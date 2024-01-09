import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from './page/login/Login';
import "./main.css"
import ListStudent from './page/listStudent/LIstStudent';
import Evaluate from './page/evaluate/Evaluate';
import Debate from './page/debate/Debate';
import Divide from './page/divide/Divide';
import CreateEvaluate from './page/evaluate/CreateEvaluate';
import CreateDebate from './page/debate/CreateDebate';
import MainPage from './page/mainPage/MainPage';
import Register from './page/register/Register';
import CreateDivide from './page/divide/CreateDivide';
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
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        {/* <Route exact path="/login" element={<Login/>} /> */}
        <Route path="/signup" element={<Register/>} />
        <Route path="/divide" element={<PrivateRoute component={Divide} requiredRoleId={["2"]} />} />
        <Route path="/evaluate" element={<PrivateRoute component={Evaluate} requiredRoleId={["2"]} />} />
        <Route path="/debate" element={<PrivateRoute component={Debate} requiredRoleId={["2"]} />}/>
        <Route path="/createDivide" element={<PrivateRoute component={CreateDivide} requiredRoleId={["2"]} />}/>
        <Route path="/createDebate" element={<PrivateRoute component={CreateDebate} requiredRoleId={["2"]} />}/>
        <Route path="/createEvaluate" element={<PrivateRoute component={CreateEvaluate} requiredRoleId={["2"]} />}/>
        <Route path="/student" element={<PrivateRoute component={ListStudent} requiredRoleId={["2"]} />}/>
      </Routes>
    </Router>
  )
}

export default App;
