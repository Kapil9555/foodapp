'use client'
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Grid, Paper, Skeleton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import nodata from '../../../assests/nodata2.gif'
import Image from 'next/image'
import SnackBarCustom from '@/components/SnackBarCustom'
import SnackBarCustomError from '@/components/SnackBarCustomError'
import TableSkeleton from '@/components/TableSkeleton'




const AdminAllShops = () => {
    const router = useRouter()
   
    const [allShops, setAllShops] = useState([])
    const [checkBox , setCheckBox]=useState("")
    const [noData , setNoData] =useState(false)
    const [customSnack,setCustomSnack]=useState({open:false,message:""})
    const [errorSnack, setErrorSnack] = useState({open:false,message:""})
    const tableHead = ['S.N','Shop Name','Mobile','Is Available','Wallet','Action']


    //    funtion navigate to adminallcategories page 
    const handleNavigateCat = (id) => {router.push(`/admin/adminallcategroies/${id}`);}


    //    funtion navigate to adminaddnewshop page 
    const handleNavigateAddShop = () => {router.push('/admin/adminaddnewshop');}

    const fetchData = async () => {
        try {
            const respData = await axios.get('/api/shop')
             if(respData.data.message == 'All Data Fetched'){setAllShops(respData.data.resp);setNoData(false)}
             if(respData.data.message == 'No Data Found'){setNoData(true);}
        } catch (err) { console.log(err) }
    }

    const checkBoxHandler=async(e,id)=>{
          setCheckBox(id);
          const res = await axios.patch(`/api/shop/${id}`,{isAvailable:e.target.checked});
          console.log("response is active",res);
          if(res.data.message == 'Updated Successfully'){fetchData();setCheckBox("")}
          if(res.data.message == "Failed To Update"){setCheckBox("")}
        }
    const editShopHandler=(mid)=>{
         router.push(`admineditshop/${mid}`)
    }

    const deleteShopHandler=async(id)=>{
        try{
          const respData = await axios.delete(`/api/deleteshop/${id}`)
        //   console.log("response data",respData)
          if(respData.data.message == 'Shop Deleted Successfully'){
            fetchData();
            setCustomSnack({open:true,message:respData.data.message})
          }
          else{
            
            setErrorSnack({open:true,message:respData.data.message})
          }
        }
        catch(err){
            console.log(err.message)
        }
    }
    

    useEffect(() => {fetchData();},[])

    return (
        <>
            <Grid container sx={{ height: "80px", bgcolor: "black", alignItems: "center", width: "100%" }}>
                <Grid item xs={4} sx={{}}>
                    <Typography sx={{ fontSize: "30px", fontWeight: "900", color: "white" }}>
                        Admin DashBoard
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{}}>
                <Grid item xs={12}>
                    <Box sx={{ p: "15px", bgcolor: "#e0e0e0" }}>
                        <Typography align='center' sx={{ fontSize: "25px", fontWeight: "900", color: "black", cursor: "pointer" }} >
                            All Shops
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ p: "15px" }}>
                    <Box sx={{ display: "flex", justifyContent: "right" }}>
                        <Button sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" }, fontSize: "14px", fontWeight: "600" }} onClick={handleNavigateAddShop}>
                            add new shop
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
               
               {
                   noData ?
                   <Grid container sx={{}}>
                <Grid item xs={12} sx={{ height: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                 <Box sx={{ position: "relative", height: "200px", width: "300px" }}>
                    <Image src={nodata} alt='no data' style={{ height: "100%", width: "100%", position: "absolute" }} />
                 </Box>
                 
               </Grid>
             </Grid>
             :
             allShops.length == 0 ?
                    <TableSkeleton tableHead={tableHead}/>
                   :
                    <Table container={"true"} component={Paper}>
                        <Table aria-label="sticky table">
                            <TableHead  >
                                <TableRow sx={{ backgroundColor: "black" }}>
                                {
                                    tableHead.map((item)=>{
                                        return(
                                            <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                             {item}
                                    </TableCell>
                                        )
                                    })
                                }
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    allShops.map((ele, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>{index + 1}</TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }} onClick={() => { handleNavigateCat(ele._id) }}>
                                                    {ele.shopName}
                                                </TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                    {ele.mobOnShop}
                                                </TableCell>
                                                <TableCell  sx={{ cursor: "pointer",display:"flex",justifyContent:"center"}} >
                                                {
                                                    checkBox == ele._id 
                                                    ? 
                                                     <CircularProgress color="inherit"  size="2.64rem"/>
                                                    :
                                                    <FormGroup sx={{p:"0px",all:"unset"}}>
                                                      <FormControlLabel  control={<Checkbox checked={ele.isShopOpen} onChange={(e)=>{checkBoxHandler(e,ele._id)}}/>}  />
                                                   </FormGroup>
                                                }
                                                      
                                              
                                                </TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                    {ele.wallet}
                                                </TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                    <Box>
                                                        <Button variant='contained' sx={{ bgcolor: "black", "&:hover": { bgcolor: "black" }, p: "3px 0px", fontSize: "12px", mr: "10px" }} onClick={()=>{editShopHandler(ele._id)}}>edit</Button>
                                                        <Button variant='contained' sx={{ bgcolor: "red", "&:hover": { bgcolor: "red" }, p: "3px 0px", fontSize: "12px" }} onClick={()=>{deleteShopHandler(ele._id)}}>delete</Button>
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
            <SnackBarCustom customSnack={customSnack} setCustomSnack={setCustomSnack}/>
            <SnackBarCustomError errorSnack={errorSnack} setErrorSnack={setErrorSnack}/>
        </>
    )
}

export default AdminAllShops