import {Button} from "@mui/material";
import logo from '../images/logo.png'
import style from './AppHeader.module.css'
import { useNavigate } from 'react-router-dom';
const AppHeader = () => {

    const navigate = useNavigate();

    return <div className={style['container']}>
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
}

export default AppHeader;