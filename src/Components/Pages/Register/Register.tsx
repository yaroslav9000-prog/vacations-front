import "./Register.css";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
function Register(): JSX.Element {
    interface FormInputs{
        firstName: string,
        lastName: string,
        email: string,
        pwd: string
    }
    
    const {register, handleSubmit} = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);
    
    return (
        <div className="Register">
            <form action="">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="type your first name" {...register("firstName", {required: true, minLength: 3})}/>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="type your second name" {...register("lastName", {required: true, minLength: 3})}/>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="type your email" {...register("email", {required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="type your password" {...register("pwd", {required: true, minLength: 4})}/>
                <input type="submit" value={"Register"}/>
            </form>
        </div>
    );
}

export default Register;
