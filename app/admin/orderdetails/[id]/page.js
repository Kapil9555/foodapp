'use client'
import AdminAddNewCatModal from '@/components/AdminAddNewCatModal'
import ChangeOrderStatus from '@/components/ChangeOrderStatus'
import { Box, Button, Checkbox, Grid, Paper, Skeleton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'




const OrderDetails = () => {
  // const router = useRouter();
  const param = useParams();
  const [orderdetail, setOrderDetail] = useState({});
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState({skel:true,noData:false})



  // function which is navigating to item list page of specefic category  
  // function for fetch data from database
  const fetchData = async () => {
    try {
      const responseData = await axios.get(`/api/orderdetail/${param.id}`);
      // console.log("server response", responseData.data.resp);
      if (responseData.data.message == "Fetched Successfully") {
        setOrderDetail(responseData.data.resp);
        setLoader({...loader,skel:false,noData:false})
      } else {
        setLoader({...loader,skel:false,noData:true})
      }
      // console.log("responseData", responseData)

    } catch (err) { console.log(err) };
  };

  // console.log("order details", orderdetail)
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
      
        <Grid container sx={{}}>
          <Grid item xs={12}>
            <Box sx={{ p: "5px", pl: "10px",display:"flex",justifyContent:"right",alignItems:"flex-end",flexDirection:"column" }}>
              <Typography  sx={{ fontSize: "25px", fontWeight: "900", color: "black", cursor: "pointer" }} >
               {loader.skel ? <Skeleton sx={{width:"100px",}}/>: orderdetail.delAddress.receiverName+'order'}
              </Typography>
              
              <Typography sx={{ color: "black", cursor: "pointer", mt: "-6px" }} >
              
                {loader.skel ? <Skeleton sx={{width:"150px",mt:"3px"}}/>:<><span style={{ fontSize: "18px", fontWeight: "900" }}>Order Status :</span>  <span style={{ fontSize: '15px', fontWeight: "400px" }}>{orderdetail.orderStatus}</span></>}
              
                
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
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#616161" }}>

                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        S.N
                      </TableCell>

                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        Receiver Name
                      </TableCell>

                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        Delivery Address :
                      </TableCell>

                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        Receiver Mobile.No :
                      </TableCell>

                      <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                        Action
                      </TableCell>

                    </TableRow>
                  </TableHead>
                     {
                      loader.skel ? 
                       <TableBody>
                    <TableRow>
                      <TableCell align='center' sx={{ cursor: "pointer",p:"2px",mr:"10px" }}>
                        <Skeleton sx={{ height: "60px",width:"90%" }} />
                      </TableCell>
                      <TableCell align='center' sx={{ cursor: "pointer",p:"2px",mr:"10px" }}>
                        <Skeleton sx={{ height: "60px",width:"90%" }} />
                      </TableCell>
                      <TableCell  align='center' sx={{ cursor: "pointer",p:"2px",mr:"10px" }}>
                        <Skeleton sx={{ height: "60px",width:"90%" }} />
                      </TableCell>
                      <TableCell  align='center' sx={{ cursor: "pointer",p:"2px",mr:"10px" }}>
                        <Skeleton sx={{ height: "60px",width:"90%" }} />
                      </TableCell>
                      <TableCell  align='center' sx={{ cursor: "pointer",mr:"10px",p:"2px",display:"flex",justifyContent:"space-between" }}>
                        <Skeleton sx={{ height: "60px",width:"47%"}} />
                        <Skeleton sx={{ height: "60px",width:"47%"}} />
                      </TableCell>
                    </TableRow>
                       </TableBody>
                          :
                       <TableBody>
                      <TableRow>
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
                      <TableCell align='center' sx={{ cursor: "pointer" }}>
                        <Box>
                          <Button variant='contained' sx={{ bgcolor: "black", "&:hover": { bgcolor: "black" }, p: "3px 0px", fontSize: "12px", mr: "10px" }}>edit</Button>
                          <Button variant='contained' sx={{ bgcolor: "red", "&:hover": { bgcolor: "red" }, p: "3px 0px", fontSize: "12px" }} onClick={() => { handleDeleteCat(ele._id) }}>delete</Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                       </TableBody>
                     }
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
            
              {loader.skel ?
                <Box sx={{ mt: "20px", display: "flex", justifyContent: "space-evenly" }}>
                  <Skeleton sx={{width:"200px",height:"50px"}}/>
                  <Skeleton sx={{width:"200px",height:"50px"}}/>
                  <Skeleton sx={{width:"200px",height:"50px"}}/>
                  <Skeleton sx={{width:"200px",height:"50px"}}/>
                </Box>
               :
           
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
            }
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
                  {
                      loader.skel ? 
                       <TableBody>
                    <TableRow>
                      <TableCell align='center' sx={{ cursor: "pointer",p:"2px",justifyContent:"Center" }}>
                        <Skeleton sx={{ height: "60px",width:"90%" }} />
                      </TableCell>
                      <TableCell align='center' sx={{ cursor: "pointer",p:"2px" }}>
                        <Skeleton sx={{ height: "60px",width:"90%" }} />
                      </TableCell>
                      <TableCell align='center' sx={{ cursor: "pointer",p:"2px" }}>
                        <Skeleton sx={{ height: "60px",width:"90%" }} />
                      </TableCell>
                      <TableCell align='center' sx={{ cursor: "pointer",p:"2px" }}>
                        <Skeleton sx={{ height: "60px",width:"90%" }} />
                      </TableCell>
                      <TableCell align='center' sx={{ cursor: "pointer",p:"2px" }}>
                        <Skeleton sx={{ height: "60px",width:"90%"}} />
                      </TableCell>
                    </TableRow>
                       </TableBody>
                          :     
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
                     }

                </Table>
                <Box sx={{ p: "10px", pl: "20px", bgcolor: "#eeeeee",display:"flex",justifyContent:"center" }}>
                {loader.skel ?
                
                  <Skeleton sx={{width:"200px",height:"50px"}}/>
                
                :
                  <Typography align='center'><span style={{ fontSize: "20px", fontWeight: "900" }}>To Pay : </span><span style={{ fontSize: "17px", color: "green", fontWeight: "600" }}>{orderdetail.toPay} Rs</span></Typography>
                }
                </Box>
              </Table>
            </Grid>
          </Grid>



        </Grid>

      

    </>
  )
}

export default OrderDetails


