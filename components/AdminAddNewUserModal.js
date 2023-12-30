'use client'
import { Box, Button, CircularProgress, Container, Grid, Modal, Paper, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';



const AdminAddNewUserModal = ({ open, setOpen, mid, fetchData,errorSnack, setErrorSnack ,customSnack,setCustomSnack}) => {
    const [checker, setChecker] = useState(true);
    const [registerData, setRegisterData] = useState({fullName: "",email: "",mobile: "",password: ""});
    const [loader ,setloader]=useState(false)
  
    const handleCollect = (e) => {
        const { name, value } = e.target;
        
        if (name == 'mobile' && value.length > 10) {
            // alert("Mobile Number Not More Then 10 digits")
        }
        else {
            setRegisterData({ ...registerData, [name]: value });
        };
    };
    
    useEffect(() => {
        if (registerData.fullName && registerData.email && (registerData.mobile.length < 11 && registerData.mobile.length > 9) && registerData.password.length > 7) {
            setChecker(false)
        } else {
            setChecker(true)
        }
    }, [registerData]);
    

    const handleSubmit = async () => {
        // console.log(registerData);
        setloader(true)
        try {
            const respData = await axios.post('/api/user', registerData);
            // console.log(respData);
            if (respData.data.message == "This Mobile No. is Already Registered") {
                setErrorSnack({...errorSnack,message:respData.data.message,open:true})
                setloader(false)
                 setOpen(false);
            };
            if (respData.data.message == 'User Registered Successfully') {
                setOpen(false);
                fetchData();
                setloader(false)
                setCustomSnack({...customSnack,open:true,message:respData.data.message})
                setRegisterData({fullName: "",email: "",mobile: "",password: ""});
                
            };
        } catch (err) {
            console.log(err);
            alert(err.message);
        }
    };
    
    
    const handleClose = () => {
        setOpen(false)
    };
    

    return (
        <>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">


                <Paper sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: 500,bgcolor: 'white',p: 4,textAlign: 'center',bgcolor: "white"}}>
                    <Box sx={{ p: "8px", backgroundColor: "#37474f", position: 'sticky', top: '0px' }}>
                        <Typography align='center' sx={{ color: "white", fontSize: "25px", fontWeight: 700 }}>
                            Add New User
                        </Typography>
                    </Box>
                    <Container disableGutters maxWidth="xs">
                    
                        <Box sx={{marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: "5px",p: "5px"}}>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                  {/* all textfield giving errors on build time */}
                                    <Grid item xs={12}>
                                        <TextField autoComplete="given-name" name="fullName" required fullWidth id="fullname" label="Full Name" autoFocus value={registerData.fullName} onChange={handleCollect}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField required fullWidth id="mobile" label="Mobile" name="mobile" type='number' autoComplete="mobile" value={registerData.mobile} onChange={handleCollect}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" value={registerData.email} onChange={handleCollect}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" value={registerData.password} onChange={handleCollect}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography align='center' sx={{ fontSize: "15px" }}>Image</Typography>
                                        <Box sx={{ height: "30px", width: "100%" }}>
                                            <Typography align='center' sx={{ position: "relative", top: "0px", mt: "4px", border: "1px solid gray" }}>
                                                <input type='file' style={{ zIndex: 99, opacity: 0, position: "absolute", left: "0px", top: "0px", height: "30px", width: "100%" }} />
                                                Choose Image
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                {
                                    loader ?
                                      <CircularProgress size={20}/>
                                    :
                                  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={checker} onClick={handleSubmit}>
                                     Submit
                                  </Button>
                                 }
                                </Box>
                               
                            </Box>
                        </Box>
                     
                    </Container>


                </Paper>


            </Modal>
        </>
    )
}

export default AdminAddNewUserModal