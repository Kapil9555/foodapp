'use client'
import AdminAddNewCatModal from '@/components/AdminAddNewCatModal'
import ChangeOrderStatus from '@/components/ChangeOrderStatus'
import { Box, Button, Checkbox, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'




const OrderDetails = () => {
  const router = useRouter();
  const param = useParams();
  const [orderdetail, setOrderDetail] = useState({});
  const [open, setOpen] = useState(false);



  // function which is navigating to item list page of specefic category  
  // function for fetch data from database
  const fetchData = async () => {
    try {
      const responseData = await axios.get(`/api/orderdetail/${param.id}`);
      // console.log("server response", responseData.data.resp);
      setOrderDetail(responseData.data.resp);
      // console.log("responseData", responseData)

    } catch (err) { console.log(err) };
  };

console.log("order details",orderdetail)
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
  // console.log("orderdetails", orderdetail)

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
      {
        Object.keys(orderdetail).length != 0 && <Grid container sx={{}}>
          <Grid item xs={12}>
            <Box sx={{ p: "5px", pl: "10px" }}>
              <Typography align='right' sx={{ fontSize: "25px", fontWeight: "900", color: "black", cursor: "pointer" }} >
                {orderdetail.delAddress.receiverName} Order
              </Typography>

              <Typography align='right' sx={{ color: "black", cursor: "pointer", mt: "-6px" }} >
                <span style={{ fontSize: "18px", fontWeight: "900" }}>Order Status :</span>  <span style={{ fontSize: '15px', fontWeight: "400px" }}>{orderdetail.orderStatus}</span>
              </Typography>
            </Box>
          </Grid>
          <Grid container sx={{ justifyContent: "center", alignItems: "center", mt: "20px" }}>
            <Box>
              <Typography align='center' sx={{ fontSize: "20px", fontWeight: "900" }}>User Details</Typography>
            </Box>
            <Grid item xs={12}>
              <Table container={"true"} component={Paper}>
                <Table aria-label="sticky table">
                  <TableHead sx={{}} >
                    <TableRow sx={{ bgcolor: "#616161" }}>
                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        S.N
                      </TableCell>
                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        Reciever Name
                      </TableCell>
                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        Delivery Address :
                      </TableCell>

                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        Reciever Mobile.No :
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


                    <TableRow >
                      <TableCell align='center' sx={{ cursor: "pointer" }}>{1}</TableCell>
                      <TableCell align='center' sx={{ cursor: "pointer" }}>
                        {orderdetail.delAddress.receiverName}
                      </TableCell>
                      <TableCell align='center' sx={{ cursor: "pointer" }}>
                      {orderdetail.delAddress.address},{orderdetail.delAddress.landMark},{orderdetail.delAddress.state}-{orderdetail.delAddress.pinCode},{orderdetail.delAddress.country}
                      </TableCell>
                      <TableCell align='center' sx={{ cursor: "pointer" }}>
                      {orderdetail.delAddress.mobile}
                      </TableCell>

                      <TableCell align='center' sx={{ cursor: "pointer", textTransform: "capitalize" }}>
                        Xyz
                      </TableCell>

                      <TableCell align='center' sx={{ cursor: "pointer" }}>
                        Xyz
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </Table>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: "30px" }}>
            <Grid item xs={12}>
              <Box>
                <Typography align='center' sx={{ fontSize: "20px", fontWeight: "900" }}>Items Details</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ p: " 0px 10px" }}>
              <Box sx={{ mt: "20px", display: "flex", justifyContent: "space-evenly" }}>
                <Typography sx={{ color: "black", cursor: "pointer", mt: "-6px" }} >
                  <span style={{ fontSize: "18px", fontWeight: "900", color: "green" }}>Order Status :</span>  <span style={{ fontSize: '15px', fontWeight: "400px" }}>{orderdetail.orderStatus}</span>
                  <Button variant='contained' size='small' sx={{ ml: "5px", p: "0px", fontSize: "13px", mb: "3px" }} onClick={() => { setOpen(true) }}>Change</Button>
                  <ChangeOrderStatus open={open} setOpen={setOpen} orderdetail={orderdetail} fetchData={fetchData} />
                </Typography>
                <Typography sx={{ color: "black", cursor: "pointer", mt: "-6px" }} >
                  <span style={{ fontSize: "18px", fontWeight: "900", color: "green" }}>Tax:</span><span style={{ fontSize: '15px', fontWeight: "400px" }}>{orderdetail.tax}</span>
                </Typography>
                <Typography sx={{ color: "black", cursor: "pointer", mt: "-6px" }} >
                  <span style={{ fontSize: "18px", fontWeight: "900", color: "green" }}>Delivery Charge :</span>  <span style={{ fontSize: '15px', fontWeight: "400px" }}>{orderdetail.delChrg}</span>
                </Typography>
                <Typography sx={{ color: "black", cursor: "pointer", mt: "-6px" }} >
                  <span style={{ fontSize: "18px", fontWeight: "900", color: "green" }}>Sub Total :</span>  <span style={{ fontSize: '15px', fontWeight: "400px" }}>{orderdetail.subTotal}</span>
                </Typography>
                <Typography sx={{ color: "black", cursor: "pointer", mt: "-6px" }} >
                  <span style={{ fontSize: "18px", fontWeight: "900", color: "green" }}>Payment Method :</span>  <span style={{ fontSize: '15px', fontWeight: "400px" }}>{orderdetail.paymentMethod}</span>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Table container={"true"} component={Paper}>
                <Table aria-label="sticky table">
                  <TableHead  >
                    <TableRow sx={{ bgcolor: "#616161" }}>
                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        S.N
                      </TableCell>
                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        Item Name
                      </TableCell>
                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        Qty
                      </TableCell>

                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        Mrp
                      </TableCell>
                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        Srp
                      </TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      orderdetail.items.map((ele, index) => {
                        {/* console.log(ele) */ }
                        return <TableRow >
                          <TableCell align='center' sx={{ cursor: "pointer" }}>{index + 1}</TableCell>
                          <TableCell align='center' sx={{ cursor: "pointer" }}>
                            {ele.name}
                          </TableCell>
                          <TableCell align='center' sx={{ cursor: "pointer" }}>
                            {ele.qty}
                          </TableCell>
                          <TableCell align='center' sx={{ cursor: "pointer" }}>
                            {ele.mrp}
                          </TableCell>
                          <TableCell align='center' sx={{ cursor: "pointer", textTransform: "capitalize" }}>
                            {ele.srp}
                          </TableCell>
                        </TableRow>
                      })
                    }
                  </TableBody>
                </Table>
                <Box sx={{ p: "10px", pl: "20px", bgcolor: "#eeeeee" }}>
                  <Typography align='center'><span style={{ fontSize: "20px", fontWeight: "900" }}>To Pay : </span><span style={{ fontSize: "17px", color: "green", fontWeight: "600" }}>{orderdetail.toPay} Rs</span></Typography>
                </Box>
              </Table>
            </Grid>
          </Grid>



        </Grid>

      }

    </>
  )
}

export default OrderDetails


