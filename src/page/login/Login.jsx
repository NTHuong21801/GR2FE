/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ApiService from '../../service/service';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { setLogin } from '../../service/state';
export default function Login() {
    const [showErr, setShowErr] = useState(false);
    const [errMes, setErrMes] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = async (d) => {
        try {
            const data = {
                "username": d.email,
                "password": d.pass
            }
            const res = await ApiService.login(data);
            dispatch(
                setLogin({
                  accessToken: res.token.accessToken,
                  accountId: res.accountId,
                  email: res.token.userName,
                  refreshToken: res.token.refreshToken,
                  accessExpiredTime: res.token.accessExpiredTime,
                  refreshExpiredTime: res.token.refreshExpiredTime
                })
              );
            navigate('/home');
        } catch (error) {
            console.error(error);
            setShowErr(true);
            setErrMes("Mật khẩu hoặc tên đăng nhập không đúng. Vui lòng kiểm tra lại!");
        }
    };
    
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="main">
                    <div className="loginPage">
                        <div className="login">
                            <div className="logoBK">
                                <img src="assets/img/logo.png" alt="" />
                            </div>
                            <div className="logoHeader">
                                Đăng nhập bằng tài khoản của bạn
                            </div>
                            <div className="loginDetail">
                                <input type="text" {...register("email", { required: true })} placeholder='xyz@example.com' />
                            </div>
                            <div className="loginDetail">
                                <input type="password" {...register("pass", { required: true })} placeholder='password' />
                            </div>
                            {showErr && <span className='errorMessage'>{errMes}</span>}
                            <div className="loginBottom">
                                <Link to="/forgotPass">
                                    <p>Quên mật khẩu</p>
                                </Link>
                                <button className='btn'>Đăng nhập</button>
                            </div>
                            <div>
                                <p>Bạn chưa có tài khoản - <Link to='/signUp' className='registerBtn'>Đăng ký</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    

}