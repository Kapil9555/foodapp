'use client'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const adminDashBoard = () => {

    const router = useRouter()
    const cards = [ { title: "All Users", route: "adminallusers" }, { title: "All Shops", route: "adminallshops" },{ title: "Active Orders", route: "adminactiveorder" } , { title: "All Categories", route: "adminallcategroies" }, { title: "All Items", route: "adminallitems" }, { title: "All Address", route: "adminalladdress" }, { title: "All Past Orders", route: "adminallpastorders" }]

    const handlePageChange = (ele) => {
        router.push(`${ele}`)
    }

    return (
        <>
            <Box sx={{ display: "flex", height: "10vh", bgcolor: "black", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <Typography sx={{ fontSize: "30px", fontWeight: "900", color: "white" }}>
                    Admin DashBoard
                </Typography>
            </Box>
            <Grid container sx={{ bgcolor: "#eeeeee", p: "10px", height: "90vh", alignItems: "center" }}>
                {
                    cards.map((ele, index) => {
                        return (
                            <Grid key={index} item xs={2.8} sx={{ m: "10px" }}>
                                <Box sx={{ "&:hover": { bgcolor: "black", color: "#18ffff", border: "3px solid #18ffff" }, bgcolor: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid black", height: "200px", borderRadius: "12px", overflow: "hidden" }} onClick={() => { handlePageChange(ele.route) }}>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "900" }}>{ele.title}</Typography>
                                </Box>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </>
    )
}

export default adminDashBoard