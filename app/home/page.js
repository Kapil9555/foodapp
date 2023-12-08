'use client'

import StarIcon from '@mui/icons-material/Star'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import { Badge, Box, Button, Container, Grid, Icon, IconButton, Paper, Skeleton, Typography } from '@mui/material'
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
import blink from '../styles/blink.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const HomePage = () => {

    const router = useRouter()
    const [shopData, setShopData] = useState([])
    const [popularShop ,setPopularShop] = useState([])
    const [nonPopularShop ,setNonPopularShop] = useState([])
    const [activeOrder, setActiveOrder] = useState([])
    const [isData, setIsData] = useState(true)
    const arr = new Array(4).fill(1)

    const images = [{ silde: hero2, caption: "Slide 1" }, { silde: hero3, caption: "Slide 2" }, { silde: hero1, caption: "Slide 3" }, { silde: hero2, caption: "Slide 1" }, { silde: hero4, caption: "Slide 4" }]
    const properties = { duration: 2000, transitionDuration: 200, infinite: true, arrows: true, }



    const fetchApi = async () => {
        try {
            const fetchedData = await axios.get('/api/shop');
            if (fetchedData.data.message == 'All Data Fetched') {
                setShopData(fetchedData.data.resp)
                const popular = fetchedData.data.resp.filter((ele) => { return ele.isPopular == true })
                const nonPopular = fetchedData.data.resp.filter((ele) => { return ele.isPopular == false })
                setNonPopularShop(popular)
                setPopularShop(nonPopular)
            }
            if (fetchedData.data.message == 'No Data Found') {
                setIsData(false)
            }
        } catch (err) { console.log(err) }
    };

    const fetchActiveOrder = async () => {
        const uid = JSON.parse(localStorage.getItem('UID')); const respData = await axios.get(`/api/billing/${uid}`)
        if (respData.data.message == 'Successfull') { setActiveOrder(respData.data.resp) } console.log("order status", respData.data.resp)
    }


    const handleNavigateMenuPage = id => router.push(`/menu/${id}`);

    const handleNavigateProfile = () => router.push('/profile');

    const handleNavigate = () => router.push('/admin/admindashboard');


    useEffect(() => {
        if (localStorage.getItem('UID')) { fetchActiveOrder() };
        fetchApi();
    }, [])

    return (
        <Container maxWidth disableGutters>
            <Grid container sx={{ pb: "20px" }}>
                <Grid container justifyContent={"space-between"} alignItems={"center"} sx={{ height: "70px", bgcolor: "#37474f" }}>
                    <Grid item xs={4}>
                        <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "600", cursor: "pointer", userSelect: "none" }}>AdelSocialFood</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
                        <Typography sx={{ color: "white", cursor: "pointer", userSelect: "none", mr: "15px" }} onClick={handleNavigate}>Services</Typography>
                        <IconButton sx={{ mr: "15px", p: "0px" }} onClick={handleNavigateProfile}>
                            <AccountCircleIcon sx={{ color: "white", fontSize: "40px" }} />
                        </IconButton>
                    </Grid>
                </Grid>


                {/* banner area */}
                <Grid item xs={12}>
                    <Box sx={{}}>
                        <Slide {...properties}>
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
                    shopData.length > 0 && popularShop.length >0 &&  
                    <Grid item xs={12} sx={{ mb: "20px" }}>
                        <Grid container sx={{ justifyContent: "center" }}>
                            <Grid item xs={12} sx={{ bgcolor: "#37474f", mb: "10px", p: { lg: "8px", md: "8px", sm: "8px", xs: "7px" } }}>
                                <Typography align='center' sx={{ fontSize: { lg: "30px", md: "30px", sm: "22px", xs: "18px" }, color: "white", fontWeight: "800" }}>
                                    Popular Shops
                                </Typography>
                            </Grid>
                            {
                                shopData.length == 0
                                    ?
                                <Grid container sx={{justifyContent:"space-around"}}>
                                {
                                    arr.map((ele,index)=>{
                                        return <Grid item key={index} lg={2.3} md={4} sm={6} xs={12} sx={{mt: "20px",overflow:"hidden",borderRadius:"20px 20px 8px 8px"}}>
                                                  <Box style={{width:"100%"}}>
                                                    <Skeleton sx={{ marginTop: -10, marginBottom: -7, height:380, width: "100%" }} />
                                                  </Box>
                                                  <Box sx={{p:"10px 10px 3px 10px" }}>
                                                    <Skeleton variant='text' sx={{fontSize: "17px"}}/>
                                                  
                                                  <Box sx={{display:"flex",justifyContent:"space-between",mt:"10px"}}>
                                                    <Box>
                                                        <Skeleton variant='text' sx={{fontSize:"17px",width:"30px"}}/>
                                                    </Box>
                                                    <Box>
                                                        <Skeleton variant='text' sx={{fontSize:"17px",width:"30px"}}/>
                                                    </Box>
                                                    </Box>
                                                    <Box sx={{mt:"10px"}}>
                                                    <Skeleton variant='text' sx={{fontSize:"17px",width:"50%"}}/>
                                                    </Box>
                                                    <Box sx={{display:"flex",justifyContent:"space-between",mt:"10px",width:"100%"}}>
                                                    <Box sx={{width:"30%"}}>
                                                        <Skeleton variant='text' sx={{fontSize:"17px",width:"100%"}}/>
                                                    </Box>
                                                    <Box sx={{width:"30%"}}>
                                                        <Skeleton variant='text' sx={{fontSize:"17px",width:"100%"}}/>
                                                    </Box>
                                                    </Box>
                                                  </Box>
                                               </Grid>
                                    })                                    
                                }
                                </Grid>
                                :
                                <Grid container sx={{justifyContent:"center"}}>
                             {
                                popularShop.map((ele, index) => {
                                        return (
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
                                        )
                                    }) 
                                  }
                                    </Grid>
                                }
                        </Grid>
                    </Grid>
                   }


                

                {/*All shops */}

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
                                    shopData.map((ele, index) => {

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


                {/*  npn popular shops */}

                {
                    shopData.length > 0 && nonPopularShop.length > 0 && 
                
                    <Grid item xs={12} sx={{ mb: "20px" }}>
                        <Grid container sx={{ justifyContent: "center" }}>
                            <Grid item xs={12} sx={{ bgcolor: "#37474f", mb: "10px", p: { lg: "8px", md: "8px", sm: "8px", xs: "7px" } }}>
                                <Typography align='center' sx={{ fontSize: { lg: "30px", md: "30px", sm: "22px", xs: "18px" }, color: "white", fontWeight: "800" }}>
                                   Non Popular Shops
                                </Typography>
                            </Grid>
                            {
                                shopData.length == 0
                                    ?
                                <Grid container sx={{justifyContent:"space-around"}}>
                                {
                                    arr.map((ele,index)=>{
                                        return <Grid item key={index} lg={2.3} md={4} sm={6} xs={12} sx={{mt: "20px",overflow:"hidden",borderRadius:"20px 20px 8px 8px"}}>
                                                  <Box style={{width:"100%"}}>
                                                    <Skeleton sx={{ marginTop: -10, marginBottom: -7, height:380, width: "100%" }} />
                                                  </Box>
                                                  <Box sx={{p:"10px 10px 3px 10px" }}>
                                                    <Skeleton variant='text' sx={{fontSize: "17px"}}/>
                                                  
                                                  <Box sx={{display:"flex",justifyContent:"space-between",mt:"10px"}}>
                                                    <Box>
                                                        <Skeleton variant='text' sx={{fontSize:"17px",width:"30px"}}/>
                                                    </Box>
                                                    <Box>
                                                        <Skeleton variant='text' sx={{fontSize:"17px",width:"30px"}}/>
                                                    </Box>
                                                    </Box>
                                                    <Box sx={{mt:"10px"}}>
                                                    <Skeleton variant='text' sx={{fontSize:"17px",width:"50%"}}/>
                                                    </Box>
                                                    <Box sx={{display:"flex",justifyContent:"space-between",mt:"10px",width:"100%"}}>
                                                    <Box sx={{width:"30%"}}>
                                                        <Skeleton variant='text' sx={{fontSize:"17px",width:"100%"}}/>
                                                    </Box>
                                                    <Box sx={{width:"30%"}}>
                                                        <Skeleton variant='text' sx={{fontSize:"17px",width:"100%"}}/>
                                                    </Box>
                                                    </Box>
                                                  </Box>
                                               </Grid>
                                    })                                    
                                }
                                </Grid>
                                :
                                <Grid container sx={{justifyContent:"center"}}>
                             {
                                nonPopularShop.map((ele, index) => {
                                        return (
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
                                        )
                                    }) 
                                  }
                                    </Grid>
                                }
                        </Grid>
                    </Grid>
                }

             
            </Grid>

            {
                activeOrder.length > 0 && <Paper className={blink.blink} elevation={6} sx={{ position: "fixed", bottom: "40px", left: "40px", zIndex: 99, cursor: "pointer", height: "80px", width: "80px", bgcolor: "#64dd17", borderRadius: "50px", }} onClick={() => { router.push('/myorders') }}>
                    <Badge color="primary" overlap="circular" sx={{ overflow: "hidden", height: "100%", width: "100%" }} badgeContent={activeOrder.length}>
                        <Box sx={{ userSelect: "none", alignItems: "center", display: "flex", justifyContent: "center", height: "100%", width: "100%" }}>
                            <Typography align='center' sx={{ color: "#1b5e20", fontWeight: 'bold', fontSize: "17px", lineHeight: "18px" }}>Active Orders</Typography>
                        </Box>
                    </Badge>
                </Paper>
            }
        </Container>
    )
}

export default HomePage