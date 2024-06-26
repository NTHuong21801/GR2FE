import MiniDrawer from "../navbar/Navbar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerHeader from "../component/DrawerHeader";
import Topbar from "../topbar/Topbar";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Typography } from '@mui/material';
import ApiService from "../../service/service";
import Noti from "../component/Noti";
import Footer from "../footer/Footer";
const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  };
export default function ChangePass() {
    const [open, setOpen] = useState(true);
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const [values, setValues] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        showCurrentPassword: false,
        showNewPassword: false,
        showConfirmPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = (prop) => () => {
        setValues({ ...values, [prop]: !values[prop] });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [showErr, setShowErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [noti, setNoti] = useState(false);
    const handCloseNoti = () => {
        setNoti(false)
    }
    const handleChangePassword = async () => {
        const { currentPassword, newPassword, confirmPassword } = values;
        if(!validatePassword(newPassword)){
            setShowErr(true);
            setErrorMessage("Mật khẩu cần có ít nhất 6 ký tự, bao gồm chữ cái in hoa, chữ thường và ký tự đặc biệt");
            return;
        }
        if (newPassword == '' || confirmPassword == '' || currentPassword == '') {
            setShowErr(true);
            setErrorMessage("Bạn cần điền đầy đủ các trường!")
        } else {
            if (newPassword !== confirmPassword) {
                setShowErr(true);
                setErrorMessage("Confirm password and new password do not match!")
            } else {
                const data = {
                    "currentPass": currentPassword,
                    "newPass": newPassword
                }
                const res = await ApiService.changePassword(data);
                if (res.responseMessage == 'Pass not match') {
                    setShowErr(true);
                    setErrorMessage("The current password is wrong!")
                } else {
                    setShowErr(false);
                    setNoti(true);
                    setValues({
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: '',
                        showCurrentPassword: false,
                        showNewPassword: false,
                        showConfirmPassword: false,
                    });
                }
            }
        }
    };
    return (
        <>
            {noti && <Noti onCloseNoti={handCloseNoti} mess={"Bạn đã thay đổi mật khẩu thành công!"} />}
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Topbar open={open} handleOpen={handleDrawerOpen} />
                <MiniDrawer open={open} handClose={handleDrawerClose} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <div style={{ marginTop: '2rem' }}>
                        <Typography variant="h4" gutterBottom>
                            Change Password
                        </Typography>

                        <div className="currentPass">
                            <OutlinedInput
                                fullWidth
                                id="current-password"
                                type={values.showCurrentPassword ? 'text' : 'password'}
                                value={values.currentPassword}
                                onChange={handleChange('currentPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle current password visibility"
                                            onClick={handleClickShowPassword('showCurrentPassword')}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="Current Password"
                            />
                        </div>
                        <div className="currentPass">
                            <OutlinedInput
                                fullWidth
                                id="new-password"
                                type={values.showNewPassword ? 'text' : 'password'}
                                value={values.newPassword}
                                onChange={handleChange('newPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle new password visibility"
                                            onClick={handleClickShowPassword('showNewPassword')}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showNewPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="New Password"
                            />
                        </div>
                        <div className="currentPass">
                            <OutlinedInput
                                fullWidth
                                id="confirm-password"
                                type={values.showConfirmPassword ? 'text' : 'password'}
                                value={values.confirmPassword}
                                onChange={handleChange('confirmPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm password visibility"
                                            onClick={handleClickShowPassword('showConfirmPassword')}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="Confirm New Password"
                            />
                        </div>
                        {showErr && <span className="errorMessage">{errorMessage}</span>}
                        <div className="btn-changepass btn" onClick={handleChangePassword}>Change Password</div>
                    </div>
                </Box>
            </Box>
            <Footer />
        </>
    )
}