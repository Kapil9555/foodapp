'use client'
import SnackBarCustom from '@/components/SnackBarCustom';
import SnackBarCustomError from '@/components/SnackBarCustomError';
import { Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, Grid, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';



const AdminEditShop = () => {
    const router = useRouter() 
    const params=useParams()

    // console.log("merchant id",params.mid)
    const [orgData , setOrgData] = useState({})
    const [btnControl,setBtnControl]=useState({loader:false,disable:true})
    const [customSnack , setCustomSnack] = useState({open:false,message:""})
    const [errorSnack , setErrorSnack] = useState({open:false,message:""})
    const [shopData, setShopData] = useState({})


    const handleCollect =(e) => {
        const {name ,value} = e.target;
        // console.log(name,value)
        // console.log(name,value)
        setShopData({...shopData,[name]:value})
        
    };

    const handleCheckCollect =(e)=>{
        const {name , checked}=e.target;
        setShopData({...shopData,[name]:checked});
        
    }

    // const checkValues =()=>{
    //   const obj1=JSON.stringify(shopData);
    //   const obj2= JSON.stringify(orgData)
    //   if(obj1==obj2){
    //     setBtnControl({...btnControl,disable:true})
    //   }else{
    //     setBtnControl({...btnControl,disable:false})

    //   }
    // }

    // const checkValues = () => {
    //     console.log("shop", shopData);
    //     console.log("org", orgData);
    
        
    //     const hasChanges = Object.keys(orgData).some((key) => shopData[key] !== orgData[key]);
    
    //     if(hasChanges){

    //         setBtnControl({ loader: false, disable: true });
    //     }
    //     else{
    //         setBtnControl({ loader: false, disable: false });

    //     }
    //     // Update button control state
    // };
    

    // console.log("button comp",btnControl)


    const handleSubmit = async () => {
        setBtnControl({...btnControl,loader:true})
            try {
                const respData = await axios.patch(`/api/editshopdata/${params.mid}`,shopData);
                // console.log(respData);
                if (respData.data.message == "Edited Successfully") {
                    setBtnControl({...btnControl,loader:false})
                    fetchData();
                    setCustomSnack({...customSnack,open:true,message:respData.data.message})
                    router.push('/admin/adminallshops')
                };
                if(respData.data.message == "Failed To Edit Data"){
                    setBtnControl({...btnControl,loader:false})
                    fetchData();
                    setErrorSnack({...errorSnack,open:true,message:respData.data.message})
                }
            } catch (err) {
                console.log(err);
                alert(err.message);
            }
      
    }

    const fetchData =async()=>{
        try{
          const respData = await axios.get(`/api/shop/${params.mid}`)
        //   console.log(respData)
          if(respData.data.message == "Fetched Successfully"){
             const data = respData.data.resp;
            //  console.log("data",data)
             setOrgData(data)
             setShopData(data)
          }
          if(respData.data.message == "Failed To Fetch Data"){
            alert(respData.data.message)
          }
        }
        catch(err){
            console.log(err.message);
            alert(err.message)
        }
    }

    useEffect(()=>{fetchData()},[])

    useEffect(()=>{
       
     },[shopData])
    
    console.log(btnControl.disable)

    return (
        <>
         <Grid container sx={{ justifyContent: "center", overflow: "scroll", pb: "15px" }}>
            <Grid item xs={6} sx={{ border: "1px solid gray" }}>
                <Grid container>

                    <Grid item xs={12} sx={{ mb: "15px" }}>

                        <Typography align='center' sx={{ bgcolor: "black", color: "white", p: "10px", fontSize: "14px", fontWeight: "700" }}> Edit Shop</Typography>
                    </Grid>
                    <Grid container sx={{ p: "10px" }}>

                        {/* add shop name */}
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Shop Name:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px", width: "100%" }} name="shopName" value={shopData.shopName || ''} onChange={handleCollect} />
                        </Grid>


                        {/* add food type. */}
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Food Type:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <FormControl fullWidth size='small'>

                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={shopData.foodType || ''} name='foodType' onChange={handleCollect} displayEmpty sx={{ display: "flex", justifyContent: "center" }}>
                                    <MenuItem value='' disabled={true}><em>Food Type</em></MenuItem>
                                    <MenuItem value={'Veg'}>Veg</MenuItem>
                                    <MenuItem value={'Non Veg'}>Non Veg</MenuItem>
                                    <MenuItem value={'Both'}>Both</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>


                        {/* add image */}
                        {/* <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Image:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ height: "30px", width: "100%" }}>
                                <Typography align='center' sx={{ position: "relative", top: "0px", mt: "4px", border: "1px solid gray" }}>
                                    <input type='file' style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }} />
                                    Choose Image
                                </Typography>
                            </Box>
                        </Grid> */}


                        {/* add off Percentage */}
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Off Percentage :</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="offerPercentage" value={shopData.offerPercentage || ''} onChange={handleCollect} />
                        </Grid>

                        {/* food for cost */}
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Food for Cost:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="foodForCost" value={shopData.foodForCost || ''} onChange={handleCollect} />
                        </Grid>

                        {/* food for many */}
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Food for Many:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="foodForMany" value={shopData.foodForMany || ''} onChange={handleCollect} />
                        </Grid>

                        {/* deliver in */}
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Deliver In:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="deliverIn" value={shopData.deliverIn || ''} onChange={handleCollect} />
                        </Grid>


                        {/* mobile on shop */}
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Moble no. of Shop:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="mobOnShop" value={shopData.mobOnShop || ''} onChange={handleCollect} />
                        </Grid>


                        {/* wallet*/}
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Wallet:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="wallet" value={shopData.wallet || ''} onChange={handleCollect} />
                        </Grid>


                        {/* Email on shop */}
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Email no. of Shop:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px", width: "100%" }} name="emailOnShop" value={shopData.emailOnShop || ''} onChange={handleCollect} />
                        </Grid>

                        {/* shop address */}
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Shop Address:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px", width: "100%" }} name="shopAddress" value={shopData.shopAddress || ''} onChange={handleCollect} />
                        </Grid>


                        {/* ratings */}
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Ratings:</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="ratings" value={shopData.ratings || ''} onChange={handleCollect} />
                        </Grid>



                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box>
                                <FormControl component="fieldset" sx={{ml:"30px"}}>
                                    <FormGroup aria-label="position" column={'true'}>
                                        <FormControlLabel
                                            checked={shopData.isShopBanned || false}
                                            sx={{ mt: "15px", ml: "10px" }}
                                            control={<Checkbox size='small' sx={{ ml: "4px", p: "4px" }} name='isShopBanned'  onChange={handleCheckCollect}/>}
                                            label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>Is Shop Banned</Typography>}
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            checked={shopData.isShopOpen || false}
                                            sx={{ mt: "10px", ml: "10px" }}
                                            control={<Checkbox size='small'  sx={{ ml: "3px", p: "4px" }} name='isShopOpen'  onChange={handleCheckCollect}/>}
                                            label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>Is Shop Open</Typography>}
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            checked={shopData.isPopular || false}
                                            sx={{ mt: "10px", ml: "10px" }}
                                            control={<Checkbox size='small' sx={{ ml: "3px", p: "4px" }} name='isPopular' checked={shopData.isPopular || false} onChange={handleCheckCollect}/>}
                                            label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>Is Popular</Typography>}
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            checked={shopData.isTrending || false}
                                            sx={{ mt: "10px", ml: "10px" }}
                                            control={<Checkbox size='small' sx={{ ml: "3px", p: "4px" }} name='isTrending' onChange={handleCheckCollect}/>}
                                            label={<Typography sx={{ mt: "4px", fontSize: "16px", fontWeight: "700" }}>Is Trending</Typography>}
                                            labelPlacement="end"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: "20px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                        {
                            btnControl.loader ? <CircularProgress size={'2rem'}/>
                            :
                            <Button variant='contained'  sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" } }} onClick={handleSubmit}>Edit Shop</Button>
                        }
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>
         </Grid>
         <SnackBarCustom customSnack={customSnack}  setCustomSnack={setCustomSnack}/>
         <SnackBarCustomError errorSnack={errorSnack} setErrorSnack={setErrorSnack}/>
        </>
    )
}

export default AdminEditShop