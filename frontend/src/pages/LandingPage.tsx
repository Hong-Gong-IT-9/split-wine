import style from './LandingPage.module.css'
import {Button} from "@mui/material";

const LandingPage = () => {
    return <div className={style['container']}>
            <div className={style['registration-form']}>
                <br /><br />
                <b><div className={style['textbox1']}>Hi! IT9</div></b>
            <div className={style['textbox2']}>Welcome back to SplitWines</div>

            <br /><br /><br /><br /><br /><br />
            
            <Button className={style["btn"]}> + Event  </Button>
        </div>
    </div>


}
export default LandingPage;