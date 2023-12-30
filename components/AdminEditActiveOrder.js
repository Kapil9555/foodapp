import { Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputLabel, MenuItem, Modal, OutlinedInput, Paper, Select, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';



const AdminEditActiveOrder = ({ editModal, setErrorSnack, setCustomSnack, setEditModal, fetchData }) => {

    const [modalLoader, setModalLoader] = useState(false)
    const [orderStatus,setOrderStatus]=useState([])
    // console.log("data", editModal.data)

    const handleCollect = (e) => {
        //    console.log(e.target)
        const { name, value, checked } = e.target
        // console.log(name , value , checked)
        if (name == "isAvailable" || name == "isPopular") {
            setEditModal({ ...editModal, data: { ...editModal.data, [name]: checked } })
        }
        else {
            setEditModal({ ...editModal, data: { ...editModal.data, [name]: value } })
        }
    }


    const fetchOrderStatus = async () => {
        const responseData = await axios.get('/api/orderstatus')
        setOrderStatus(responseData.data.resp)
        // console.log("orderstatus",responseData)
    }


    const handleEdit = async () => {
        // console.log(editModal.data)
        setModalLoader(true)
        try {
            const resp = await axios.patch(`/api/allactiveorder/${editModal.data._id}`, editModal.data)
            console.log("response",resp);
            if (resp.data.message == "Details Updated Successfully") {
                fetchData();
                setEditModal({ ...editModal, open: false })
                setCustomSnack({ open: true, message: resp.data.message })
                setModalLoader(false)
            } else {
                // console.log(resp.data.message);
                setEditModal({ ...editModal, open: false })
                setErrorSnack({ open: true, message: resp.data.message })
                setModalLoader(false)
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() => {
        fetchOrderStatus()
    }, [])
    // console.log("all data",editModal.data)

    return (
        <>
            <Modal open={editModal.open} onClose={() => { setEditModal({ ...editModal, open: false }) }} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">


                <Paper sx={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: 'white', p: 4, textAlign: 'center', height: "fit-content", bgcolor: "white"
                }}>

                    <Grid container>
                        <Grid item xs={12} sx={{ mb: "45px" }}>

                            <Typography align='center' sx={{ bgcolor: "black", color: "white", p: "10px", fontSize: "14px", fontWeight: "700" }}>Edit Active Order</Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"} }}>
                            <Typography sx={{ fontSize: "14px" }}>Delivery Charge:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} name='delChrg' value={editModal.data.delChrg} fullWidth onChange={handleCollect} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center",  justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"} }}>
                            <Typography sx={{ fontSize: "14px" }}>Discount:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} type='number' name='dis' value={editModal.data.dis} fullWidth onChange={handleCollect} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", display: "flex", alignItems: "center",  justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"}}}>
                            <Typography sx={{ fontSize: "14px" }}>Sub Total: </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="subTotal" value={editModal.data.subTotal} onChange={handleCollect} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"}}}>
                            <Typography sx={{ fontSize: "14px" }}>Tax: </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="tax" value={editModal.data.tax} onChange={handleCollect} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"}}}>
                            <Typography sx={{ fontSize: "14px" }}>To Pay: </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput type='number' sx={{ height: "30px", width: "100%" }} name="toPay" value={editModal.data.toPay} onChange={handleCollect} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent:{lg:"right",m:"right",sm:"center",xs:"center"}}}>
                            <Typography sx={{ fontSize: "14px" }}>Order Status: </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                <Select labelId="demo-select-small-label" id="demo-select-small" name='orderStatus' value={editModal.data.orderStatus}  onChange={handleCollect}>
                                    {
                                        orderStatus.map((ele, index) => {
                                            return <MenuItem key={index} value={ele}>
                                                {ele}
                                            </MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: "14px" }}>Image:</Typography>
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
                                modalLoader == true ?
                                    <CircularProgress size={'1.7rem'} color='inherit' />
                                    :
                                    <Button variant='contained' sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" } }} onClick={handleEdit}>Edit Product</Button>
                            }
                        </Grid>

                    </Grid>

                </Paper>


            </Modal>
        </>
    )
}

export default AdminEditActiveOrder