import React from "react"
import classes from "./Login.module.css"
import accountIcon from '../../icons8-user-24.png'
import lockIcon from '../../icons8-lock-24.png'
import {useNavigate} from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(`Account ${event.target.accountName.value}`)
        console.log(`Password ${event.target.password.value}`)
        navigate('/people');
    }

    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginForm}>
                <div className={classes.loginHeader}>
                    <h1>USER LOGIN</h1>
                </div>
                <div className={classes.form}>
                    <form id="login" onSubmit={handleSubmit}>
                        <label className={classes.inputContainer}>
                            <img className={classes.loginIcon} src={accountIcon} alt="login icon"/>
                            <input className={classes.loginInput} type="text" name="accountName" required={true}
                                   placeholder={"Username"}/></label>
                        <label className={classes.inputContainer}>
                            <input className={classes.passwordInput} type="password" name="password" required={true}
                                   placeholder={"Password"}/>
                            <img className={classes.passwordIcon} src={lockIcon} alt="password lock icon"/>
                        </label>
                        <button className={classes.loginButton} type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}