/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useParams } from "react-router-dom";
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
import OtherFile from './page/otherFile/OtherFile';
import Profile from './page/profile/Profile';
import { useSelector,useDispatch } from "react-redux";
import { setLogout, setLogin } from './service/state';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const accessToken = useSelector((state) => state.accessToken);
  const expiresAt = useSelector((state) => state.accessExpiredTime);
  return isAuthenticated(accessToken, expiresAt) ? (
    <Component />
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};
const isAuthenticated = (accessToken, expiresAt) => {
  if (!accessToken || !expiresAt) {
    return false;
  }
  const expiresAtTime = parseInt(expiresAt, 10);
  return Date.now() < expiresAtTime;
};
function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.accessToken);
  const tokenRef = useSelector((state) => state.refreshToken);
  const refreshExpiredTimeLogin = useSelector((state) => state.refreshExpiredTime);
  const accessExpiredTimeLogin = useSelector((state) => state.accessExpiredTime);
  const [accessToken, setAccessToken] = useState(token);
  const [refreshToken, setRefreshToken] = useState(tokenRef);
  useEffect(() => {
    const fetchData = async () => {
      const refreshExpiredTime = parseInt(refreshExpiredTimeLogin, 10);
      const accessExpiredTime = parseInt(accessExpiredTimeLogin, 10);
      const currentTimeInSeconds = Math.floor(Date.now());
      if (accessToken && accessExpiredTime < currentTimeInSeconds) {
        if (refreshToken && refreshExpiredTime < currentTimeInSeconds) {
          try {
            const data = {
              "refreshToken": refreshToken
            }
            const res = await ApiService.getRefreshToken(data);
            dispatch(
              setLogin({
                accessToken: res.token.accessToken,
                refreshToken: res.token.refreshToken,
                accessExpiredTime: res.token.accessExpiredTime,
                refreshExpiredTime: res.token.refreshExpiredTime
              })
            );
            setAccessToken(res.accessToken)
            setRefreshToken(res.refreshToken)

          } catch (err) {
            console.log(err);
            dispatch(setLogout());
            setAccessToken(null);
            setRefreshToken(null);
            // window.location.href = "/"
          }
        } else {
          dispatch(setLogout());
          setAccessToken(null);
          setRefreshToken(null);
          window.location.href="/";
        }
      }
    }
    fetchData();
  }, [accessToken, refreshToken]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/divide" element={<PrivateRoute component={Divide} />} />
        <Route path="/home" element={<PrivateRoute component={HomePage} />} />
        <Route path="/genFile" element={<PrivateRoute component={GenFile} />} />
        <Route path="/evaluate" element={<PrivateRoute component={Evaluate} />} />
        <Route path="/other" element={<PrivateRoute component={OtherFile} />} />
        <Route path="/debate" element={<PrivateRoute component={Debate} />} />
        <Route path="/createDivide" element={<PrivateRoute component={CreateDivide} />} />
        <Route path="/createDebate" element={<PrivateRoute component={CreateDebate} />} />
        <Route path="/createEvaluate" element={<PrivateRoute component={CreateEvaluate} />} />
        <Route path="/student" element={<PrivateRoute component={ListStudent} />} />
        <Route path="/upload" element={<PrivateRoute component={UploadFile} />} />
        <Route path="/changePass" element={<PrivateRoute component={ChangePass} />} />
        <Route path="/profile" element={<PrivateRoute component={Profile} />} />
      </Routes>
    </Router>
  )
}

export default App;
