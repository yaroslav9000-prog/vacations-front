import { useNavigate } from "react-router-dom";
import "./Button.css";

type Props ={
    textContent: string,
    navigationPath: string,
    bootstrapStyle: string,
}

function Button(props: Props): JSX.Element {
    const navigate = useNavigate();
    return (
        <button className={"Button " + props.bootstrapStyle} onClick={()=>navigate(props.navigationPath)}>
            <h3>{props.textContent}</h3>
            
        </button>
    );
}

export default Button;
