'use client'
import AdminAddNewUserModal from '@/components/AdminAddNewUserModal'
import EditUserDetails from '@/components/EditUserDetails'
import SnackBarCustom from '@/components/SnackBarCustom'
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Grid, Paper, Skeleton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import nodata from '../../../assests/nodata2.gif'
import Image from 'next/image'
import SnackBarCustomError from '@/components/SnackBarCustomError'
import TableSkeleton from '@/components/TableSkeleton'




const AdminAllUsers = () => {
    const router = useRouter();
    const param = useParams();
    const [userData, setUserData] = useState([]);
    const [open, setOpen] = useState(false);
    const [checkBox , setCheckBox]=useState("")
    const [noData , setNoData] =useState(false)
    const [editUserOpen, setEditUserOpen] = useState({details:{},open:false})
    const [customSnack,setCustomSnack]=useState({open:false,message:""})
    const [errorSnack, setErrorSnack] = useState({open:false,message:""})
    const tableHead = ['S.N','User Name','IsActive','Email','Mobile','Action']



   // function which is navigating to item list page of specefic category
   const handleNavigateCat = (id) => {
        router.push(`/admin/adminuseraddress/${id}`);
    };


    // function for fetch data from database
    const fetchData = async () => {
        try {
            const responseData = await axios.get('/api/user');
            // console.log("server response", responseData.data);
            if(responseData.data.message == 'Successfully Fetched'){
                setUserData(responseData.data.resp);
                setNoData(false)
            }
            if(responseData.data.message == 'No Data Found'){
                setNoData(true)
               
            }

        } catch (err) { console.log(err) };
    };


    // function delete categopries with its products
    const handleDeleteUser = async(id) => {
       console.log(id)
       try{
        const responseData= await axios.delete(`/api/deleteuser/${id}`);
        // console.log("server response here",responseData);
        if(responseData.data.message == "User Deleted Successfully"){
            // alert(responseData.data.message);
            fetchData();
            setCustomSnack({...customSnack,open:true,message:responseData.data.message})
        }
       }catch(err){
        console.log("error message",err)
        alert(err.message)
       }
    };

    
    const handleIsActive =async(e,id)=>{

        const isActive = e.target.checked
        setCheckBox(id)

       try{
          const respData = await axios.patch(`/api/userisactivecontrol/${id}`,{isActive})
          //console.log("checkox response",respData)
          if(respData.data.message == "Updated Successfully"){
             fetchData();
             setCheckBox("")
          }
          if(respData.data.message == "Failed To Update"){
            setCheckBox("")
          }
       }
       catch(err){
        alert(err.message)
        console.log(err.message)
       }
    }

    useEffect(() => {
        fetchData();
    }, [])


    const handleEditUser =(ele)=>{
        setEditUserOpen({...editUserOpen,details:ele,open:true})
    }

    // console.log(userData)


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
                            All Users
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ p: "15px" }}>
                    <Box sx={{ display: "flex", justifyContent: "right" }}>
                        <Button sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" }, fontSize: "14px", fontWeight: "600" }} onClick={() => { setOpen(true) }}>
                            add new user
                        </Button>
                        <AdminAddNewUserModal open={open} setOpen={setOpen} mid={param.adminallcategoriesdynamic} fetchData={fetchData} customSnack={customSnack} setCustomSnack={setCustomSnack} errorSnack={errorSnack} setErrorSnack={setErrorSnack}/>
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
              userData.length == 0 ?
                 <TableSkeleton tableHead={tableHead}/> 
                    :
                    <Table container={"true"} component={Paper}>
                        <Table aria-label="sticky table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "black" }}>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                        S.N
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                        User Name
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                       IsActive
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                       Email
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                       Mobile
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
                                  userData.map((ele, index) => {
                                    {/* console.log(ele) */}
                                        return (
                                            <TableRow key={index} >
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>{index+1}</TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }} onClick={() => {handleNavigateCat(ele._id) }}>
                                                    {ele.fullName}
                                                </TableCell>
                                                
                                                <TableCell  sx={{ cursor: "pointer",display:"flex",justifyContent:"center"}} >
                                                {
                                                    checkBox == ele._id 
                                                    ? 
                                                   
                                                    <CircularProgress color="inherit"  size="2.63rem"/>
                                                    
                                                   
                                                    :
                                                    <FormGroup sx={{p:"0px",all:"unset"}}>
                                                      <FormControlLabel  control={<Checkbox checked={ele.isActive} onChange={(e)=>{handleIsActive(e,ele._id)}}/>}  />
                                                   </FormGroup>
                                                }
                                                      
                                              
                                                </TableCell>
                                                  
                                                
                                               
                                                <TableCell align='center' sx={{ cursor: "pointer" }} >
                                                    {ele.email}
                                                </TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                    {ele.mobile}
                                                </TableCell>
                                               

                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                    <Box>
                                                        <Button variant='contained' sx={{ bgcolor: "black", "&:hover": { bgcolor: "black" }, p: "3px 0px", fontSize: "12px", mr: "10px" }} onClick={()=>{handleEditUser(ele)}}>edit</Button>
                                                        <Button variant='contained' sx={{ bgcolor: "red", "&:hover": { bgcolor: "red" }, p: "3px 0px", fontSize: "12px" }} onClick={() => { handleDeleteUser(ele._id) }}>delete</Button>
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
            <EditUserDetails editUserOpen={editUserOpen} setEditUserOpen={setEditUserOpen} fetchData={fetchData} customSnack={customSnack} setCustomSnack={setCustomSnack}/>
            <SnackBarCustom customSnack={customSnack} setCustomSnack={setCustomSnack}/>
            <SnackBarCustomError errorSnack={errorSnack} setErrorSnack={setErrorSnack}/>
            </Grid>

        </>
    )
}

export default AdminAllUsers