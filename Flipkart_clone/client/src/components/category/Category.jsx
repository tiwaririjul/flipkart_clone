import React from 'react'
import { useParams } from "react-router-dom";
import { Box, Typography, styled } from '@mui/material';
const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    border:'2px solid red',
    margin: '60px 0 0 300px !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))
const Image = styled("img")({
    width: "auto",
    height: 180,
  });
const Category = () => {
    const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    const { text } = useParams();
    return (
        <Component>
            <Box style={{display:'flex' }}>
                <Image src="http://www.wrock.org/wp-content/uploads/2015/12/10729smartphone-samsung-galaxy-core-2-duos-dual-chip-3gandroid-4.4-cam.-5mp-tela-4-5-34-proc.-quad-core-086774600.jpg" alt="" />
                <Box style={{marginLeft:'10px'}}>
                    <Typography>I Phone 9</Typography>
                    <Typography>rating</Typography>
                    <Typography>stock</Typography>
                    <ul>
                        <li>4gb Ran</li>
                        <li>helio G90 processor</li>
                        <li>108 MP camera</li>
                        <li>5000mh battery</li>
                        <li>5g</li>
                    </ul>
                </Box>
            </Box>
            <Box>
                <Typography>100000 INR</Typography>
                <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
                  Discount 1200
                    <Box component="span">
                        <img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="" />
                    </Box>
                </Typography>
                <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
                    <Box component="span" style={{ fontSize: 28 }}>
                        Free Delievery by Today
                    </Box>
                    &nbsp;&nbsp;&nbsp;
                </Typography>
                <Typography>Upto 1000Rs Off on Exchange</Typography>
                <Typography>Bank Offer</Typography>
            </Box>
        </Component>
    )
}

export default Category
