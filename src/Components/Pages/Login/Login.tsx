import { useState } from "react";
import "./Login.css";

function Login(): JSX.Element {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    
    return (
        <div className="Login">
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="">Password:</label>
                <input type="text" id="pwd" name="pwd" onChange={(e)=>setPwd(e.target.value)}/>
                <input type="submit" value={'Login'}/>
            </form>
        </div>
    );
}

export default Login;
