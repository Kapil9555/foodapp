'use client'
import { Box, Button, FormControl, Grid, MenuItem, Modal, OutlinedInput, Paper, Select, Typography } from '@mui/material';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';



const AdminAddNewItemModal = ({open, setOpen,params,fetchData}) => {
    const router=useRouter()
    // console.log(params)

    const [adminAddNewProduct, setAdminAddNewProduct] = useState({
        name:"",
        cid:"",
        mid:"",
        mrp:'',
        srp:'',
        foodType:""
    });

    
   
const handleCollect =(e)=>{
    const {name, value}=e.target;
    setAdminAddNewProduct({...adminAddNewProduct,[name]:value,cid:params.cid,mid:params.mid})
}

const handleAddCategory =async()=>{
     if(adminAddNewProduct.name || adminAddNewProduct.mrp || adminAddNewProduct.srp || adminAddNewProduct.foodType){
        try{
            const respData= await axios.post('/api/item',adminAddNewProduct)
            console.log(respData)
            if(respData.data.message == "Item Added Successfully"){
                fetchData();
            }
          }catch(err)
          {
            console.log(err)
           };
          setAdminAddNewProduct({
            name:"",
            cid:"",
            mid:"",
            mrp:'',
            srp:'',
            foodType:""
        })
          setOpen(false);
     } 
     else{
        alert("Please fill the required fields");
     };
}


   
    return (
        <>
            <Modal
                open={open}
                onClose={()=>{setOpen(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                 
            >


                <Paper sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    bgcolor: 'white',
                    p: 4,
                    textAlign: 'center',
                    height:"fit-content",
                    bgcolor: "white",border:"1px solid red"
                }}>

            <Grid container>
                        <Grid item xs={12} sx={{ mb: "45px" }}>

                            <Typography align='center' sx={{ bgcolor: "black", color: "white", p: "10px", fontSize: "14px", fontWeight: "700" }}> Add New</Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Item Name:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} name='name' value={adminAddNewProduct.name} fullWidth onChange={handleCollect}/>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt:"15px",pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>M.R.P:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{  mt:"15px",display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} type='number' name='mrp' value={adminAddNewProduct.mrp} fullWidth onChange={handleCollect}/>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{  mt:"15px",pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>S.R.P:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{  mt:"15px",display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} type='number' name='srp' value={adminAddNewProduct.srp} fullWidth onChange={handleCollect}/>
                        </Grid>

                         


                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{  mt:"15px",pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Food Type:</Typography>
                        </Grid>
                            <Grid item  xs={12} sm={12} md={9} lg={9} sx={{ mt:"15px",display: "flex", alignItems: "center" }}>
                            <FormControl fullWidth size='small'>
                            
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={adminAddNewProduct.foodType}
                                name='foodType'
                                onChange={handleCollect}
                            >
                                <MenuItem value={'Veg'}>Veg</MenuItem>
                                <MenuItem value={'Non Veg'}>Non Veg</MenuItem>
                                <MenuItem value={'Both'}>Both</MenuItem>
                            </Select>
                        </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12} md={3} lg={3} sx={{  mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Image:</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} lg={9} sx={{  mt:"10px",display: "flex", alignItems: "center" }}>
                                <Box sx={{ height: "30px", width: "100%" }}>
                                    <Typography align='center' sx={{ position: "relative", top: "0px", mt: "4px", border: "1px solid gray" }}>
                                        <input type='file' style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }}   />
                                        Choose Image
                                    </Typography>
                                </Box>
                            </Grid>



                        
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                <Button variant='contained' sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" } }} onClick={handleAddCategory}>Add Product</Button>
                            </Grid>
                    </Grid>

                </Paper>


            </Modal>
        </>
    )
}

export default AdminAddNewItemModal