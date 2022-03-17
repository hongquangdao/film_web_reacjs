import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        background: '#2d313a',
        position: 'fixed',
        width: '100%',
        bottom: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
    }
})


export default function SimpleBottomNavigation() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let navigate = useNavigate();

    React.useEffect(() => {
        if(value === 0) navigate("/")
        else if(value === 1) navigate("/movies")
        else if(value === 2) navigate("/series")
        else if(value === 3) navigate("/search")
    },[value, navigate])
   
    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                className={classes.root}
            >
                <BottomNavigationAction
                    style={{ color: 'white' }}
                    label="THỊNH HÀNH"
                    icon={<WhatshotIcon />} />
                <BottomNavigationAction
                    style={{ color: 'white' }}
                    label="PHIM CHIẾU RẠP"
                    icon={<MovieFilterIcon />} />
                <BottomNavigationAction
                    style={{ color: 'white' }}
                    label="PHIM TRUYỀN HÌNH"
                    icon={<MovieFilterIcon />} />
                <BottomNavigationAction
                    style={{ color: 'white' }}
                    label="Tìm kiếm"
                    icon={<SearchOutlinedIcon />} />
            </BottomNavigation>
        </Box>
    );
}
