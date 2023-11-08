'use client'


import { Box, Button, Checkbox, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'




const AdminAllShops = () => {
    const router =useRouter()
   const mainApi=new Array(10).fill(1)
   const [allShops , setAllShops]=useState([])
   
//    funtion navigate to adminallcategories page 
const handleNavigateCat =(id)=>{
    router.push(`/admin/adminallcategroies/${id}`)
}


//    funtion navigate to adminaddnewshop page 
const handleNavigateAddShop =()=>{
    router.push('/admin/adminaddnewshop')
}

const fetchData =async()=>{
    try{
        const respData = await axios.get('/api/shop')
        console.log(respData.data.resp) 
        setAllShops(respData.data.resp)
    }catch(err){console.log(err)}
}

useEffect(()=>{
    fetchData();
},[])
    return (
        <>
            <Grid container sx={{  height: "80px", bgcolor: "black", alignItems: "center", width: "100%" }}>
               <Grid item xs={4} sx={{}}>
               <Typography  sx={{ fontSize: "30px", fontWeight: "900", color: "white" }}>
                  Admin DashBoard
                </Typography>
               </Grid>
                
             
               
            </Grid>
            <Grid container sx={{  }}>
            <Grid item xs={12}>
                <Box sx={{p:"15px",bgcolor:"#e0e0e0"}}>
                <Typography align='center' sx={{ fontSize: "25px", fontWeight: "900",color:"black",cursor:"pointer" }} >
                  All Shops
                </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{p:"15px"}}>
                <Box sx={{display:"flex",justifyContent:"right"}}>
                    <Button sx={{bgcolor:"black",color:"white",'&:hover':{bgcolor:"black"},fontSize:"14px",fontWeight:"600"}} onClick={handleNavigateAddShop}>
                        add new shop
                    </Button>
                
                </Box>
            </Grid>
            <Grid item xs={12} sx={{}}>
                <Table container={"true"} component={Paper}>
                    <Table  aria-label="sticky table">
                        <TableHead  >
                            <TableRow  sx={{backgroundColor:"black"}}>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                    S.N
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                    Shop Name
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                    Mobile
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                   Is Available
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                   Wallet
                                </TableCell>
                                <TableCell align='center' sx={{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"}}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            allShops.map((ele,index)=>{
                                return(
                                    <TableRow key={index}>
                                    <TableCell align='center' sx={{cursor:"pointer"}}>{index}</TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}} onClick={()=>{handleNavigateCat(ele._id)}}>
                                     { ele.shopName}
                                </TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}}>
                                       {ele.mobOnShop}
                                </TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}}>
                                 <Checkbox checked={ele.isShopOpen} color="success"/>
                                </TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}}>
                                      {ele.wallet}
                                </TableCell>
                                <TableCell align='center' sx={{cursor:"pointer"}}>
                                    <Box>
                                        <Button variant='contained' sx={{bgcolor:"black","&:hover":{bgcolor:"black"},p:"3px 0px",fontSize:"12px",mr:"10px"}}>edit</Button>
                                        <Button variant='contained' sx={{bgcolor:"red","&:hover":{bgcolor:"red"},p:"3px 0px",fontSize:"12px"}}>delete</Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                                )
                            })
                        }
                            
                        </TableBody>
                    </Table>
                </Table>
            </Grid>
              

            </Grid>
        </>
    )
}

export default AdminAllShops