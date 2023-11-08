'use client'
import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';


const CheckOutPage = () => {
    return (
        <>
            <Container disableGutters maxWidth='xl'>
                <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', mt:'0px',overflow:'hidden'  }}>
                    <Grid item lg={4} md={6} sm={8} xs={11} >
                        <Paper sx={{borderRadius:'10px 10px 10px 10px', mt:'40px'}}elevation={2}>
                        <Grid container>
                            <Grid item xs={12} sx={{bgcolor:'black', padding:'8px', textAlign:'center', borderRadius:'11px 11px 0px 0px'}}>
                                <Typography sx={{color:'White', fontSize:{lg:'25px', md:'23px', sm:'20px', xs:'18px'}, fontWeight:'bold'}}>CheckOut</Typography>

                            </Grid>

                            <Grid item xs={12} sx={{ p:'10px'}}>
                                <Typography sx={{ fontSize:{lg:'21px', md:'19px', sm:'17px', xs:'16px'}, fontWeight:'bold', color:'#616161'}}>3 Items</Typography>
                            </Grid>

                            <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center',p:'10px'}}>
                                <Grid item xs={8} >
                                    <Typography sx={{fontSize:{lg:'16px', mr:'16px', sm:'14px', xs:'14px'}, fontWeight:'bold'}}>Burger x 3</Typography>
                                    <Typography sx={{fontSize:{lg:'14px', md:'13px', sm:'12px', xs:'9px'}, fontWeight:'bold',color:'#bdbdbd'}}>50 x 3</Typography>

                                </Grid>
                                <Grid item xs={4}  sx={{ textAlign:'right'}}>
                                    <Typography sx={{fontSize:{lg:'16px', mr:'16px', sm:'14px', xs:'14px'}, fontWeight:'bold', color:'#616161'}}>Rs 150</Typography>

                                </Grid>
                            </Grid>

                            <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center',p:'10px'}}>
                                <Grid item xs={8} >
                                    <Typography sx={{fontSize:{lg:'16px', mr:'16px', sm:'14px', xs:'14px'}, fontWeight:'bold'}}>Kadhai Paneer x 2</Typography>
                                    <Typography sx={{fontSize:{lg:'14px', md:'13px', sm:'12px', xs:'9px'}, fontWeight:'bold',color:'#bdbdbd'}}>140 x 2</Typography>

                                </Grid>
                                <Grid item xs={4}  sx={{textAlign:'right'}}>
                                    <Typography sx={{fontSize:{lg:'16px', mr:'16px', sm:'14px', xs:'14px'}, fontWeight:'bold', color:'#616161'}}>Rs 240</Typography>

                                </Grid>
                            </Grid>

                            <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center',p:'10px'}}>
                                <Grid item xs={8} >
                                    <Typography sx={{fontSize:{lg:'16px', mr:'16px', sm:'14px', xs:'14px'}, fontWeight:'bold'}}>Coke x 2</Typography>
                                    <Typography sx={{fontSize:{lg:'14px', md:'13px', sm:'12px', xs:'9px'}, fontWeight:'bold',color:'#bdbdbd'}}>90 x 2</Typography>

                                </Grid>
                                <Grid item xs={4}  sx={{ textAlign:'right'}}>
                                    <Typography sx={{fontSize:{lg:'16px', mr:'16px', sm:'14px', xs:'14px'}, fontWeight:'bold', color:'#616161'}}>Rs 180</Typography>

                                </Grid>
                            </Grid>

                            <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center',p:'10px', bgcolor:'black', borderRadius:'0px 0px 11px 11px'}}>
                                <Grid item xs={4} >
                                    <Typography sx={{fontSize:{lg:'19px', md:'18px', sm:'16px', xs:'15px'}, fontWeight:'bold', color:'white'}}>To Pay</Typography>
                                    

                                </Grid>
                                <Grid item xs={4}  sx={{textAlign:'right'}}>
                                    <Typography sx={{fontSize:{lg:'19px', md:'18px', sm:'16px', xs:'15px'}, fontWeight:'bold', color:'white'}}>Rs 570</Typography>

                                </Grid>
                            </Grid>

                        </Grid>
                        </Paper>

                    </Grid>

                </Grid>

            </Container>

        </>
    )
}

export default CheckOutPage