'use client'
import Header from '@/components/Header';
import { Box, Container, IconButton, Paper, Typography } from '@mui/material';
import Cards from '@/components/Cards';
import Filters from '@/components/Filters';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import cart from '../../../assests/cart.jpg'
import Image from 'next/image';
import nodata from '../../../assests/nodata2.gif'





const MenuPage = () => {
  const router = useRouter();
  const params =useParams();
  const [catData,setCatData]=useState([])
  const [productData,setProductData]=useState([])
  const [checker , setChecker] = useState(false)
  const [cartBtn , setCartBtn] =useState(false)

  // console.log(params.mid)

  const fetchData = async()=>{
    try{
       const responseData = await axios.get(`/api/products/${params.mid}`)
      //  console.log("reponse menu page",responseData)
       if(responseData.data.message == 'No Data Found'){
        setChecker(true)
       }
       if(responseData.data.message == 'Fetched Successfully'){
        setChecker(false)
       }
      setCatData(responseData.data.catData);
      const newData = await responseData.data.itemData.map((ele)=>{ return {...ele,qty:0}})
      // console.log("new data ..",newData)
      setProductData(newData)
      //  console.log("menu page response",responseData.data.itemData)
    }catch(err){
        console.log(err)
    }
 };

 const fetchCartData = async() =>{
      const uid = await JSON.parse(localStorage.getItem('UID'));
        try{
          const respData = await axios.get(`/api/cart/${uid}`);
          console.log('checker data',respData)
          if(respData.data.message == 'No Data Found'){
            setCartBtn(false)
          }
          if(respData.data.message == 'Data Fetched Successfully'){
            setCartBtn(true)
          }
        }
        catch(err){
          console.log(err);
          alert(err.message)
        }
 }

  useEffect(()=>{
    fetchData();
    fetchCartData();
  },[]);

  const handleNavigateCart =()=>{
    const id = JSON.parse(localStorage.getItem('UID'))
     router.push(`/checkout/${id}`)
  };

  console.log("cart button",cartBtn)

  return (
    <Container disableGutters maxWidth={'xl'} sx={{bgcolor:"#f5f5f5",p:{lg:"0px 20px",md:"0px 20px",sm:"0px 15px",xs:"0px 8px"}}}>
        {
          cartBtn && <Box>
          <Paper elevation={4} sx={{position:"fixed",zIndex:999,borderRadius:"50px",overflow:"hidden",bottom:"50px",right:"50px",cursor:"pointer"}} onClick={handleNavigateCart}>
            <Box sx={{position:"relative",height:"60px",width:"60px"}}>
                <Image src={cart} alt='cart' style={{height:"100%",width:"100%"}}/>
            </Box>
          </Paper>
       </Box>
      }
      <Header />
      {
        checker ? 
       <Box sx={{height:"70vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",bgcolor:"white"}}>
       <Box sx={{height:"200px",width:"300px",position:"relative"}}>
         <Image src={nodata} style={{position:"absolute",height:"100%",width:"100%"}}/>
       </Box>
       <Typography align='center' sx={{fontSize:"20px",fontWeight:"800",color:"#9e9e9e"}}>No Data Found</Typography>
       </Box>
       :
       <Box>
         <Filters catData={catData}/>
         <Cards productData={productData} setProductData={setProductData} fetchCartData={fetchCartData}/>
       </Box>
      }
     
      
    </Container>
  )
}

export default MenuPage