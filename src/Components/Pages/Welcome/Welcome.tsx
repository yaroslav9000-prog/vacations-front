import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import Button from "../../Button/Button";

function Welcome(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="Welcome">
            <h1>Welcome page Works</h1>
            <Button navigationPath="/Login" textContent="Login"/>
            <Button navigationPath="/Register" textContent="Register"/>
        </div>
    );
}

export default Welcome;
