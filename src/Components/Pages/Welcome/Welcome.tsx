import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import Button from "../../Button/Button";

function Welcome(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="Welcome">
            <h1>Welcome page Works</h1>
            <Button bootstrapStyle="btn btn-primary" navigationPath="/Login" textContent="Login"/>
            <Button bootstrapStyle="btn btn-danger" navigationPath="/Register" textContent="Register"/>
        </div>
    );
}

export default Welcome;
