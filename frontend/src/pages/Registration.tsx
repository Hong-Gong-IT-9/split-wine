import {Button, Typography} from "@mui/material";
import style from './Registration.module.css'
import {useState} from "react";


const Registration = () => {
    const [step, setStep] = useState(0);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Add your logic here to handle form submission, such as sending data to a backend
        console.log(formData); // For demonstration, log form data to console
    };

    return <div className={style['container']}>
        {step === 0 && <Button variant="contained" onClick={() => setStep(1)} style={{
            textTransform: 'none',
            color: '#E85757',
            backgroundColor: '#FFFFFF',
            fontWeight: 'bolder'
        }}>Sign Up</Button>}
        {(step === 1) &&
            <div className={style['registration-form']}>
                <div className={style['form-container']}>
                    <Typography variant="h5" style={{color: '#E85757', fontWeight: 'bolder'}}>User
                        Registration</Typography>
                    <span style={{color: '#E85757', fontWeight: 'light'}}>please fill up your information</span>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">re-enter your password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>

        }
    </div>
}

export default Registration;