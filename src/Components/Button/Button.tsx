import { useNavigate } from "react-router-dom";
import "./Button.css";

type Props ={
    textContent: string,
    navigationPath: string
}

function Button(props: Props): JSX.Element {
    const navigate = useNavigate();
    return (
        <button className="Button" onClick={()=>navigate(props.navigationPath)}>
            <h3>{props.textContent}</h3>
        </button>
    );
}

export default Button;
