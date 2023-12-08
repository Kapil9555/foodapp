'use client'
import SnackBarCustom from '@/components/SnackBarCustom'
import SnackBarCustomError from '@/components/SnackBarCustomError'
import { Box, Container, Grid, Paper, Skeleton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


const AdminAllItems = () => {
    const params = useParams()
    const [userAddress, setUserAddress] = useState([])
    const [isShow , setIsShow] = useState(false)
    
    


    const fetchData = async () => {
        try {
            const getData = await axios.get(`/api/useraddress/${params.id}`)
            console.log("server response user",getData)
            if(getData.data.message == 'No Data found'){
                setIsShow(true)
            }

            if(getData.data.message == 'Fetched Successfully'){
                setUserAddress(getData.data.resp)
                setIsShow(false)
            }

        } catch (err) {
            console.log(err)
            alert(err)
        }
    }

    
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <Container maxWidth disableGutters>

            <Grid container sx={{ height: "80px", bgcolor:"black", alignItems: "center", width: "100%" }}>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: "30px", fontWeight: "900", color: "white" }}>
                        Admin DashBoard
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{ p: "15px", bgcolor: "#e0e0e0" }}>
                        <Typography align='center' sx={{ fontSize: "25px", fontWeight: "900", color: "black", cursor: "pointer" }} >
                            User Addresses
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ overflow: "auto" }}>
            {
                isShow ? <Box sx={{height:"40vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Typography align='center' sx={{fontSize:"20px",fontWeight:"800",color:"#9e9e9e"}}>No Data</Typography>
                 </Box>
                 :
                 userAddress.length == 0 ?
                    <Box sx={{p:"10px"}}>
                       {
                        new Array(5).fill(1).map(()=>{
                            return <Skeleton sx={{height:"80px"}}/>
                              
                        })
                       }
                     
                    </Box>
                    :
                 <Table container={"true"} component={Paper}>
                    <Table aria-label="sticky table">
                        <TableHead  >
                            <TableRow sx={{ backgroundColor: "black" }}>
                                <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                    S.N
                                </TableCell>
                                <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                    Receiver Name
                                </TableCell>
                                <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                    Address
                                </TableCell>
                                <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                    Land Mark
                                </TableCell>
                                <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                    PinCode
                                </TableCell>
                                <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                    Country
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                userAddress.map((ele, index) => {
                                    {/* console.log(ele) */}
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align='center' sx={{ cursor: "pointer" }}>{index + 1}</TableCell>
                                            <TableCell align='center' sx={{ cursor: "pointer", textTransform: "capitalize" }} >
                                                {ele.receiverName}
                                            </TableCell>
                                            <TableCell align='center' sx={{ cursor: "pointer", textTransform: "capitalize" }}>
                                                {ele.address}
                                            </TableCell>
                                            <TableCell align='center' sx={{ cursor: "pointer", textTransform: "capitalize" }}>
                                                {ele.landMark}
                                            </TableCell>
                                            <TableCell align='center' sx={{ cursor: "pointer", textTransform: "capitalize" }}>
                                                {ele.pinCode}
                                            </TableCell>
                                            <TableCell align='center' sx={{ cursor: "pointer", textTransform: "capitalize" }}>
                                                {ele.country}
                                            </TableCell>

                                        </TableRow>
                                    )
                                })
                            }

                        </TableBody>
                    </Table>
                </Table>

            }
                 
                
            </Box>
         
        </Container>
    )
}

export default AdminAllItems