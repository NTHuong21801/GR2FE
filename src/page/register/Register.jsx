/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'
import { useForm } from 'react-hook-form';
import ApiService from '../../service/service';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
};
export default function Register() {
    const [showErr, setShowErr] = useState(false);
    const [errMes, setErrMes] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (d) => {
        if (!validatePassword(d.password)) {
            setShowErr(true);
            setErrMes("Mật khẩu cần có ít nhất 6 ký tự, bao gồm chữ cái in hoa, chữ thường vầ ký tự đặc biệt");
            return;
        } {
            const data = {
                "username": d.email,
                "password": d.password,
            }
            ApiService.register(data)
                .then(data => {
                    if (data.responseCode === '401') {
                        setShowErr(true);
                        setErrMes("Email đã tồn tại, vui lòng kiểm tra lại thông tin đăng ký của bạn");
                    } else if (data.responseCode === '400') {
                        setShowErr(true);
                        setErrMes("Email của bạn phải là email của giảng viên!");
                    } else {
                        alert("Đăng ký tài khoản thành công");
                        navigate("/");
                    }
                })
                .catch(err => {
                    alert("Email đã tồn tại, vui lòng kiểm tra lại thông tin đăng ký của bạn");
                })
        }
    }
    const [values, setValues] = useState({
        email: '',
        newPassword: '',
        confirmPassword: '',
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
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="main">
                <div className="loginPage">
                    <div className="login">
                        <Link to="/">
                            <div className=''><KeyboardBackspaceIcon />Quay lại trang đăng nhập</div>
                        </Link>
                        <div className="logoHeader">
                            Đăng ký bằng tài khoản của bạn
                        </div>
                        <div className="loginDetailRes">
                            <OutlinedInput
                                {...register("email", { required: true })}
                                fullWidth
                                id="email"
                                type='text'
                                value={values.email}
                                onChange={handleChange('email')}
                                placeholder="Email"
                            />
                        </div>
                        <div className="loginDetailRes">
                            <OutlinedInput
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password should be at least 6 characters long',
                                    },
                                })}
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
                                placeholder="Password"
                            />

                            {/* <input type="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password should be at least 6 characters long',
                                    },
                                })}
                                placeholder='Password' /> */}
                            {errors.password && <p className='validatePass'>{errors.password.message}</p>}
                        </div>
                        <div className="loginDetailRes">
                            <OutlinedInput
                                {...register('confirmPassword', {
                                    validate: (value) =>
                                        value === watch('password') || 'The passwords do not match',
                                })}
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
                                placeholder="Confirm Password"
                            />
                            {/* <input type="password"
                                {...register('confirmPassword', {
                                    validate: (value) =>
                                        value === watch('password') || 'The passwords do not match',
                                })}
                                placeholder='Confirm password' /> */}
                            {errors.confirmPassword && <p className='validatePass'>{errors.confirmPassword.message}</p>}
                        </div>
                        {showErr && <span className='errorMessage'>{errMes}</span>}
                        <div className="register">
                            <button className='btn'>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}