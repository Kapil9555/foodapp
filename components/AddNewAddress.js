'use client'
import { Button, CircularProgress, Grid, Modal, OutlinedInput, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';



const AddNewAddress = ({ open, setOpen, fetchData, customSnack, setCustomSnack }) => {

    const [btnShow, setBtnShow] = useState({disabled:false,loader:false})
    const [addNewAdd, setAddNewAdd] = useState({
        receiverName: "",
        address: "",
        landMark: "",
        state: '',
        country: '',
        pinCode: "",
        uid: "",
        mobile: ""
    });



    const handleCollect = (e) => {
        const { name, value } = e.target;
        setAddNewAdd({ ...addNewAdd, [name]: value, uid: JSON.parse(localStorage.getItem('UID')) });
    }

    const handleAdd = async () => {
        setBtnShow({...btnShow,loader:true})
        try {
            const respData = await axios.post('/api/useraddress', addNewAdd);
            console.log(respData);
            if (respData.data.message == "Address Added Successfully") {
                fetchData();
                setBtnShow({...btnShow,loader:false})
                setAddNewAdd({
                    receiverName: "",
                    address: "",
                    landMark: "",
                    state: '',
                    country: '',
                    pinCode: "",
                    uid: "",
                    mobile: ""
                })
                setOpen(false)
                setCustomSnack({ ...customSnack, open: true, message: respData.data.message })


            } else {
                alert(respData.data.message)
                setBtnShow({...btnShow,loader:false})
            }
        } catch (err) {
            console.log(err);
            alert(err)
        }
    }

    useEffect(() => {
        if (addNewAdd.receiverName && addNewAdd.address && addNewAdd.landMark && addNewAdd.state && addNewAdd.country && addNewAdd.mobile && addNewAdd.pinCode && addNewAdd.uid) {
            setBtnShow({...btnShow,disabled:false})
        }
        else {
            setBtnShow({...btnShow,disabled:true})
        }

    }, [addNewAdd])


    return (
        <>
            <Modal open={open} onClose={() => { setOpen(false) }} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: 'white', p: 4, textAlign: 'center', height: "fit-content", bgcolor: "white" }}>
                    {/* this container giving error on build time */}
                    <Grid container>
                        <Grid item xs={12} sx={{ mb: "45px" }}>

                            <Typography align='center' sx={{ bgcolor: "black", color: "white", p: "10px", fontSize: "14px", fontWeight: "700" }}> Add New Address</Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Receiver Name:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} name='receiverName' value={addNewAdd.receiverName} fullWidth onChange={handleCollect} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Address:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} name='address' value={addNewAdd.address} fullWidth onChange={handleCollect} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Land Mark:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} name='landMark' value={addNewAdd.landMark} fullWidth onChange={handleCollect} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>State:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} name='state' value={addNewAdd.state} fullWidth onChange={handleCollect} />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Country:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} name='country' value={addNewAdd.country} fullWidth onChange={handleCollect} />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Pin Code:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} type='number' name='pinCode' value={addNewAdd.pinCode} fullWidth onChange={handleCollect} />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ mt: "15px", pr: "7px", display: "flex", alignItems: "center", justifyContent: "right" }}>
                            <Typography sx={{ fontSize: "14px" }}>Mobile Number:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={9} sx={{ mt: "15px", display: "flex", alignItems: "center" }}>
                            <OutlinedInput sx={{ height: "30px" }} type='number' name='mobile' value={addNewAdd.mobile} fullWidth onChange={handleCollect} />
                        </Grid>


                        <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                            {
                                btnShow.loader ?
                                    <CircularProgress size={20} sx={{ mr: "10px", mt: "8px" }} />
                                    :
                                <Button variant='contained' disabled={btnShow.disabled} sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" } }} onClick={handleAdd}>Add Address</Button>
                            }
                        </Grid>
                    </Grid>

                </Paper>


            </Modal>
        </>
    )
}

export default AddNewAddress