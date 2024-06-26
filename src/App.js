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
import UploadFile from './page/upload/UploadFile';
import ApiService from './service/service';
import GenFile from './page/genFile/GenFile';
import ChangePass from './page/changePass/ChangePass';
import ForgotPass from './page/forgotPass/ForgotPass';
import HomePage from './page/homePage/HomePage';
const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" />;
  }
  return <Component {...rest} />;
};
const isAuthenticated = () => {
  const accessToken = localStorage.getItem('access_token');
  const expiresAt = localStorage.getItem('accessExpiredTime');

  if (!accessToken || !expiresAt) {
    return false;
  }
  const expiresAtTime = parseInt(expiresAt, 10);
  return Date.now() < expiresAtTime;
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
        localStorage.removeItem('accountId');
        localStorage.removeItem('email');
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
        <Route path="/signup" element={<Register />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/divide" element={<PrivateRoute component={Divide}  />} />
        <Route path="/home" element={<PrivateRoute component={HomePage}  />} />
        <Route path="/genFile" element={<PrivateRoute component={GenFile}  />} />
        <Route path="/evaluate" element={<PrivateRoute component={Evaluate} />} />
        <Route path="/debate" element={<PrivateRoute component={Debate} />} />
        <Route path="/createDivide" element={<PrivateRoute component={CreateDivide} />} />
        <Route path="/createDebate" element={<PrivateRoute component={CreateDebate} />} />
        <Route path="/createEvaluate" element={<PrivateRoute component={CreateEvaluate} />} />
        <Route path="/student" element={<PrivateRoute component={ListStudent} />} />
        <Route path="/upload" element={<PrivateRoute component={UploadFile} />} />
        <Route path="/changePass" element={<PrivateRoute component={ChangePass} />} />
      </Routes>
    </Router>
  )
}

export default App;
