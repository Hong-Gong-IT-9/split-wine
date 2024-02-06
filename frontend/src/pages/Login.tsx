import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { User as UserDto } from "../generated/openapi/api";
import Api from "../Api";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userOptions, setUserOptions] = useState(new Array<UserDto>());

  useEffect(() => {
    Api.User.getUsers().then((response) => {
      if (response.data) {
        setUserOptions(response.data);
      }
    });
  }, []);

  return (
    <div>
      <p>login page</p>
      <p>For demo purpose only below:</p>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userId}
          label="User"
          onChange={(event: SelectChangeEvent) => {
            setUserId(event.target.value);
          }}
        >
          {userOptions.map((u: UserDto) => (
            <MenuItem value={u.id?.toString()}>{u.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Login;
