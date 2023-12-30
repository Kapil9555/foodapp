'use client'
import AdminAddNewItemModal from '@/components/AdminAddNewItemModal';
import SnackBarCustom from '@/components/SnackBarCustom';
import SnackBarCustomError from '@/components/SnackBarCustomError';
import TableSkeleton from '@/components/TableSkeleton';
import { Box, Button, Checkbox, CircularProgress, Container, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import gif from '../../../../../assests/nodata2.gif';
import Image from 'next/image';
import AdminEditItemDetails from '@/components/AminEditItemDetails';


const AdminAllItems = () => {
    const router = useRouter()
    const params = useParams()
    const [itemData, setItemData] = useState([])
    const [open, setOpen] = useState(false)
    const [noData , setNoData] =useState(false)
    const [customSnack,setCustomSnack]=useState({open:false,message:""})
    const [errorSnack, setErrorSnack] = useState({open:false,message:""})
    const [loader , setLoader]=useState('')
    const [editModal , setEditModal]=useState({open:false,data:{}})
    const tableHead = ['S.N','Item Name','Is Available','M.R.P','S.R.P','Action']

    const handleNavigateCat = () => {
        router.push('/admin/adminitemdetails')
    }


    const fetchData = async () => {
        try {
            const getData = await axios.get(`/api/item/${params.cid}`)
            // console.log(getData.data.resp)
            if(getData.data.message == 'Fetched Successfully'){
                setItemData(getData.data.resp)
                setNoData(false)
                setLoader('')
               
            }
            if(getData.data.message =='No Data Found'){
                setNoData(true)
            }
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }

    const handleDelete = async (id) => {
        try {
            const respData = await axios.delete(`/api/deleteitem/${id}`)
            // console.log(respData.data.message);
            if (respData.data.message == "Item Deleted Successfully") {
                fetchData();
                setCustomSnack({open:true,message:respData.data.message})
            }else{
                setErrorSnack({open:true,message:respData.data.message})
            }
        } catch (err) {
            console.log(err)
            alert(err)
        }
    };

    const checkEventHandler =async(e,id)=>{
        setLoader(id)
         const {checked}=e.target;
         const respData = await axios.patch(`/api/deleteitem/${id}`,{isAvailable:checked})
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


    const handleEditDetail=(ele)=>{
        console.log("id check",ele)
        setEditModal({...editModal,open:true,data:ele})
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <Container maxWidth={'xl'} disableGutters>
            <Grid container sx={{ height: "80px", bgcolor: "black", alignItems: "center", width: "100%" }}>
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
                            All Items
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ p: "15px" }}>
                    <Box sx={{ display: "flex", justifyContent: "right" }}>
                        <Button sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" }, fontSize: "14px", fontWeight: "600" }} onClick={() => { setOpen(true) }}>
                            add new item
                        </Button>
                        <AdminAddNewItemModal open={open} setOpen={setOpen} params={params} fetchData={fetchData} />
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ overflow: "auto" }}>
            {
                   noData ?
                   <Grid container sx={{}}>
                     <Grid item xs={12} sx={{ height: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                       <Box sx={{ position: "relative", height: "200px", width: "300px" }}>
                         <Image src={gif} alt='no data' style={{ height: "100%", width: "100%", position: "absolute" }} />
                         <Typography align='center' sx={{mt:"200px"}}>No Data!</Typography>
                       </Box>
                     </Grid>
                   </Grid>
             :
             itemData.length == 0 ?
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
                                    Item Name
                                </TableCell>
                                <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                    Is Available
                                </TableCell>
                                <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                    M.R.P
                                </TableCell>
                                <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                    S.R.P
                                </TableCell>
                                <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                itemData.map((ele, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align='center' sx={{ cursor: "pointer" }}>{index}</TableCell>
                                            <TableCell align='center' sx={{ cursor: "pointer" }} onClick={handleNavigateCat}>
                                                {ele.name}
                                            </TableCell>
                                            <TableCell align='center' sx={{ cursor: "pointer" }}>
                                            {
                                                loader == ele._id ?
                                                  <CircularProgress color="inherit" size={'2.2rem'}/>
                                                 :
                                                <Checkbox checked={ele.isAvailable} color="success" onChange={(e)=>{checkEventHandler(e,ele._id)}}/>
                                            }
                                            </TableCell>
                                            <TableCell align='center' sx={{ cursor: "pointer", color: "red" }}>
                                                {ele.mrp}
                                            </TableCell>
                                            <TableCell align='center' sx={{ cursor: "pointer", color: "green" }}>
                                                {ele.srp}
                                            </TableCell>

                                            <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                                                    <Button variant='contained' sx={{ bgcolor: "black", "&:hover": { bgcolor: "black" }, p: "3px 0px", fontSize: "12px", mt: "5px" }} onClick={()=>{handleEditDetail(ele)}}>edit</Button>
                                                    <Button variant='contained' sx={{ bgcolor: "red", "&:hover": { bgcolor: "red" }, p: "3px 0px", fontSize: "12px", mt: "5px" }} onClick={() => { handleDelete(ele._id) }}>delete</Button>
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
            </Box>
            <AdminEditItemDetails editModal={editModal} fetchData={fetchData}  setEditModal={setEditModal}  setErrorSnack={setErrorSnack} setCustomSnack={setCustomSnack}/>
            <SnackBarCustom customSnack={customSnack} setCustomSnack={setCustomSnack}/>
            <SnackBarCustomError errorSnack={errorSnack} setErrorSnack={setErrorSnack}/>
        </Container>
    )
}

export default AdminAllItems