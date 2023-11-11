'use client'
import Header from '@/components/Header';
import { Box, Container, IconButton, Paper } from '@mui/material';
import Cards from '@/components/Cards';
import Filters from '@/components/Filters';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import cart from '../../../assests/cart.jpg'
import Image from 'next/image';
import add1 from '../../../assests/location.png'




const MenuPage = () => {
  const router = useRouter();
  const params =useParams();
  const [catData,setCatData]=useState([])
  const [productData,setProductData]=useState([])

  console.log(params.mid)

  const fetchData = async()=>{
    try{
       const responseData = await axios.get(`/api/products/${params.mid}`)
      setCatData(responseData.data.catData);
      const newData = await responseData.data.itemData.map((ele)=>{ return {...ele,qty:0}})
      // console.log("new data ..",newData)
      setProductData(newData)
      //  console.log("menu page response",responseData.data.itemData)
    }catch(err){
        console.log(err)
    }
 };

  useEffect(()=>{
    fetchData();
  },[]);

  const handleNavigateCart =()=>{
    const id = JSON.parse(localStorage.getItem('UID'))
     router.push(`/checkout/${id}`)
  };

  const handleNavigateAddress =()=>{
    const id = JSON.parse(localStorage.getItem('UID'))
     router.push(`/useraddress/${id}`)
  };

  return (
    <Container disableGutters maxWidth={'xl'} sx={{bgcolor:"#f5f5f5",p:{lg:"0px 20px",md:"0px 20px",sm:"0px 15px",xs:"0px 8px"}}}>
       <Box>
          <Paper elevation={4} sx={{position:"fixed",zIndex:999,borderRadius:"50px",overflow:"hidden",bottom:"100px",right:"50px",cursor:"pointer"}} onClick={handleNavigateCart}>
            <Box sx={{position:"relative",height:"60px",width:"60px"}}>
                <Image src={cart} style={{height:"100%",width:"100%"}}/>
            </Box>
          </Paper>
          <Paper elevation={4} sx={{position:"fixed",zIndex:999,borderRadius:"50px",overflow:"hidden",bottom:"30px",right:"50px",cursor:"pointer"}} onClick={handleNavigateAddress}>
            <Box sx={{position:"relative",height:"60px",width:"60px"}}>
                <Image src={add1} objectFit='cover' style={{height:"100%",width:"100%"}}/>
            </Box>
          </Paper>
       </Box>
      <Header />
      <Filters catData={catData}/>
       <Cards productData={productData} setProductData={setProductData}/>
    </Container>
  )
}

export default MenuPage