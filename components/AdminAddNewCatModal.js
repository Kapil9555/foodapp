'use client'
import { Box, Button, Grid, Modal, OutlinedInput, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';


const AdminAddNewCatModal = ({open, setOpen,mid,fetchData,setCustomSnack,setErrorSnack}) => {

    const [data,setData] = useState({catName:"",mid:mid,image:""});
   
    
    // console.log("states",adminProductModalData)

    const handleClose = () =>{
       setOpen(false)
    };

    const handleCollectData=(e)=>{
        const {name ,value,files} = e.target;
        if(name=='image'){
            setData({...data,[name]:files[0]})
        }else{
            setData({...data,[name]:value})
        }
    }

  
    const handleAddCategory = async()=>{
        if(data.catName && data.image){
            try{
                const formData= new FormData();
                formData.append('catName',data.catName);
                formData.append('image',data.image);
                formData.append('mid',data.mid)
                const responseData =await axios.post('/api/category',formData);
                // console.log("myresponse",responseData);
               if(responseData.data.message =="Category Created Successfully"){
                 fetchData();
                 setCustomSnack({ open: true, message: responseData.data.message })
                 setData({...data,catName:"",image:""})
               }else{
                setErrorSnack({ open: true, message: responseData.data.message })
               }
              }catch(err){console.log(err)};
        }
        else{
            setErrorSnack({ open: true, message:'please fill the all details'})
        }

        setOpen(false);
    }

  

   
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
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
                    height: 250,
                    bgcolor: "white"
                }}>

                    <Grid container>
                        <Grid item xs={12} sx={{ mb: "45px" }}>

                            <Typography align='center' sx={{ bgcolor: "black", color: "white", p: "10px", fontSize: "14px", fontWeight: "700" }}> Add New</Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Category Name:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} name='catName' value={data.catName} fullWidth onChange={(e)=>{handleCollectData(e)}}/>
                        </Grid>

                          <Grid item xs={12} sm={12} md={3} lg={3} sx={{  mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "17px" }}>Image:</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} lg={9} sx={{ display: "flex", alignItems: "center" }}>
                                <Box sx={{ height: "30px", width: "100%" }}>
                                    <Typography align='center' sx={{ position: "relative", top: "0px", mt: "4px", border: "1px solid gray" }}>
                                        <input type='file' name='image' value={data.img} style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }}  onChange={(e)=>{handleCollectData(e)}}/>
                                        Choose Image
                                    </Typography>
                                </Box>
                            </Grid>



                        {/* <Grid item xs={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}> isAvailable:</Typography>
                        </Grid>
                        <Grid item xs={9}  sx={{ display: "flex", alignItems: "center" }}>
                            <FormGroup>

                                <FormControlLabel  control={<Checkbox value={adminProductModalData.isCatAvailable}  onChange={(e)=>{handleCollectDataCheck(e)}}/>}  />
                            </FormGroup>
                        </Grid> */}
                        <Grid item xs={12} sx={{ mt:"15px", display: "flex", alignItems: "center", justifyContent:"center" }}>
                             <Button variant='contained' sx={{bgcolor:"black",color:"white",'&:hover':{bgcolor:"black"}}} onClick={handleAddCategory}>create Category</Button>
                        </Grid>
                    </Grid>

                </Paper>


            </Modal>
        </>
    )
}

export default AdminAddNewCatModal