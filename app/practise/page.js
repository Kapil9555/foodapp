// 'use client'
// import { StarTwoTone } from '@mui/icons-material';
// import React, { useEffect, useState } from 'react'

// const page = () => {


//     const students= [
//         {name:"Kapil Bhai",isActive:false,age:20},
//         {name:"Rahul Bhai",isActive:true,age:30},
//         {name:"Nagu Bhai",isActive:false,age:35}
//     ]
//     const [state,setState]=useState([...students]);

// useEffect(()=>{
//   const newArr= students.map((ele)=>{
//         if(ele.name=='Rahul Bhai'){
//             return {...ele,isActive:!ele.isActive,age:students[2].age}
//         }
//         else if (ele.name == 'Nagu Bhai'){
//             return {...ele,isActive:!ele.isActive,age:students[1].age}
//         }
//         else {
//             return {...ele}
//         }
//     })
//     setState(newArr)

// },[])

// console.log(state)

// console.log(state)
//     const handleChange =()=>{
      
//     }

//   return (
//     <></>
//   )
// }

// export default page

'use client'
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
// import xyz from '../../public/uploads/'

const Practise = () => {


    const [user,setUser]=useState({});
    const [allData , setAllData]=useState([])
    const createHandler=async()=>{
    //   console.log(user);
    const {name,email,image}=user
    if(name,email,image){
        try{
            let formData= new FormData;
            formData.append('name',name);
            formData.append('email',email);
            formData.append('image',image)
            const res =await axios.post('/api/teckleImage',formData);
            // console.log(res);
            if(res.data.message == "ImageData Saved Successfully"){
                fetchData();
            }else{
                fetchData();
            }
        }
        catch(err){
            console.log(err.message);
        }}}

        const fetchData =async()=>{
          try{
            const resp = await axios.get('/api/teckleImage');
            // console.log("image",resp);
               setAllData(resp.data.resp);
          }catch(err){
            console.log(err.message)
          }    
        }

        useEffect(()=>{
            fetchData();
        },[])

        // console.log("all data",allData)

  return (
    <Container>
        <Box>
            <Typography variant='h3' align='center'>Handle Image</Typography>
             <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:"30px"}}>
                <Typography >Name :</Typography>
                <TextField label="Name" value={user.name || ''} onChange={(e)=>{setUser({...user,name:e.target.value})}}/>
             </Box>
             <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:"20px"}}>
                <Typography>Email :</Typography>
                <TextField label="Email" value={user.email || ''} onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
             </Box>

             <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:"20px"}}>
                <Typography>Image : </Typography>
                <input type='file'   onChange={(e)=>{setUser({...user,image:e.target.files[0]})}}/>
             </Box>
             <Box sx={{display:"flex",justifyContent:"center",mt:2}}>
                <Button variant='contained' onClick={createHandler}>Submit</Button>
             </Box>
        </Box>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Image</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
           {
            allData.map((item)=>{
                return (
                    <TableRow key={item._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">
                <Image alt='img' src={require(`../../public/uploads/${item.image}`)} height={50} width={50}/>
              </TableCell>
            </TableRow>
                )
            })
           }
            
        
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
    </Container>
  )
}

export default Practise