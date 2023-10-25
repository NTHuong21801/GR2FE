import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import { Button } from 'react-bootstrap';
export default function Login(){
    return(
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
                        <input type="text" placeholder='xyz@example.com' />
                    </div>
                    <div className="loginDetail">
                        <input type="text" placeholder='password' />
                    </div>
                    <div className="loginBottom">
                        <p>Quên mật khẩu</p>
                        <button className='btn'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}