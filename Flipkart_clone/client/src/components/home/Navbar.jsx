

import { Typography, Box, styled } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { navData } from '../../constant/data';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const NavBar = () => {
    return (
        <Component>
            {
                navData.map(temp => (
                    <Link to='category' style={{textDecoration:'none'}}>
                    <Container style={{cursor:"pointer"}}>
                        <img src={temp.url} style={{  width: 64 }} />
                        <Text>{temp.text}</Text>
                    </Container>
                    </Link>
                ))
            }
        </Component>
    )
}

export default NavBar;