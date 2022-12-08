import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './registration/Registration';
import Login from './login/Login';
import Forgot from './forgot password/Forgot';
import Profile from './profile/Profile';

function App() {
  return (
    <div className="App">
      {/* <Login/>
     <Registration/>
     <Forgot/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/registration" element={< Registration/>} />
          <Route path="/forgotpassword" element={< Forgot/>} />
          <Route path="/profile" element={< Profile/>} />
          
          
        
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
