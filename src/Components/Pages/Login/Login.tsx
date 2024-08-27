import { useEffect, useState } from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {useDispatch} from "react-redux";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { currentVacations, fetchVacations, setVacations } from "../../../ReduxState/Slices/vacationSlice";
import { AppDispatch, RootState } from "../../../ReduxState/store";
import { currentUser, login, setCredentials } from "../../../ReduxState/Slices/authSlice";
// import { login } from "../../../ReduxState/Slices/authSlice";
import {Bounce, ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
interface FormInputs{
    email: string,
    pwd: string
}
const AUTH_URL = "http://localhost:3500/api/login/";

function Login(): JSX.Element {
    const {register, handleSubmit} = useForm<FormInputs>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const vacations = useSelector((state: RootState)=> state.reducers.vacations);
    const user = useSelector((state: RootState)=> state.reducers.user);
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const notify = () => toast("wow so easy")
        dispatch(login(data));
        if(user){
            dispatch(fetchVacations());
            console.log(vacations);
            navigate("/vacations");
        }
    };
    
    return (
        <div className="Login form-signin w-100 m-100 " style={{width:"6em", marginLeft: "auto", marginRight: "auto"}}>
            <ToastContainer/>
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
