import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setLogout } from '../../service/state';
import "../header/header.css"
const drawerWidth = 300;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
export default function Topbar({ open, handleOpen }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        const shouldDelete = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
        if (shouldDelete) {
            dispatch(setLogout());
            navigate("/");
        }
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openDropDown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar sx={{ background: '#AA261B', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Link className='textNoneTop' to={"/home"}>XUHUONG</Link>
                    </Typography>
                </div>
                <div className='settingbtn'>
                    <Button
                        id="basic-button"
                        aria-controls={openDropDown ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openDropDown ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Setting <ArrowDropDownIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openDropDown}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link to={'/profile'} className={`col-md-2 textNone`}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                        </Link>
                        <Link to={'/changePass'} className={`col-md-2 textNone`}>
                            <MenuItem onClick={handleClose}>Change Password</MenuItem>
                        </Link>
                        <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
                    </Menu>
                </div>
                {/* <div className="btn-logout btn" onClick={() => handleLogout()}>Đăng xuất <SendIcon /></div> */}
            </Toolbar>
        </AppBar>
    )
}