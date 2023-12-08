'use client'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const ButtonComp = () => {
    const router = useRouter()
    
    const handleNavigate =()=>{
        router.push(`/testing/${12345}/${98766}`)
    } 

    const arr = [1,2,3,4,5,6,7,8,9,0,10,12,13,14,15,16]
    const [ state , setState] = useState(4)

    const handleLoad =()=>{
      const newArr = arr.slice(0,10)
       console.log(newArr)
    }
  return (
    <div>
    <Box>
       {
        arr.slice(0,state).map((ele)=>{
          return <Box sx={{height:"20px",width:"20px",m:"5px",border:"1px solid red"}}>
              {ele}
          </Box>
        })
       }
    </Box>
        <Button variant='contained' onClick={handleNavigate}>Change</Button>
        <Button variant='contained' onClick={()=>{setState(state+4)}}>Button</Button>

    </div>
  )
}

export default ButtonComp