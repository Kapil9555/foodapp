'use client'
import AdminAddNewCatModal from '@/components/AdminAddNewCatModal'
import { Box, Button, Checkbox, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'




const AdminAllCategories = () => {
    const router = useRouter();
    const param = useParams();
    const [catData, setCatData] = useState([]);
    const [open, setOpen] = useState(false);



   // function which is navigating to item list page of specefic category
   const handleNavigateCat = (mid, cid) => {
        router.push(`/admin/adminallitems/${mid}/${cid}`);
    };


    // function for fetch data from database
    const fetchData = async () => {
        try {
            const responseData = await axios.get(`/api/category/${param.adminallcategoriesdynamic}`);
            // console.log("server response", responseData.data.resp);
            setCatData(responseData.data.resp);

        } catch (err) { console.log(err) };
    };


    // function delete categopries with its products
    const handleDeleteCat = async(id) => {
       console.log(id)
       try{
        const responseData= await axios.delete(`/api/deletecategory/${id}`);
        console.log("server response here",responseData);
        if(responseData.data.message == "Category Deleted Successfull"){
            alert(responseData.data.message);
            fetchData();
        }
       }catch(err){
        console.log("error message",err)
        alert(err)
       }
    };

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
                        <AdminAddNewCatModal open={open} setOpen={setOpen} mid={param.adminallcategoriesdynamic} fetchData={fetchData} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Table container={"true"} component={Paper}>
                        <Table aria-label="sticky table">
                            <TableHead  >
                                <TableRow sx={{ backgroundColor: "black" }}>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                        S.N
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                        Cat Name
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                        Is Available
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
                                    catData.map((ele, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>{index+1}</TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }} onClick={() => { handleNavigateCat(ele.mid, ele._id) }}>
                                                    {ele.name}
                                                </TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                    <Checkbox checked={ele.isAvailable} color="success" />
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
                </Grid>


            </Grid>
        </>
    )
}

export default AdminAllCategories