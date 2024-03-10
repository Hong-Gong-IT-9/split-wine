import React from 'react';
import './App.css';
import background from './images/background.png'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home  from "./pages/Home";
import AppHeader from "./components/AppHeader";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
        <BrowserRouter>
            <AppHeader/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/landing" element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);
}

export default App;
