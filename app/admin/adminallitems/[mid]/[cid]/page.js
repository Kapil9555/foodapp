'use client'
import AdminAddNewItemModal from '@/components/AdminAddNewItemModal'
import { Box, Button, Checkbox, Container, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


const AdminAllItems = () => {
    const router = useRouter()
    const params = useParams()
    const [itemData,setItemData]=useState([])

    const [open , setOpen]=useState(false)

    const mainApi = new Array(10).fill(1)

    const handleNavigateCat = () => {
        router.push('/admin/adminitemdetails')
    }


const fetchData =async()=>{
    try{
        const getData= await axios.get(`/api/item/${params.cid}`)
        console.log(getData.data.resp)
        setItemData(getData.data.resp)


    }catch(err){
        console.log(err)
        alert(err)
    }
}

const handleDelete =async(id)=>{
    
     try{
        const respData = await axios.delete(`/api/deleteitem/${id}`)
        console.log(respData.data.message);
        if(respData.data.message == "Item Deleted Successfully"){
            fetchData();
        };
     }catch(err)
     {
       console.log(err)
       alert(err)
     }
};

useEffect(()=>{
    fetchData();
},[])


    return (
        <Container maxWidth disableGutters>

            <Grid container sx={{ height: "80px", bgcolor: "black", alignItems: "center", width: "100%" }}>
                <Grid item xs={12} >
                    <Typography sx={{ fontSize: "30px", fontWeight: "900", color: "white" }}>
                        Admin DashBoard
                    </Typography>
                </Grid>

               


            </Grid>
            <Grid container sx={{border:"1px solid green"}}>
                <Grid item xs={12}>
                    <Box sx={{ p: "15px", bgcolor: "#e0e0e0" }}>
                        <Typography align='center' sx={{ fontSize: "25px", fontWeight: "900", color: "black", cursor: "pointer" }} >
                            All Items
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ p: "15px" }}>
                    <Box sx={{ display: "flex", justifyContent: "right" }}>
                        <Button sx={{ bgcolor: "black", color: "white", '&:hover': { bgcolor: "black" }, fontSize: "14px", fontWeight: "600" }} onClick={()=>{setOpen(true)}}>
                            add new item
                        </Button>
                      <AdminAddNewItemModal open={open} setOpen={setOpen} params={params} fetchData={fetchData}/>
                    </Box>
                </Grid>
                </Grid>
                <Box sx={{overflow:"auto"}}>
                    <Table container={"true"} component={Paper}>
                        <Table aria-label="sticky table">
                            <TableHead  >
                                <TableRow sx={{ backgroundColor: "black" }}>
                                    <TableCell align='center' sx={{ color: "white", fontSize: "16px", fontWeight: "900", cursor: "pointer" }}>
                                        S.N
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize:"16px", fontWeight: "900", cursor: "pointer" }}>
                                        Item Name
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: "white", fontSize:"16px", fontWeight: "900", cursor: "pointer" }}>
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
                                                <TableCell align='center' sx={{cursor:"pointer"}}>
                                               <Checkbox checked={ele.isAvailable} color="success"/>
                                                </TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer",color:"red" }}>
                                                    {ele.mrp}
                                                </TableCell>
                                                <TableCell align='center' sx={{ cursor: "pointer",color:"green" }}>
                                                   {ele.srp}
                                                </TableCell>
                                            
                                                <TableCell align='center' sx={{ cursor: "pointer" }}>
                                                    <Box sx={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
                                                        <Button variant='contained' sx={{ bgcolor: "black", "&:hover": { bgcolor: "black" }, p: "3px 0px", fontSize: "12px",mt:"5px" }}>edit</Button>
                                                        <Button variant='contained' sx={{ bgcolor: "red", "&:hover": { bgcolor: "red" }, p: "3px 0px", fontSize: "12px",mt:"5px" }} onClick={()=>{handleDelete(ele._id)}}>delete</Button>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }

                            </TableBody>
                        </Table>
                    </Table>
                    </Box>
            
        </Container>
    )
}

export default AdminAllItems