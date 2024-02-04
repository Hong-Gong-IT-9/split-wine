import {Button} from "@mui/material";
import logo from '../images/logo.png'
import style from './AppHeader.module.css'
import { useNavigate } from 'react-router-dom';
import React from "react"

const AppHeader = () => {

    const navigate = useNavigate();

    const [login, isLogin] = React.useState(true)

    return login ? (
        <div className={style['container']}>
        <img src={logo} alt="wine-logo"/>
        <div className={style['button-group']}>
            <Button onClick={()=> {
                navigate('/dashboard')
            }} style={{textTransform: 'none', color: '#E85757'}}>Dashboard</Button>
            <Button onClick={()=> {
                navigate('/event')
            }} style={{textTransform: 'none', color: '#E85757'}}>My Events</Button>
            <Button onClick={()=> {
                navigate('/wine')
            }} style={{textTransform: 'none', color: '#E85757'}}>My Wines</Button>
            <Button onClick={()=> {
                navigate('/friend')
            }} style={{textTransform: 'none', color: '#E85757'}}>Frient List</Button>
            <Button
                onClick={()=> {
                    navigate('/')
                }}
                style={{textTransform: 'none', color: '#E85757'}}>Sign out</Button>
        </div>
    </div>
    ) : (
        <div className={style['container']}>
        <img src={logo} alt="wine-logo"/>
        <div className={style['button-group']}>
            <Button onClick={()=> {
                navigate('/login')
            }} style={{textTransform: 'none', color: '#E85757'}}>Login</Button>
            <Button
                onClick={()=> {
                    navigate('/registration')
                }}
                style={{textTransform: 'none', backgroundColor: '#E85757', color: '#FFFFFF'}}>Sign Up</Button>
        </div>
    </div>
    )    
}

export default AppHeader;