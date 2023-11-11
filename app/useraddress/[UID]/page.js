'use client'
import AddNewAddress from '@/components/AddNewAddress';
import Header from '@/components/Header';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Button, FormControl, FormControlLabel, Grid, IconButton, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const UserAddress = () => {
    const router = useRouter();
    const [open , setOpen]=useState(false);
    const [showData , setShowdata]= useState([]);
    const [selectedAddress, setSelectedAddress]=useState('')


const fetchData=async()=>{
   
    const uid = JSON.parse(localStorage.getItem('UID'));
    try{
    console.log(uid)
       const respData = await axios.get(`/api/useraddress/${uid}`);
       if(respData.data.message = "Data Fechted Successfully"){
        setShowdata(respData.data.resp);
        console.log(respData);
       }
       else{
        alert(respData.data.message)
       }

    }
    catch(err){
        alert(err)
    }
}


    useEffect(()=>{
     fetchData();
    },[])

    const handleAddressChange =(e)=>{
        setSelectedAddress(e.target.value)
    }
    const navigateHandler =()=>{
        if(selectedAddress != ""){
            router.push(`/billing/${selectedAddress}`);
        }
        else{
            alert("Please Select Any Address")
        }
    }

    const addressDeleteHandler =async(id)=>{
        try{
            const respData = await axios.delete(`/api/removeuseraddress/${id}`)
            if(respData.data.message == "Address Removed Successfully"){
                alert(respData.data.message)
                fetchData();
            }
            else{
                alert(respData.data.message);
            }
        }
        catch(err){
            // console.log(err);
            alert(err)
        }
    }
   
    return (
        <>
            <Grid container >
                <Header />
                <Grid container sx={{ display: 'flex',pb:"10px", justifyContent: 'center', alignItems: 'center', mt: '0px', overflow: 'hidden' }}>
                    <Grid item lg={5} md={6} sm={8} xs={11} >
                        <Paper sx={{ borderRadius: '10px 10px 10px 10px', mt: '40px',}}>
                            <Grid container sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Grid item xs={12} sx={{bgcolor: '#212121', padding: '8px', textAlign: 'center', borderRadius: '11px 11px 0px 0px' }}>
                                    <Typography sx={{ color: 'White', fontSize: { lg: '25px', md: '23px', sm: '20px', xs: '18px' }, fontWeight: 'bold' }}>Address</Typography>

                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <FormControl sx={{ width: "100%" }}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={selectedAddress}
                            onChange={handleAddressChange}
                            sx={{display:"flex",justifyContent:"center",alignItems:"center"}}
                        >
                            {showData.map((ele) => (
                                <Paper key={ele.address} elevation={1} sx={{ width: "95%", mt: "20px", p: "10px" }}>
                                    <Grid container>
                                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between',p:"10px" }}>
                                            <FormControlLabel
                                                value={ele._id}
                                                control={<Radio color='success' sx={{ p: "0px", mr: "20px" }} />}
                                                label={
                                                    <Box>
                                                        <Typography sx={{ fontSize: "18px", fontWeight: 600, textTransform: "uppercase" }}>{ele.receiverName}</Typography>
                                                        <Typography sx={{ textTransform: "capitalize" }}>{ele.address}</Typography>
                                                        <Typography sx={{ textTransform: "capitalize" }}>{ele.landMark}</Typography>
                                                        <Typography sx={{ textTransform: "uppercase" }}>{ele.state}-{ele.pinCode}</Typography>
                                                        <Typography sx={{ textTransform: "capitalize" }}>{ele.country}</Typography>
                                                    </Box>
                                                }
                                            />
                                            <IconButton sx={{height:"fit-content",width:"fit-content"}} onClick={()=>{addressDeleteHandler(ele._id)}}>
                                              <DeleteForeverIcon sx={{ color: 'red',fontSize:"30px" }} />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Grid>
                               
                              
                                <Grid container sx={{ p: '10px', borderRadius: '0px 0px 11px 11px' }}>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Button variant='contained' onClick={()=>{setOpen(true)}}>Add New Address</Button>
                                        <AddNewAddress open={open} setOpen={setOpen} fetchData={fetchData}/>
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Paper>

                    </Grid>

                </Grid>


            </Grid>
            <Paper elevation={3}  sx={{ position: 'fixed', bottom: 20,borderRadius:"20px 0px 20px 0px",right: 40, bgcolor: 'black','&:hover':{bgcolor: 'black'} }} >
                <Button sx={{fontSize:'16px', color:'white',fontWeight:"600"}} onClick={navigateHandler}>Next Page</Button>
            </Paper>
        </>
    )
}

export default UserAddress