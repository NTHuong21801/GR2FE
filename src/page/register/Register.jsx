import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
export default function Register() {
    const [user, setUser] = useState({});
    function handleCallbackResponse(response) {
        var userObject = jwtDecode(response.credential);
        setUser(userObject);
        console.log(userObject)
    }
    const google = window.google;
    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "1056282068389-lrnjj5hicqoj4sr2aqd1mjmsptm4unck.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("google"),
            { theme: "outline", size: "large" }
        );
    }, []);
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
    //         fetch(`http://localhost:8080/user/register`, requestOption)
    //             .then(response => response)
    //             .then(data => {
    //                 console.log(data)
    //             })
    //             .catch(err => console.error(err));
    //     }
    // }, [user])
    return (
        <div className="main">
            <div className="loginPage">
                <div className="login">
                    <div className="logoHeader">
                        Đăng ký bằng tài khoản của bạn
                    </div>
                    <div className='registerSelect'>
                        <label>Đăng ký với vai trò:</label>
                        <select>
                            <option>Select an option</option>
                            <option>Giáo viên</option>
                            <option>Sinh viên</option>
                        </select>
                    </div>
                    <div className="loginDetail">
                        <input type="text" placeholder='xyz@example.com' />
                    </div>
                    <div className="loginDetail">
                        <input type="text" placeholder='password' />
                    </div>
                    <div className="signIn">
                        <div id="google"></div>
                    </div>
                    <div className="loginBottom">
                        <button className='btn'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}