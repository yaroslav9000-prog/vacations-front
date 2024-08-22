import { useState } from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import "./Login.css";

interface FormInputs{
    email: string,
    pwd: string
}

function Login(): JSX.Element {
    const {register, handleSubmit} = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);
    return (
        <div className="Login">
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email", {required: true})}/>
                <label htmlFor="">Password:</label>
                <input type="text" id="pwd" {...register("pwd", {required: true, minLength: 4}) }/>
                <input type="submit" value={'Login'}/>
            </form>
        </div>
    );
}

export default Login;
