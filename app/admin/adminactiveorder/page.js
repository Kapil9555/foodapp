'use client'
import AdminAddNewCatModal from '@/components/AdminAddNewCatModal'
import { Box, Button, Checkbox, Grid, Paper, Skeleton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import nodata2 from '../../../assests/nodata2.gif'




const AdminActiveOrders = () => {
    const router = useRouter();
    const param = useParams();
    const [activeOrder, setActiveOrder] = useState([]);
    const [open, setOpen] = useState(false);
    const [noData , setNodata] = useState(false)



   // function which is navigating to item list page of specefic category
   const handleNavigateDetails = (id) => {
        router.push(`/admin/orderdetails/${id}`);
    };


    // function for fetch data from database
    const fetchData = async () => {
        try {
            const responseData = await axios.get('/api/allactiveorder');
            // console.log("server response", responseData.data.resp);
            if(responseData.data.message == 'Fetched Successfully'){
                setActiveOrder(responseData.data.resp);
            }
            if(responseData.data.message == 'No Data Found'){
                setNodata(true)
            }

        } catch (err) { console.log(err) };
    };


    // function delete categopries with its products
    // const handleDeleteCat = async(id) => {
    //    console.log(id)
    //    try{
    //     const responseData= await axios.delete(`/api/deletecategory/${id}`);
    //     console.log("server response here",responseData);
    //     if(responseData.data.message == "Category Deleted Successfull"){
    //         alert(responseData.data.message);
    //         fetchData();
    //     }
    //    }catch(err){
    //     console.log("error message",err)
    //     alert(err)
    //    }
    // };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Grid container sx={{ height: "80px", bgcolor: "black", alignItems: "center", width: "100%" }}>
                <Grid item xs={4}>
                    <Typography sx={{ fontSize: "30px", fontWeight: "900", color: "white" }}>
                        Admin DashBoard
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{}}>
                <Grid item xs={12}>
                    <Box sx={{ p: "15px", bgcolor: "#e0e0e0" }}>
                        <Typography align='center' sx={{ fontSize: "25px", fontWeight: "900", color: "black", cursor: "pointer" }} >
                          All Active Order
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ p: "15px" }}>
                    <Box sx={{ display: "flex", justifyContent: "right" }}>
                        <Button sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" }, fontSize: "14px", fontWeight: "600" }} onClick={() => { setOpen(true) }}>
                            add new address
                        </Button>
                        {/* <AdminAddNewCatModal open={open} setOpen={setOpen} mid={param.adminallcategoriesdynamic} fetchData={fetchData} /> */}
                    </Box>
                </Grid>
                <Grid item xs={12}>
                {
                    noData ?
                    <Grid container sx={{}}>
                <Grid item xs={12} sx={{ height: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <Box sx={{ position: "relative", height: "200px", width: "200px" }}>
                    <Image src={nodata2} alt='no data' style={{ height: "100%", width: "100%", position: "absolute" }} />
                  </Box>
                  <Typography sx={{fontSize:"20px",fontWeight:"800",color:"#bdbdbd"}}>No Data Found</Typography>
                </Grid>
              </Grid>
              :
              activeOrder.length == 0 ?
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
                                        Reciever Name
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                        Order Status
                                    </TableCell>

                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                       To Pay
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                      Payment Method
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                       Address
                                    </TableCell>

                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
                                  activeOrder.map((ele, index) => {
                                    console.log(ele)
                                        return (
                                            <TableRow key={index}>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>{index+1}</TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }} onClick={() => { handleNavigateDetails(ele._id) }}>
                                                    {ele.delAddress.receiverName}
                                                </TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                {ele.orderStatus}
                                                </TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                {ele.toPay}  
                                                </TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                {ele.paymentMethod}  
                                                </TableCell>

                                                <TableCell align='center' sx={{ cursor: "pointer",textTransform:"capitalize" }}>
                                                {ele.delAddress.address} , {ele.delAddress.landMark} , {ele.delAddress.state} , {ele.delAddress.pinCode}
                                                </TableCell>

                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                    <Box>
                                                        <Button variant='contained' sx={{ bgcolor: "black", "&:hover": { bgcolor: "black" }, p: "3px 0px", fontSize: "12px", mr: "10px" }}>edit</Button>
                                                        <Button variant='contained' sx={{ bgcolor: "red", "&:hover": { bgcolor: "red" }, p: "3px 0px", fontSize: "12px" }} onClick={() => { handleDeleteCat(ele._id) }}>delete</Button>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }

                            </TableBody>
                        </Table>
                    </Table>
                }
                </Grid>


            </Grid>
        </>
    )
}

export default AdminActiveOrders


