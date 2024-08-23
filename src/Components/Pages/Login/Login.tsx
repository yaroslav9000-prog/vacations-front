import { useState } from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {useDispatch} from "react-redux";
import "./Login.css";
import axios from "axios";
interface FormInputs{
    email: string,
    pwd: string
}

function Login(): JSX.Element {
    const {register, handleSubmit} = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data);
    };
    return (
        <div className="Login container" style={{width:"6em", }}>
            <form onSubmit={handleSubmit(onSubmit)} className=" d-flex flex-column form-control-sm" >
                <div className="input-group d-flex flex-column">
                    <label htmlFor="email">Email</label><br />
                    <input type="text" id="email" {...register("email", {required: true})}/>
                </div>
                <div className="input-group flex-column mb-3">
                    <label htmlFor="">Password</label><br />
                    <input type="text" id="pwd" {...register("pwd", {required: true, minLength: 4}) }/>
                </div>
                <input type="submit" value={'Login'} style={{width: "100%"}}/>
            </form>

        </div>
    );
}

export default Login;
