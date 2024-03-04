/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'
import { useForm } from 'react-hook-form';
import ApiService from '../../service/service';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (d) => {
        const data = {
            "username": d.email,
            "password": d.password,
            "role": {
                "name": d.role
            }
        }
        ApiService.register(data)
            .then(data => {
                if(data.responseCode === '401'){
                    alert("Email đã tồn tại, vui lòng kiểm tra lại thông tin đăng ký của bạn");
                }else{
                    alert("Đăng ký tài khoản thành công, vui lòng đăng nhập và cập nhật thông tin cá nhân của bạn");
                    navigate("/");
                }
            })
            .catch(err => {
                alert("Email đã tồn tại, vui lòng kiểm tra lại thông tin đăng ký của bạn");
            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="main">
                <div className="loginPage">
                    <div className="login">
                        <div className="logoHeader">
                            Đăng ký bằng tài khoản của bạn
                        </div>
                        <div className='registerSelect'>
                            <label>Đăng ký với vai trò:</label>
                            <select {...register("role", { required: true })}>
                                <option value="ROLE_TEACHER">Giáo viên</option>
                                <option value="ROLE_STUDENT">Sinh viên</option>
                            </select>
                        </div>
                        <div className="loginDetail">
                            <input type="text" {...register("email", { required: true })} placeholder='Email' />
                        </div>
                        <div className="loginDetail">
                            <input type="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password should be at least 6 characters long',
                                    },
                                })}
                                placeholder='Password' />
                            {errors.password && <p className='validatePass'>{errors.password.message}</p>}
                        </div>
                        <div className="loginDetail">
                            <input type="password"
                                {...register('confirmPassword', {
                                    validate: (value) =>
                                        value === watch('password') || 'The passwords do not match',
                                })}
                                placeholder='Confirm password' />
                            {errors.confirmPassword && <p className='validatePass'>{errors.confirmPassword.message}</p>}
                        </div>
                        <div className="register">
                            <button className='btn'>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}