/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useForm } from 'react-hook-form';
import ApiService from '../../service/service';
import Divide from '../divide/Divide';
import { Link } from 'react-router-dom';
import UpdateInforStudent from '../updateInfor/UpdateInforStudent';
import UpdateInforTeacher from '../updateInfor/UpdateInforTeacher';
import Student from '../studentPage/Student';
export default function Login() {
    // const [user, setUser] = useState({});
    // function handleCallbackResponse(response) {
    //     var userObject = jwtDecode(response.credential);
    //     setUser(userObject);
    //     console.log(userObject)
    // }
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("access_token") != null);
    const [isActive, setIsActive] = useState(localStorage.getItem("status") === "ACTIVE");
    // const google = window.google;
    // useEffect(() => {
    //     google.accounts.id.initialize({
    //         client_id: "1056282068389-lrnjj5hicqoj4sr2aqd1mjmsptm4unck.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     });
    //     google.accounts.id.renderButton(
    //         document.getElementById("google"),
    //         { theme: "outline", size: "large" }
    //     );
    // }, []);
    // useEffect(() => {
    //     if (Object.keys(user).length !== 0) {
    //         const data = {
    //             "username": user.name,
    //             "email": user.email,
    //             "userAuth": user.aud
    //         }
    //         var myHeaders = new Headers();
    //         myHeaders.append("Content-Type", "application/json");
    //         var requestOption = {
    //             method: "POST",
    //             redirect: "follow",
    //             headers: myHeaders,
    //             body: JSON.stringify(data)
    //         }
    //         fetch(`http://localhost:8090/user/register`, requestOption)
    //             .then(response => response)
    //             .then(data => {
    //                 console.log(data)
    //             })
    //             .catch(err => console.error(err));
    //     }
    // }, [user])
    const { register, handleSubmit } = useForm();
    const onSubmit = (d) => {
        const data = {
            "username": d.email,
            "password": d.pass
        }
        ApiService.login(data)
            .then(data => {
                localStorage.setItem("access_token", data.token.accessToken);
                localStorage.setItem("accountId", data.accountId);
                localStorage.setItem("roleId", data.roleId);
                localStorage.setItem("email", data.token.userName);
                localStorage.setItem("status", data.status);
                localStorage.setItem("refresh_token", data.token.refreshToken);
                localStorage.setItem("accessExpiredTime", data.token.accessExpiredTime);
                localStorage.setItem("refreshExpiredTime", data.token.refreshExpiredTime);
                setIsLoggedIn(true);
                if(data.status === "ACTIVE"){
                    setIsActive(true);
                }else{
                    setIsActive(false);
                }
            })
            .catch(err => {
                console.error(err);
                setIsLoggedIn(false);
                alert("Mật khẩu hoặc tên đăng nhập không đúng. Vui lòng kiểm tra lại!")
            });
        ;


    };
    if (isLoggedIn) {
        if(isActive){
            if(localStorage.getItem("roleId") === "2"){
                return <Divide />
            }else{
                return <Student />
            }
        }else{
            if(localStorage.getItem("roleId") === "3"){
                return <UpdateInforStudent />
            }else{
                return <UpdateInforTeacher />
            }
        }
    } else {
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
                            {/* <div className="signIn">
                                <div id="google"></div>
                            </div> */}
                            <div className="loginBottom">
                                <p>Quên mật khẩu</p>
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

}