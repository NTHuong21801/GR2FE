/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useRoutes, useParams } from "react-router-dom";
import Login from './page/login/Login';
import "./main.css"
import ListStudent from './page/listStudent/LIstStudent';
import Evaluate from './page/evaluate/Evaluate';
import Debate from './page/debate/Debate';
import Divide from './page/divide/Divide';
import CreateEvaluate from './page/evaluate/CreateEvaluate';
import CreateDebate from './page/debate/CreateDebate';
import Register from './page/register/Register';
import CreateDivide from './page/divide/CreateDivide';
import UpdateInforTeacher from './page/updateInfor/UpdateInforTeacher';
import UpdateInforStudent from './page/updateInfor/UpdateInforStudent';
import UploadFile from './page/upload/UploadFile';
import Student from './page/studentPage/Student';
import ApiService from './service/service';
import GenFile from './page/genFile/GenFile';
import ChangePass from './page/changePass/ChangePass';
import ForgotPass from './page/forgotPass/ForgotPass';
const PrivateRoute = ({ component: Component, isAuthenticated, requiredRoleId, ...rest }) => {
  const userRole = localStorage.getItem('roleId');
  if (!isAuthenticated) {
    if (requiredRoleId && !requiredRoleId.includes(userRole)) {
      return <Navigate to="/" />;
    }
  }

  return <Component {...rest} />;
};

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refresh_token'));
  useEffect(() => {
    const fetchData = async () => {
      const refreshExpiredTime = parseInt(localStorage.getItem('refreshExpiredTime'), 10);
      const accessExpiredTime = parseInt(localStorage.getItem('accessExpiredTime'), 10);

      const currentTimeInSeconds = Math.floor(Date.now());
      if (accessToken && accessExpiredTime > currentTimeInSeconds) {
      } else if (refreshToken && refreshExpiredTime > currentTimeInSeconds) {
        try {
          const data = {
            "refreshToken": refreshToken
          }
          const res = await ApiService.getRefreshToken(data);
          localStorage.setItem("access_token", res.accessToken);
          localStorage.setItem("refresh_token", res.refreshToken);
          localStorage.setItem("accessExpiredTime", res.accessExpiredTime);
          localStorage.setItem("refreshExpiredTime", res.refreshExpiredTime);
          setAccessToken(res.accessToken)
          setRefreshToken(res.refreshToken)

        } catch (err) {
          console.log(err);
        }
      } else {
        localStorage.removeItem('access_token');
        localStorage.removeItem('roleId');
        localStorage.removeItem('accountId');
        localStorage.removeItem('email');
        localStorage.removeItem('status');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('refreshExpiredTime');
        localStorage.removeItem('accessExpiredTime');
      }
    }
    fetchData();
  }, [accessToken, refreshToken]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route exact path="/login" element={<Login/>} /> */}
        <Route path="/signup" element={<Register />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/divide" element={<PrivateRoute component={Divide} requiredRoleId={["1"]} />} />
        <Route path="/genFile" element={<PrivateRoute component={GenFile} requiredRoleId={["1"]} />} />
        <Route path="/evaluate" element={<PrivateRoute component={Evaluate} requiredRoleId={["1"]} />} />
        <Route path="/debate" element={<PrivateRoute component={Debate} requiredRoleId={["1"]} />} />
        <Route path="/createDivide" element={<PrivateRoute component={CreateDivide} requiredRoleId={["1"]} />} />
        <Route path="/createDebate" element={<PrivateRoute component={CreateDebate} requiredRoleId={["1"]} />} />
        <Route path="/createEvaluate" element={<PrivateRoute component={CreateEvaluate} requiredRoleId={["1"]} />} />
        <Route path="/student" element={<PrivateRoute component={ListStudent} requiredRoleId={["1"]} />} />
        <Route path="/upload" element={<PrivateRoute component={UploadFile} requiredRoleId={["1"]} />} />
        <Route path="/updateTeacher" element={<PrivateRoute component={UpdateInforTeacher} requiredRoleId={["1"]} />} />
        <Route path="/changePass" element={<PrivateRoute component={ChangePass} requiredRoleId={["1"]} />} />
        <Route path="/updateStudent" element={<PrivateRoute component={UpdateInforStudent} requiredRoleId={["3"]} />} />
        <Route path="/studentPage" element={<PrivateRoute component={Student} requiredRoleId={["3"]} />} />
      </Routes>
    </Router>
  )
}

export default App;
