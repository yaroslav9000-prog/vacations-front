import "./Register.css";

function Register(): JSX.Element {
    return (
        <div className="Register">
            <form action="">
                <label htmlFor="">First Name</label>
                <input type="text" />
                <label htmlFor="">Last Name</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="text" />
                <input type="submit" value={"Register"}/>
            </form>
        </div>
    );
}

export default Register;
