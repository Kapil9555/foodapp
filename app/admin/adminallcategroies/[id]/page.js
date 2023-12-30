'use client'
import AdminAddNewCatModal from '@/components/AdminAddNewCatModal'
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import nodata from '../../../../assests/nodata2.gif'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import TableSkeleton from '@/components/TableSkeleton'
import SnackBarCustom from '@/components/SnackBarCustom'
import SnackBarCustomError from '@/components/SnackBarCustomError'
import AdminEditCat from '@/components/AdminEditCat'





const AdminAllCategories = () => {
    const router = useRouter();
    const param = useParams();
    const [catData, setCatData] = useState([]);
    const [open, setOpen] = useState(false);
    const [noData , setNoData] =useState(false)
    const [loader , setLoader]=useState('')
    const [delLoad , setDelLoad]=useState('')
    const [customSnack,setCustomSnack]=useState({open:false,message:""})
    const [errorSnack, setErrorSnack] = useState({open:false,message:""})
    const [editModal , setEditModal]=useState({data:{},open:false})
    const tableHead = ['S.N','Cat Name','Is Available','Image','Action']


   // function which is navigating to item list page of specefic category
   const handleNavigateCat = (mid, cid) => {
        router.push(`/admin/adminallitems/${mid}/${cid}`);
    };


    // function for fetch data from database
    const fetchData = async () => {
        try {
            const responseData = await axios.get(`/api/category/${param.id}`);
            // console.log("server response", responseData.data.resp);
            if(responseData.data.message == "Fetched Successfully"){
                setCatData(responseData.data.resp);
                setNoData(false)
                setLoader('');
            }
            if(responseData.data.message == "Failed To Fetch"){
                setNoData(true)
            }
        } catch (err) { console.log(err) };
    };


    // function delete categopries with its products
    const handleDeleteCat = async(id) => {
    //    console.log(id)
        setDelLoad(id)
       try{
        const responseData= await axios.delete(`/api/deletecategory/${id}`);
        // console.log("server response here",responseData);
        if(responseData.data.message == "Category Deleted Successfully"){
            fetchData();
            setCustomSnack({open:true,message:responseData.data.message})
             setDelLoad('')
        }else{
            setErrorSnack({open:true,message:responseData.data.message})
            setDelLoad('')
        }
       }catch(err){
        console.log("error message",err)
        alert(err)
       }
    };

    const checkEventHandler =async(e,id)=>{
        setLoader(id)
        //  const {checked}=e.target;
         const respData = await axios.patch(`/api/deletecategory/${id}`,{isAvailable:e.target.checked})
        //  console.log("line no 56",respData)
        if(respData.data.message == "Edited Successfully"){
            fetchData();
            setCustomSnack({open:true,message:respData.data.message})
            
        }
        else{
            setErrorSnack({open:true,message:respData.data.message})
            setLoader('')
        }
    };

   const handleEditModal=async(ele)=>{
    // console.log(ele)
     setEditModal({...editModal,data:ele,open:true})
   }

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
                            All Categories
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ p: "15px" }}>
                    <Box sx={{ display: "flex", justifyContent: "right" }}>
                        <Button sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" }, fontSize: "14px", fontWeight: "600" }} onClick={() => { setOpen(true) }}>
                            add new Categories
                        </Button>
                        <AdminAddNewCatModal open={open} setOpen={setOpen} mid={param.id} fetchData={fetchData} setCustomSnack={setCustomSnack} setErrorSnack={setErrorSnack}/>
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
              catData.length == 0 ?
                    <TableSkeleton tableHead={tableHead}/>
                   :
                   <Table container={"true"} component={Paper}>
                        <Table aria-label="sticky table">
                            <TableHead  >
                                <TableRow sx={{ backgroundColor: "black" }}>
                                {
                                    tableHead.map((ele)=>{
                                        return (
                                            <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                           {ele}
                                    </TableCell>
                                    
                                        )
                                    })
                                }
                                   
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
                                    catData.map((ele, index) => {
                                        {/* console.log(ele.isAvailable) */}
                                        return (
                                            <TableRow key={index}>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>{index+1}</TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }} onClick={() => { handleNavigateCat(ele.mid, ele._id) }}>
                                                    {ele.name}
                                                </TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                               {
                                                loader == ele._id ?
                                                  <CircularProgress color="inherit" size={'2.2rem'}/>
                                                 :
                                                 <FormGroup sx={{p:"0px",all:"unset"}}>
                                                      <FormControlLabel  control={ <Checkbox checked={ele.isAvailable} color="success" onChange={(e)=>{checkEventHandler(e,ele._id)}}/>}  />
                                                   </FormGroup>
                                               
                                              }
                                               </TableCell>
                                               {
                                                console.log(ele.image)
                                               }
                                               <TableCell align='center' sx={{ cursor: "pointer" }} >
                                                    <Image alt='category' src={require(`../../../../public/uploads/${ele.image}`)} height={50} width={50}/>
                                                </TableCell>

                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                    <Box>
                                                        <Button variant='contained' sx={{ bgcolor: "black", "&:hover": { bgcolor: "black" }, p: "3px 0px", fontSize: "12px", mr: "10px" }} onClick={()=>{handleEditModal(ele)}}>edit</Button>
                                                        
                                                        {
                                                            delLoad == ele._id ? <CircularProgress size={'1.7rem'}/>
                                                            :
                                                            <Button variant='contained' sx={{ bgcolor: "red", "&:hover": { bgcolor: "red" }, p: "3px 0px", fontSize: "12px" }} onClick={() => { handleDeleteCat(ele._id) }}>delete</Button>
                                                        }
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
                 <AdminEditCat editModal={editModal}  setEditModal={setEditModal} fetchData={fetchData} setCustomSnack={setCustomSnack} setErrorSnack={setErrorSnack}/>
                 <SnackBarCustom customSnack={customSnack} setCustomSnack={setCustomSnack}/>
                 <SnackBarCustomError errorSnack={errorSnack} setErrorSnack={setErrorSnack}/>
            </Grid>
        </>
    )
}

export default AdminAllCategories