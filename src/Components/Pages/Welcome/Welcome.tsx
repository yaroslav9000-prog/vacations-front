import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import Button from "../../Button/Button";

function Welcome(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="Welcome">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"      className="bi bi-door-open mb-3" viewBox="0 0 16 16">
                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
                    </svg>    
                <h1 className="text-body-emphasis">Welcome</h1>
                <p className="col-lg-8 mx-auto fs-5 text-muted">
                Welcome to <strong>TripVisor</strong>, your ultimate gateway to unforgettable adventures! Whether you're dreaming of sun-soaked beaches, exploring vibrant cities, or seeking tranquil escapes, we’re here to help you plan the perfect getaway. Discover handpicked vacation spots, exclusive deals, and insider tips to make your journey truly extraordinary. Start your next adventure with us today and create memories that will last a lifetime!
                </p>
                
                <div className="d-inline-flex gap-2 mb-5">
                    <Button bootstrapStyle="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" navigationPath="/Login" textContent="Login"/>
                    <Button bootstrapStyle="btn btn-outline-success btn-lg px-4 rounded-pill" navigationPath="/Register" textContent="Register"/>
                </div>
        </div>
            
            
        </div>
    );
}

export default Welcome;
