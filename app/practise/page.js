'use client'
import { StarTwoTone } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'

const page = () => {


    const students= [
        {name:"Kapil Bhai",isActive:false,age:20},
        {name:"Rahul Bhai",isActive:true,age:30},
        {name:"Nagu Bhai",isActive:false,age:35}
    ]
    const [state,setState]=useState([...students]);

useEffect(()=>{
  const newArr= students.map((ele)=>{
        if(ele.name=='Rahul Bhai'){
            return {...ele,isActive:!ele.isActive,age:students[2].age}
        }
        else if (ele.name == 'Nagu Bhai'){
            return {...ele,isActive:!ele.isActive,age:students[1].age}
        }
        else {
            return {...ele}
        }
    })
    setState(newArr)

},[])

console.log(state)

console.log(state)
    const handleChange =()=>{
      
    }

  return (
    <></>
  )
}

export default page