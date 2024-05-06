import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuModel from '../../model/menu.model';
import { Link } from 'react-router-dom';
import ListStudent from '../listStudent/LIstStudent';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
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
export default function Topbar({open, handleOpen}) {
    const handleLogout = () => {
        const shouldDelete = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
        if (shouldDelete) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('roleId');
            localStorage.removeItem('accountId');
            localStorage.removeItem('email');
            localStorage.removeItem('status');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('refreshExpiredTime');
            localStorage.removeItem('accessExpiredTime');
            window.location.reload();
        }
    }

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
                        HUST
                    </Typography>
                </div>
                <Button variant="contained" onClick={() => handleLogout()} endIcon={<SendIcon />}>Đăng xuất</Button>
            </Toolbar>
        </AppBar>
    )
}