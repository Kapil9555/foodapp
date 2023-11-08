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
     router.push('/checkout')
  };

  return (
    <Container disableGutters maxWidth={'xl'} sx={{bgcolor:"#f5f5f5",p:{lg:"0px 20px",md:"0px 20px",sm:"0px 15px",xs:"0px 8px"}}}>
       <Box>
          <Paper elevation={4} sx={{position:"fixed",zIndex:999,borderRadius:"50px",overflow:"hidden",bottom:"50px",right:"50px",cursor:"pointer"}} onClick={handleNavigateCart}>
            <Box sx={{position:"relative",height:"80px",width:"80px"}}>
                <Image src={cart} style={{height:"100%",width:"100%"}}/>
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