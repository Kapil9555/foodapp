'use client'
import { Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, Grid, IconButton, MenuItem, Modal, OutlinedInput, Paper, Select, Typography } from '@mui/material';
import axios from 'axios';
import {  useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';



const AdminEditItemDetails = ({editModal,setErrorSnack, setCustomSnack, setEditModal,fetchData}) => {
    const router = useRouter()
    const [modalLoader , setModalLoader]=useState(false) 
    const [checker, setChecker] = useState(true)

//   console.log(editModal)



    // const handleEdit = async () => {
    //     try {
    //         const respData = await axios.post('/api/item', adminAddNewProduct)
    //         console.log("response api", respData)
    //         if (respData.data.message == "Item Added Successfully") {
    //             fetchData();
    //             setAdminAddNewProduct({ name: "", cid: "", mid: "", mrp: '', srp: '', foodType: "" })
    //             setOpen(false);
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }

    // }


    const handleCollect =(e)=>{
    //    console.log(e.target)
    const {name,value,checked}=e.target
    // console.log(name , value , checked)
    if(name =="isAvailable" || name=="isPopular"){
        setEditModal({...editModal,data:{...editModal.data,[name]:checked}})
    }
    else{
        setEditModal({...editModal,data:{...editModal.data,[name]:value}})
    }
    }

    const handleEdit=async()=>{
        // console.log(editModal.data)
        setModalLoader(true)
        try{
           const resp = await axios.patch(`/api/item/${editModal.data._id}`,editModal.data)
           console.log(resp);
           if(resp.data.message == "Details Updated Successfully"){
            fetchData();
            setEditModal({...editModal,open:false})
            setCustomSnack({open:true,message:resp.data.message})
            setModalLoader(false)
           }else{
            console.log(resp.data.message);
            setEditModal({...editModal,open:false})
            setErrorSnack({open:true,message:resp.data.message})
            setModalLoader(false)
           }
        }
        catch(err){
            console.log(err.message)
        }
    }
    // console.log("all data",editModal.data)

    return (
        <>
            <Modal open={editModal.open} onClose={() => { setEditModal({...editModal,open:false}) }} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">


                <Paper sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: 500,bgcolor: 'white',p: 4,textAlign: 'center',height: "fit-content",bgcolor: "white"
                }}>

                    <Grid container>                                                                
                        <Grid item xs={12} sx={{ mb: "45px" }}>

                            <Typography align='center' sx={{ bgcolor: "black", color: "white", p: "10px", fontSize: "14px", fontWeight: "700" }}> Add New</Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Item Name:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} name='name' value={editModal.data.name} fullWidth onChange={handleCollect} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px"}}>M.R.P:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} type='number' name='mrp' value={editModal.data.mrp} fullWidth onChange={handleCollect} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>S.R.P:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} type='number' name='srp' value={editModal.data.srp} fullWidth onChange={handleCollect} />
                        </Grid>




                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Food Type:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <FormControl fullWidth size='small'>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={editModal.data.foodType} name='foodType' onChange={handleCollect}>
                                    <MenuItem value={'Veg'}>Veg</MenuItem>
                                    <MenuItem value={'Non Veg'}>Non Veg</MenuItem>
                                    <MenuItem value={'Both'}>Both</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={7} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>IsPopular:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={5} sx={{ display: "flex", alignItems: "center",justifyContent:"left" }}>
                            <FormGroup sx={{ p: "0px", all: "unset" }}>
                                <FormControlLabel control={<Checkbox name='isPopular' checked={editModal.data.isPopular} color="success" onChange={handleCollect} />} />
                            </FormGroup>
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={7} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>IsAvailable:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={5} sx={{ display: "flex", alignItems: "center",justifyContent:"left" }}>
                            <FormGroup sx={{ p: "0px", all: "unset" }}>
                                <FormControlLabel control={<Checkbox name='isAvailable' checked={editModal.data.isAvailable} color="success" onChange={handleCollect} />} />
                            </FormGroup>
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px",  display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "17px" }}>Ratings: </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="ratings"  value={editModal.data.ratings} onChange={handleCollect} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "17px" }}>Image:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "10px", display: "flex", alignItems: "center" }}>
                            <Box sx={{ height: "30px", width: "100%" }}>
                                <Typography align='center' sx={{ position: "relative", top: "0px", mt: "4px", border: "1px solid gray" }}>
                                    <input type='file' disabled style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }} />
                                    Choose Image
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                        {
                            modalLoader==true ?
                                <CircularProgress size={'1.7rem'} color='inherit'/>
                            :
                            <Button variant='contained' sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" } }} onClick={handleEdit}>Edit Product</Button>
                        }
                        </Grid>

                {/* 
                        <Grid item xs={12} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Box sx={{width:"100%",height:"100px",alignItems:"center",display:"flex",justifyContent:"space-between"}}>
                               
                                   <IconButton>
                                     <ArrowCircleLeftIcon sx={{color:"blue",fontSize:"60px"}}/>
                                   </IconButton>
                                   <IconButton>
                                     <ArrowCircleRightIcon sx={{color:"blue",fontSize:"60px"}}/>
                                   </IconButton>
                              
                            </Box>
                        </Grid> */}

                    </Grid>

                </Paper>


            </Modal>
        </>
    )
}

export default AdminEditItemDetails