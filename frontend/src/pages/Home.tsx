import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import style from './Landing.module.css'

const Home = () => {
    const navigate = useNavigate();

    return <div className={style['signup-btn']}>
        <Button variant="contained"
                onClick={() => {
                    navigate('/registration')
                }}
                style={{
                    textTransform: 'none',
                    color: '#E85757',
                    backgroundColor: '#FFFFFF',
                    fontWeight: 'bolder',
                }}>Sign Up</Button>
    </div>

}

export default Home;