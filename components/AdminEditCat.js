'use client'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Modal, OutlinedInput, Paper, Skeleton, Typography } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';


const AdminEditCat = ({ editModal , setEditModal, fetchData,setCustomSnack, setErrorSnack }) => {

    const [catData, setCatData] = useState({});

    // console.log("states",adminProductModalData)

    const handleClose = () => {
        setEditModal({...editModal,open:false})
    };

    const handleCollectData = (e) => {
        const {name,value,checked}=e.target;
        console.log("name :",name, 'value :',value ,'checked :',checked)
        if(name == 'isAvailable'){
            setCatData({...catData, [name]:checked})
        }
        else{
            setCatData({...catData, [name]:value })
        }
    }

  
    // function for fetch data from database
     const handleEditCat =async()=>{
        try{
          const respData = await axios.patch(`/api/category/${catData._id}`,{...catData})
          if(respData.data.message == "Details Edited Successfully"){
            fetchData();
            setEditModal({...editModal,open:false});
            setCustomSnack({open:true,message:respData.data.message})
          }else{
            setErrorSnack({open:true,message:respData.data.message})
          }
          
        }
        catch(err){
          console.log(err);
        }
     }


   

    useEffect(() => {
        setCatData({...editModal.data})
    }, [editModal])

    // console.log(catData.name)
    return (
        <>
            <Modal open={editModal.open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: 'white', p: 4, textAlign: 'center', height: 250, bgcolor: "white"}}>
                    <Grid container>
                        <Grid item xs={12} sx={{ mb: "45px" }}>
                            <Typography align='center' sx={{ bgcolor: "black", color: "white", p: "10px", fontSize: "14px", fontWeight: "700" }}>Edit Category</Typography>
                        </Grid>
                         {
                            Object.keys(catData).length == 0 
                            ?
                            <Grid item xs={12} sm={12} md={3} lg={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Skeleton sx={{height:"60px"}}/>
                            <Skeleton sx={{height:"60px"}}/>
                            </Grid>
                            :
                            <>
                            <Grid item xs={12} sm={12} md={3} lg={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Category Name:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} name='name' value={catData.name } fullWidth onChange={handleCollectData} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>IsAvailable:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ display: "flex", alignItems: "center" }}>
                            <FormGroup sx={{ p: "0px", all: "unset" }}>
                                <FormControlLabel control={<Checkbox name='isAvailable' checked={catData.isAvailable} color="success" onChange={handleCollectData} />} />
                            </FormGroup>
                        </Grid>
                            </>

                         }
                        



                        {/* <Grid item xs={12} sm={12} md={3} lg={3} sx={{  mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Image:</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} lg={9} sx={{ display: "flex", alignItems: "center" }}>
                                <Box sx={{ height: "30px", width: "100%" }}>
                                    <Typography align='center' sx={{ position: "relative", top: "0px", mt: "4px", border: "1px solid gray" }}>
                                        <input type='file' style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }}   />
                                        Choose Image
                                    </Typography>
                                </Box>
                            </Grid> */}


                        {/* 
                        <Grid item xs={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}> isAvailable:</Typography>
                        </Grid>
                        <Grid item xs={9}  sx={{ display: "flex", alignItems: "center" }}>
                            <FormGroup>

                                <FormControlLabel  control={<Checkbox value={adminProductModalData.isCatAvailable}  onChange={(e)=>{handleCollectDataCheck(e)}}/>}  />
                            </FormGroup>
                        </Grid> */}
                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Button variant='contained' sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" } }} onClick={handleEditCat}>Edit Category</Button>
                        </Grid>
                    </Grid>

                </Paper>


            </Modal>
        </>
    )
}

export default AdminEditCat