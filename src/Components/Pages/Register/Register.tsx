import "./Register.css";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import _ from "lodash";
function Register(): JSX.Element {
    interface FormInputs{
        firstName: string,
        lastName: string,
        email: string,
        pwd: string
    }
    
    const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>({criteriaMode: "all"});
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data)
        navigate("/vacations")
    };
    
    

    return (
        <div className="Register container w-100 m-100">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-center">
                    <h1 className="h3 mb-3">Registration</h1>
                </div>
                <div className="form-floating mb-3">    
                    <input className="form-control" id="floatingFirstName" type="text" placeholder="type your first name" {...register("firstName", {required: true, minLength: {value: 3, message: "Try a longer name"}})}/>
                    <label htmlFor="floatingFirstname">First Name</label>
                    <ErrorMessage name="firstName"
                    errors={errors}
                    render={({ message }) => <p className="alert alert-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-exclamation-diamond" viewBox="0 0 16 16">
                    <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                  </svg>{message}</p>}/>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" id="floatingLastName" type="text" placeholder="type your last name" {...register("lastName", {required: true, minLength: {value: 3, message: "Try longer last name"}})}/>
                    <label htmlFor="floatingLastName">Last Name</label>
                    <ErrorMessage name="lastName"
                    errors={errors}
                    render={({ message }) => <p className="alert alert-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-3 bi bi-exclamation-diamond" viewBox="0 0 16 16">
                    <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                  </svg>{message}</p>}/>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" id="floatingEmail" type="text" placeholder="type your email" {...register("email", {required: true,minLength:{value: 5, message: "There is no such short emails"}, pattern: { value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "Your email is invalid"}})}/>
                    <label htmlFor="floatingEmail">Email</label>
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ messages }) => {
                        console.log("messages", messages);
                        return messages ? Object.entries(messages).map(([type, message]) => (<p className="alert alert-danger" key={type}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-3 bi bi-exclamation-diamond" viewBox="0 0 16 16">
                            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                          </svg>{message}</p>)): null;
}}/>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" id="floatingPwd" type="password" placeholder="type your password" {...register("pwd", {required: true, minLength: {value: 4, message:"your password is too short"}})}/>
                    <label htmlFor="floatingPwd">Password</label>
                    
                    <ErrorMessage
                        errors={errors}
                        name="pwd"
                        render={({ message }) => <p className="alert alert-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-3 bi bi-exclamation-diamond" viewBox="0 0 16 16">
                        <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                      </svg>{message}</p>}/>
                </div>
                <input className="btn btn-success w-100 mb-3" type="submit" value={"Register"}/>
                <div className="d-flex justify-content-center">
                    <Link to="/Login">Already have an account?</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;
