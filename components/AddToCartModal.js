'use client'
import AddBoxIcon from '@mui/icons-material/AddBox';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Box, Button, IconButton, Modal, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import cardImg from '../assests/burger1.jpg';


const AddToCartModal = ({ modalData, setModalData }) => {

const handleClose = () => {
        setModalData({ ...modalData, open: false })
    };

const handleQtyInc =()=>{
        setModalData({...modalData,data:{...modalData.data,qty:modalData.data.qty+1}})
}

const handleQtyDec =()=>{
    if(modalData.data.qty >0){
        setModalData({ ...modalData,data:{...modalData.data,qty:modalData.data.qty-1}})
    }
    
}
// console.log("qty data",{...modalData.data})
    return (
        <>
            <Modal open={modalData.open} onClose={handleClose} sx={{border:"none"}} disableAutoFocus>  
                <Paper sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: { lg: 400, md: 400, sm: 380, xs: 320 },bgcolor: 'white',textAlign: 'center',borderRadius: "15px",overflow: "hidden",height: { lg: 200, md: 200, sm: 180, xs: 160 },bgcolor: "white"}}>
                    <Box sx={{ height: "100%", width: "100%", display: "flex", position: "relative",bgcolor:"white" }}>

                        <IconButton sx={{ position: "absolute", top: "-5px", right: "-8px", zIndex: 9999 }} onClick={()=>{setModalData({...modalData,open:false})}}>
                            <CancelOutlinedIcon sx={{ color: "#616161", fontSize: { lg: "30px", md: "30px", sm: "25px", xs: "20px" } }} />
                        </IconButton>

                        <Box sx={{ height: "100%", mt: "10px", width: { lg: 180, md: 180, sm: 160, xs: 130 }, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Image alt='img' src={cardImg} style={{ height: "85%", width: "95%" }} />
                        </Box>

                        <Box sx={{ width: { lg: 220, md: 220, sm: 220, xs: 200 },bgcolor:"#b2ebf2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box>
                                <Typography align='center' sx={{ fontSize:{lg:"25px",md:"25px",sm:"22px",xs:"20px"}, fontWeight: "800" }}>{modalData.data.name}</Typography>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "Center", mt: { lg: "15px", md: "15px", sm: "13px", xs: "8px" } }}>
                                    <Box sx={{ width:{lg:"150px",md:"150px",sm:"130px",xs:"100px"}, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        
                                        
                                        <IconButton onClick={handleQtyDec}>
                                            <IndeterminateCheckBoxIcon sx={{fontSize: {lg:"35px",md:"35px",sm:"30px",xs:"25px"},color:"#37474f" }} />
                                        </IconButton>
                                        
                                        <Typography align='center' sx={{ fontSize:{ lg:"24px",md:"24px",sm:"21px",xs:"15`px"}, fontWeight: 800 }}>{modalData.data.qty}</Typography>
                                        
                                        <IconButton onClick={handleQtyInc}>
                                            <AddBoxIcon sx={{ fontSize: {lg:"35px",md:"35px",sm:"30px",xs:"25px"},color:"#37474f"}} />
                                        </IconButton>
                                        
                                    </Box>

                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: { lg: "15px", md: "15px", sm: "13px", xs: "8px" }, width: "100%" }}>
                                    <Button variant='contained' fullWidth sx={{ bgcolor: "green", "&:hover": { bgcolor: "green" } }}>Add</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>


            </Modal>
        </>
    )
}

export default AddToCartModal