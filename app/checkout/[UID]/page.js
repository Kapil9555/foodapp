'use client'
import { Box, Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const CheckOutPage = () => {
const params = useParams();
const [cartData, setCartData]=useState([])
console.log("params uid",params.UID)

    const fetchApi=async()=>{
        try{
           const respData =await axios.get(`/api/cart/${params.UID}`);
           console.log("response data new",respData.data.resp)
           if(respData.data.message == 'Data Fetched Successfully'){
            setCartData(respData.data.resp)
           }
        }catch(err){
            console.log(err);
            alert(err)
        }
    };

    // console.log(cartData)

    useEffect(()=>{
        fetchApi();

    },[])

   

    const totalAmount = cartData.reduce((acc,curr)=>{
        return acc + curr.srp * curr.qty
    },0)

    const handleRemoveItem =async(id)=>{
           try{
              console.log(id);
              const respData = await axios.post(`/api/deletecartitem/${id}`);
            //   console.log(respData)
              if(respData.data.message == "Item Removed Successfully"){
                fetchApi();
              }
              else{
                alert(respData.data.message)
              }
           }
           catch(err){
              console.log(err)
              alert(err.message)
           }
    }
   
    return (
        <>
            <Container disableGutters maxWidth='xl'>
                <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', mt:'0px',overflow:'hidden'  }}>
                    <Grid item lg={4} md={6} sm={8} xs={11} >
                        <Paper sx={{borderRadius:'10px 10px 10px 10px', mt:'40px'}}elevation={2}>
                        <Grid container>
                            <Grid item xs={12} sx={{bgcolor:'black', padding:'8px', textAlign:'center', borderRadius:'11px 11px 0px 0px'}}>
                                <Typography sx={{color:'White', fontSize:{lg:'25px', md:'23px', sm:'20px', xs:'18px'}, fontWeight:'bold'}}>CheckOut</Typography>

                            </Grid>

                            <Grid item xs={12} sx={{ p:'10px'}}>
                                <Typography sx={{ fontSize:{lg:'21px', md:'19px', sm:'17px', xs:'16px'}, fontWeight:'bold', color:'#616161'}}>{cartData.length} Items</Typography>
                            </Grid>

                            {
                                cartData.map((ele)=>{
                                    {/* console.log("cart item",ele) */}
                                   return (
                                    <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center',p:'10px'}}>
                                <Grid item xs={6} >
                                    <Typography sx={{fontSize:{lg:'16px', mr:'16px', sm:'14px', xs:'14px'}, fontWeight:'bold'}}>{ele.name} x {ele.qty}</Typography>
                                    <Typography sx={{fontSize:{lg:'14px', md:'13px', sm:'12px', xs:'9px'}, fontWeight:'bold',color:'#bdbdbd'}}>{ele.srp} x {ele.qty}</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box>
                                        <IconButton onClick={()=>{handleRemoveItem(ele._id)}}>
                                            <DeleteForeverIcon sx={{color:"red",fontSize:"30px"}}/>
                                        </IconButton>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}  sx={{ textAlign:'right'}}>
                                    <Typography sx={{fontSize:{lg:'16px', mr:'16px', sm:'14px', xs:'14px'}, fontWeight:'bold', color:'#616161'}}>Rs {(ele.srp)*(ele.qty)}</Typography>
                                </Grid>
                            </Grid>
                                   )
                                })
                            }

                         
                            <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center',p:'10px', bgcolor:'black', borderRadius:'0px 0px 11px 11px'}}>
                                <Grid item xs={4} >
                                    <Typography sx={{fontSize:{lg:'19px', md:'18px', sm:'16px', xs:'15px'}, fontWeight:'bold', color:'white'}}>To Pay</Typography>
                                    

                                </Grid>
                                <Grid item xs={4}  sx={{textAlign:'right'}}>
                                    <Typography sx={{fontSize:{lg:'19px', md:'18px', sm:'16px', xs:'15px'}, fontWeight:'bold', color:'white'}}>Rs {totalAmount}</Typography>

                                </Grid>
                            </Grid>

                        </Grid>
                        </Paper>

                    </Grid>

                </Grid>

            </Container>

        </>
    )
}

export default CheckOutPage