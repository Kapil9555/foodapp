import React from 'react';
import { Grid, Paper, Box, Typography, Icon } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import Image from 'next/image';
import shop1 from '../assests/maincard.webp'


const RestroCard = ({ ele, handleNavigateMenuPage }) => {
    console.log(ele)
    return (
        <Grid item key={ele._id} lg={3} md={4} sm={6} xs={12} sx={{ mt: "20px", display: "flex", justifyContent: "center" }} onClick={() => { handleNavigateMenuPage(ele._id) }}>
            <Paper elevation={3} sx={{ width: "280px", overflow: "hidden", borderRadius: "20px 20px 8px 8px", cursor: "pointer" }}>
                <Box sx={{ height: "250px", width: "100%", position: "relative" }}>
                    <Image alt='img' src={require(`../public/uploads/${ele.image}`)}  style={{ width: "100%", height: "100%" }} />
                </Box>
                <Box sx={{ p: "0px 8px", bgcolor: "#eceff1", pb: "15px" }}>
                    <Typography align='center' sx={{ fontWeight: 700, fontSize: "17px" }}>{ele.shopName}</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
                            <StarIcon sx={{ color: ele.ratings >= 4 ? "green" : (ele.ratings >= 3 && ele.ratings < 4) ? "orange" : "red", mt: "-2px", fontSize: "18px", mr: "4px" }} />
                            {ele.ratings}
                        </Typography>
                        <Icon sx={{ display: "flex", boxSizing: "border-box", p: "5px", justifyContent: "flex-end" }}>
                            <StopCircleOutlinedIcon sx={{ fontSize: "15px", mr: "3px", display: ele.foodType === "Veg" ? "block" : ele.foodType === "Both" ? "block" : "none", color: "green" }} />
                            <StopCircleOutlinedIcon sx={{ fontSize: "15px", display: ele.foodType === "Non Veg" ? "block" : ele.foodType === "Both" ? "block" : "none", color: "brown" }} />
                        </Icon>
                    </Box>
                    <Box sx={{ mt: "5px" }}>
                        <Typography sx={{ fontSize: "13px", fontWeight: "800", color: "red" }}> Deliver in {ele.deliverIn} mins</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: "5px" }}>
                        <Typography sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
                            <span style={{ marginRight: "5px" }}>{ele.foodForCost}</span>
                            <span style={{ marginRight: "5px" }}>for</span>
                            <span>{ele.foodForMany}</span>
                        </Typography>
                        <Typography sx={{ fontSize: "13px" }}> {ele.offerPercentage}% off</Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default RestroCard;