import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import style from "./Login.module.css";
import "./Login.css";

const Login = () => {
  return (
    <div className={style["login-section"]}>
      <h1>Split Wine</h1>
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <div className="App"></div>
      <Button variant="outlined" onClick={() => console.log("submitted")}>
        Submit
      </Button>
    </div>
  );
};

export default Login;
