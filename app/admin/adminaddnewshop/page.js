'use client'
import { Box, Button, FormControl, Grid, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';



const AdminAddNewShop = () => {
  
    
   const [shopData,setShopData]=useState({
    shopName:"",
    foodType:"",
    offerPercentage:"",
    foodForCost:"",
    foodForMany:"",
    deliverIn:"",
    mobOnShop:"",
    emailOnShop:"",
    shopAddress:"",
    image:""

   })


    const handleCollect = (event) => {
        const {name,value,files}=event.target;
        if(name =='image'){
            setShopData({...shopData,[name]:files[0]})
        }else{
            setShopData({...shopData,[name]:value})
        }
    };
    // console.log(shopData)


    const handleSubmit=async()=>{

        if( shopData.shopName && shopData.foodType && shopData.offerPercentage && shopData.foodForCost && shopData.foodForMany && shopData.deliverIn && shopData.mobOnShop && shopData.emailOnShop && shopData.shopAddress ){
        try{
            const formData = new FormData();
            formData.append('shopName',shopData.shopName)
            formData.append('deliverIn',shopData.deliverIn)
            formData.append('emailOnShop',shopData.emailOnShop)
            formData.append('foodForCost',shopData.foodForCost)
            formData.append('foodForMany',shopData.foodForMany)
            formData.append('foodType',shopData.foodType)
            formData.append('image',shopData.image)
            formData.append('mobOnShop',shopData.mobOnShop)
            formData.append('offerPercentage',shopData.offerPercentage)
            formData.append('shopAddress',shopData.shopAddress)
           

            const dataResp= await axios.post('/api/shop',formData);
            // console.log(dataResp);
            if(dataResp.data.message=="Shop Created Successfully"){
                alert(dataResp.data.message);
            };
            setShopData({shopName:"",foodType:"",offerPercentage:"",foodForCost:"",foodForMany:"",deliverIn:"",mobOnShop:"",emailOnShop:"",shopAddress:"" })

        }catch(err){
            console.log(err);
            alert(err.message);
        }
    }
    else{
        alert('please enter the details carefully')
    }
    }

//  console.log("info",shopData)

    return (
        
            <Grid container sx={{ justifyContent: "center", overflow: "scroll", pb: "15px" }}>
                <Grid item xs={6} sx={{ border: "1px solid gray" }}>
                    <Grid container>

                        <Grid item xs={12} sx={{ mb: "15px" }}>

                            <Typography align='center' sx={{ bgcolor: "black", color: "white", p: "10px", fontSize: "14px", fontWeight: "700" }}> Add New Shop</Typography>
                        </Grid>
                        <Grid container sx={{ p: "10px" }}>

                        {/* add shop name */}
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px"}}>Shop Name:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <OutlinedInput sx={{ height: "30px", width: "100%" }}  name="shopName" value={shopData.shopName} onChange={handleCollect}/>
                            </Grid>


                       {/* add food type. */}
                            <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Food Type:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <FormControl fullWidth size='small'>
                            
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={shopData.foodType}
                                name='foodType'
                                onChange={handleCollect}
                            >
                                <MenuItem value={'Veg'}>Veg</MenuItem>
                                <MenuItem value={'Non Veg'}>Non Veg</MenuItem>
                                <MenuItem value={'Both'}>Both</MenuItem>
                            </Select>
                        </FormControl>
                            </Grid>


                           {/* add image */}
                            <Grid item xs={12} sx={{  mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Image:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <Box sx={{ height: "30px", width: "100%" }}>
                                    <Typography align='center' sx={{ position: "relative", top: "0px", mt: "4px", border: "1px solid gray" }}>
                                        <input type='file' name='image'  style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }}    onChange={handleCollect}/>
                                        Choose Image
                                    </Typography>
                                </Box>
                            </Grid>


                            {/* add off Percentage */}
                            <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Off Percentage :</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="offerPercentage" value={shopData.offerPercentage} onChange={handleCollect}/>
                            </Grid>
                           
                           {/* food for cost */}
                            <Grid item xs={12} sx={{  mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Food for Cost:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }}  name="foodForCost" value={shopData.foodForCost} onChange={handleCollect} />
                            </Grid>

                            {/* food for many */}
                            <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Food for Many:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }}   name="foodForMany" value={shopData.foodForMany} onChange={handleCollect}/>
                            </Grid>


                            {/* deliver in */}
                            <Grid item xs={12} sx={{  mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Deliver In:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }}  name="deliverIn" value={shopData.deliverIn} onChange={handleCollect}/>
                            </Grid>


                      {/* mobile on shop */}
                            <Grid item xs={12} sx={{  mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Moble no. of Shop:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }}  name="mobOnShop" value={shopData.mobOnShop} onChange={handleCollect}/>
                            </Grid>


                      {/* Email on shop */}
                            <Grid item xs={12} sx={{  mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Email no. of Shop:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <OutlinedInput sx={{ height: "30px", width: "100%" }}  name="emailOnShop" value={shopData.emailOnShop} onChange={handleCollect}/>
                            </Grid>

                         {/* shop address */}
                            <Grid item xs={12} sx={{  mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Shop Address:</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <OutlinedInput sx={{ height: "30px", width: "100%" }} name="shopAddress" value={shopData.shopAddress} onChange={handleCollect}/>
                            </Grid>

                           
                            <Grid item xs={12} sx={{ mt: "20px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                <Button variant='contained' sx={{ bgcolor: "black", color: "white", '&:hover':{ bgcolor: "black" }}} onClick={handleSubmit}>Add new shop</Button>
                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>
            </Grid>
    )
}

export default AdminAddNewShop