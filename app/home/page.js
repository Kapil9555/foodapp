'use client'

import StarIcon from '@mui/icons-material/Star'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import { Box, Container, Grid, Icon, Paper, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import hero1 from '../../assests/hero3.jpg'
import hero2 from '../../assests/b2.jpg'
import hero3 from '../../assests/b3.jpg'
import hero4 from '../../assests/b5.jpg'
import shop1 from '../../assests/maincard.webp'



const HomePage = () => {

    const router = useRouter()
    const [shopData, setShopData] = useState([])


    const images = [{
        silde: hero1,
        caption: "Slide 1"
    },
    {
        silde: hero2,
        caption: "Slide 2"
    },
    {
        silde: hero3,
        caption: "Slide 3"
    },
    {
        silde: hero1,
        caption: "Slide 1"
    },
    {
        silde: hero4,
        caption: "Slide 4"
    },



    ]
    const proprietes = {
        duration: 2000,
        transitionDuration: 200,
        infinite: true,
        arrows: true,

    }

    const handleNavigate = () => {
        router.push('/admin/admindashboard')
    };


    const fetchApi = async () => {
        try {
            const fetchedData = await axios.get('/api/shop')
            console.log(fetchedData.data.resp)
            setShopData(fetchedData.data.resp)

        } catch (err) { console.log(err) }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const handleNavigateMenuPage = (id) => {
        // console.log("hello i am id",id)
        router.push(`/menu/${id}`)
    }

    return (
        <Container maxWidth disableGutters>
            <Grid container sx={{ bgcolor: "#f5f5f5", pb: "20px" }}>
                <Grid container justifyContent={"space-between"} sx={{ p: { lg: "20px 10px", md: "20px 10px", sm: "15px 8px", xs: "12px 5px" }, bgcolor: "#37474f" }}>
                    <Grid item xs={4}>
                        <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "600", cursor: "pointer", userSelect: "none" }}>AdelSocialFood</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography align='right' sx={{ color: "white", cursor: "pointer", userSelect: "none" }} onClick={handleNavigate}>Services</Typography>
                    </Grid>
                </Grid>


                {/* banner area */}
                <Grid item xs={12}>
                    <Box sx={{}}>
                        <Slide {...proprietes}>
                            {
                                images.map((ele, index) => (
                                    <Box key={index}>
                                        <Box sx={{ backgroundImage: `url(${ele.silde.src})`, display: "flex", alignItems: "center", justifyContent: "center", height: { lg: "500px", md: "400px", sm: "400px", xs: "200px" }, backgroundSize: "100% 100%" }}>

                                        </Box>
                                    </Box>
                                ))
                            }

                        </Slide>
                    </Box>
                </Grid>


                {/* popular items */}

                {
                    shopData.length > 0
                        ?
                        <Grid item xs={12} sx={{ mb: "20px" }}>
                            <Grid container sx={{ justifyContent: "center" }}>
                                <Grid item xs={12} sx={{ bgcolor: "#37474f", mb: "10px", p: { lg: "8px", md: "8px", sm: "8px", xs: "7px" } }}>
                                    <Typography align='center' sx={{ fontSize: { lg: "30px", md: "30px", sm: "22px", xs: "18px" }, color: "white", fontWeight: "800" }}>
                                        Popular Shops
                                    </Typography>
                                </Grid>
                                {
                                    shopData.filter((ele) => { return ele.isPopular == true }).map((ele,index) => {

                                        return (<>

                                            <Grid item key={index} lg={3} md={4} sm={6} xs={12} sx={{ mt: "20px", display: "flex", justifyContent: "center" }} onClick={() => { handleNavigateMenuPage(ele._id) }}>
                                                <Paper elevation={3} sx={{ width: "280px", overflow: "hidden", borderRadius: "20px 20px 8px 8px", cursor: "pointer" }}>
                                                    <Box sx={{ height: "250px", width: "100%", position: "relative" }}>
                                                        <Image alt='img' src={shop1} objectFit='cover' fill style={{ width: "100%", height: "100%" }} />
                                                    </Box>
                                                    <Box sx={{ p: "0px 8px", bgcolor: "#eceff1", pb: "15px" }}>
                                                        <Typography align='center' sx={{ fontWeight: 700, fontSize: "17px" }}>{ele.shopName}</Typography>
                                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                            <Typography sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}><StarIcon sx={{ color: ele.ratings >= 4 ? "green" : (ele.ratings >= 3 && ele.ratings < 4) ? "orange" : "red", mt: "-2px", fontSize: "18px", mr: "4px" }} />{ele.ratings}</Typography>
                                                            <Icon sx={{ display: "flex", boxSizing: "border-box", p: "5px", justifyContent: "flex-end" }}>
                                                                <StopCircleOutlinedIcon sx={{ fontSize: "15px", mr: "3px", display: ele.foodType == "Veg" ? "block" : ele.foodType == "Both" ? "block" : "none", color: "green" }} />
                                                                <StopCircleOutlinedIcon sx={{ fontSize: "15px", display: ele.foodType == "Non Veg" ? "block" : ele.foodType == "Both" ? "block" : "none", color: "brown" }} />
                                                            </Icon>
                                                        </Box>
                                                        <Box sx={{ mt: "5px" }}>
                                                            <Typography sx={{ fontSize: "13px", fontWeight: "800", color: "red" }}> Deliver in {ele.deliverIn} mins</Typography>
                                                        </Box>
                                                        <Box sx={{ display: "flex", justifyContent: "space-between", mt: "5px" }}>
                                                            <Typography sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}><span style={{ marginRight: "5px" }}>{ele.foodForCost}</span> <span style={{ marginRight: "5px" }}>for</span> <span>{ele.foodForMany}</span></Typography>
                                                            <Typography sx={{ fontSize: "13px" }}> {ele.offerPercentage}% off</Typography>
                                                        </Box>
                                                    </Box>
                                                </Paper>

                                            </Grid>


                                        </>)
                                    })
                                }
                            </Grid>
                        </Grid>

                        :

                        ""

                }

                {/*  Non Popular shops */}

                {
                    shopData.length > 0
                        ?
                        <Grid item xs={12} sx={{ mb: "20px" }}>
                            <Grid container sx={{ justifyContent: "center" }}>
                                <Grid item xs={12} sx={{ bgcolor: "#37474f", mb: "10px", p: { lg: "8px", md: "8px", sm: "8px", xs: "7px" } }}>
                                    <Typography align='center' sx={{ fontSize: { lg: "30px", md: "30px", sm: "25px", xs: "20px" }, color: "white", fontWeight: "800" }}>
                                        All Shops
                                    </Typography>
                                </Grid>
                                {
                                    shopData.map((ele,index) => {

                                        return (<>

                                            <Grid key={index} item lg={3} md={4} sm={6} xs={12} sx={{ mt: "20px", display: "flex", justifyContent: "center" }} onClick={() => { handleNavigateMenuPage(ele._id) }}>
                                                <Paper elevation={3} sx={{ width: "280px", overflow: "hidden", borderRadius: "20px 20px 8px 8px", cursor: "pointer" }}>
                                                    <Box sx={{ height: "250px", width: "100%", position: "relative" }}>
                                                        <Image alt='img' src={shop1} objectFit='cover' fill style={{ width: "100%", height: "100%" }} />
                                                    </Box>
                                                    <Box sx={{ p: "0px 8px", bgcolor: "#eceff1", pb: "15px" }}>
                                                        <Typography align='center' sx={{ fontWeight: 700, fontSize: "17px" }}>{ele.shopName}</Typography>
                                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                            <Typography sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}><StarIcon sx={{ color: ele.ratings >= 4 ? "green" : (ele.ratings >= 3 && ele.ratings < 4) ? "orange" : "red", mt: "-2px", fontSize: "18px", mr: "4px" }} />{ele.ratings}</Typography>
                                                            <Typography sx={{ display: "flex", p: "5px", justifyContent: "flex-end" }}>
                                                                <StopCircleOutlinedIcon sx={{ fontSize: "15px", mr: "3px", display: ele.foodType == "Veg" ? "block" : ele.foodType == "Both" ? "block" : "none", color: "green" }} />
                                                                <StopCircleOutlinedIcon sx={{ fontSize: "15px", display: ele.foodType == "Non Veg" ? "block" : ele.foodType == "Both" ? "block" : "none", color: "brown" }} />
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ mt: "5px" }}>
                                                            <Typography sx={{ fontSize: "13px", fontWeight: "800", color: "red" }}> Deliver in {ele.deliverIn} mins</Typography>
                                                        </Box>
                                                        <Box sx={{ display: "flex", justifyContent: "space-between", mt: "5px" }}>
                                                            <Typography sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}><span style={{ marginRight: "5px" }}>{ele.foodForCost}</span> <span style={{ marginRight: "5px" }}>for</span> <span>{ele.foodForMany}</span></Typography>
                                                            <Typography sx={{ fontSize: "13px" }}> {ele.offerPercentage}% off</Typography>
                                                        </Box>
                                                    </Box>
                                                </Paper>

                                            </Grid>

                                        </>)
                                    })
                                }
                            </Grid>
                        </Grid>
                        :
                        ""
                }


                {/*  all shops */}

                {
                    shopData.length > 0
                        ?
                        <Grid item xs={12} sx={{ mb: "20px" }}>
                            <Grid container sx={{ justifyContent: "center" }}>
                                <Grid item xs={12} sx={{ bgcolor: "#37474f", mb: "10px", p: { lg: "8px", md: "8px", sm: "8px", xs: "7px" } }}>
                                    <Typography align='center' sx={{ fontSize: { lg: "30px", md: "30px", sm: "25px", xs: "20px" }, color: "white", fontWeight: "800" }}>
                                        Non Popular Shops
                                    </Typography>
                                </Grid>
                                {
                                    shopData.filter((ele) => { return ele.isPopular == false }).map((ele,index) => {

                                        return (<>

                                            <Grid item key={index} lg={3} md={4} sm={6} xs={12} sx={{ mt: "20px", display: "flex", justifyContent: "center" }} onClick={() => { handleNavigateMenuPage(ele._id) }}>
                                                <Paper elevation={3} sx={{ width: "280px", overflow: "hidden", borderRadius: "20px 20px 8px 8px", cursor: "pointer" }}>
                                                    <Box sx={{ height: "250px", width: "100%", position: "relative" }}>
                                                        <Image alt='img' src={shop1} objectFit='cover' fill style={{ width: "100%", height: "100%" }} />
                                                    </Box>
                                                    <Box sx={{ p: "0px 8px", bgcolor: "#eceff1", pb: "15px" }}>
                                                        <Typography align='center' sx={{ fontWeight: 700, fontSize: "17px" }}>{ele.shopName}</Typography>
                                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                            <Typography sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}><StarIcon sx={{ color: ele.ratings >= 4 ? "green" : (ele.ratings >= 3 && ele.ratings < 4) ? "orange" : "red", mt: "-2px", fontSize: "18px", mr: "4px" }} />{ele.ratings}</Typography>
                                                            <Typography sx={{ display: "flex", p: "5px", justifyContent: "flex-end" }}>
                                                                <StopCircleOutlinedIcon sx={{ fontSize: "15px", mr: "3px", display: ele.foodType == "Veg" ? "block" : ele.foodType == "Both" ? "block" : "none", color: "green" }} />
                                                                <StopCircleOutlinedIcon sx={{ fontSize: "15px", display: ele.foodType == "Non Veg" ? "block" : ele.foodType == "Both" ? "block" : "none", color: "brown" }} />
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ mt: "5px" }}>
                                                            <Typography sx={{ fontSize: "13px", fontWeight: "800", color: "red" }}> Deliver in {ele.deliverIn} mins</Typography>
                                                        </Box>
                                                        <Box sx={{ display: "flex", justifyContent: "space-between", mt: "5px" }}>
                                                            <Typography sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}><span style={{ marginRight: "5px" }}>{ele.foodForCost}</span> <span style={{ marginRight: "5px" }}>for</span> <span>{ele.foodForMany}</span></Typography>
                                                            <Typography sx={{ fontSize: "13px" }}> {ele.offerPercentage}% off</Typography>
                                                        </Box>
                                                    </Box>
                                                </Paper>

                                            </Grid>


                                        </>)
                                    })
                                }
                            </Grid>
                        </Grid>
                        :
                        ""
                }
            </Grid>
        </Container>
    )
}

export default HomePage