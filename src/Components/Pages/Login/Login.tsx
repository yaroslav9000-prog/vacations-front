import { useState } from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {useDispatch} from "react-redux";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
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
        <div className="Login form-signin w-100 m-100 " style={{width:"6em", marginLeft: "auto", marginRight: "auto"}}>
            <form onSubmit={handleSubmit(onSubmit)} className="Login container d-flex flex-column my-3 " style={{width: "25rem"}}>
                <div className="d-flex justify-content-center">
                    <h3 className="mb-3">Login</h3>
                </div>
                <div className="form-floating mb-3 ">
                    
                    <input className="form-control" placeholder="@email" style={{width:"100%"}} type="text" id="email" {...register("email", {required: true})}/>
                    <label className="form-label" htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" placeholder="password"  type="text" id="pwd" {...register("pwd", {required: true, minLength: 4}) }/>
                    <label className="form-label" htmlFor="pwd">Password</label>
                </div>
                <input type="submit" className="btn btn-primary mb-3" value={'Login'} style={{width: "100%"}}/>
                <div className="d-flex justify-content-center">
                    <Link to="/Register">Dont have an account yet?</Link>
                </div>
            </form>

        </div>
    );
}

export default Login;
