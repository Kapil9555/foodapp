import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import burger1 from '../assests/burger0.png'
import './master.css'

const Filters = ({catData}) => {


    return (
        <Box sx={{ mt:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},width:"100%",overflow:"hidden"}}>
            <Typography sx={{ fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"15px"}, fontWeight: 800 }}>Category</Typography>
            <Box className="removescroll" sx={{ mt: "10px",display:"flex",overflowX:"auto",zIndex:1 }}>
                {
                    catData.map((ele , index) => {
                        return (
                            <Paper  key={index} sx={{zIndex:2,cursor:"pointer",flex: '0 0 auto',mb:"10px",height:{lg:"100px",md:"100px",xs:"90px",xs:"80px"}, width:{lg:"100px",md:"100px",xs:"90px",xs:"80px"},mr:"13px", borderRadius: "13px",  overflow: "hidden", bgcolor: "white" }}>
                                <Box sx={{position:"relative",height:{lg:"70px",md:"70px",sm:"60px",xs:"60px"}}}>
                                <Image alt='img' src={burger1} style={{ height:"100%", width: "100%" }} />
                                </Box>
                                <Box  sx={{ height: "100%", bgcolor: "white",height:{lg:"30px",md:"30px",sm:"30px",xs:"30px"}}}>
                                    <Typography align='center' sx={{ fontSize:{lg:"15px",md:"15px",sm:"14px",xs:"12px"}, fontWeight: 600, color: "#9e9e9e" }}>{ele.name}</Typography>
                                </Box>
                            </Paper>
                        )
                    })
                }


            </Box>
        </Box>
    )
}

export default Filters


