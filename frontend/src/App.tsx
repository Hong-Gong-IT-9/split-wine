import React from 'react';
import './App.css';
import background from './images/background.png'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Landing  from "./pages/Landing";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
        <BrowserRouter>
            <AppHeader/>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);
}

export default App;
