import { useSelector } from "react-redux";
import "./Header.css";
import { RootState } from "../../../ReduxState/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header(): JSX.Element {
    const role = useSelector((state: RootState)=> state.reducers.user.role);
    const navigate = useNavigate();
    const currentName = useSelector((state: RootState)=> state.reducers.user.user?.firstName);
    const [name, setName] = useState<string>();
    const bringUserHome = ()=>{
        if(role == "admin"){
            navigate("/AdminVacations");
        }else if(role == "user"){
            navigate("vacations");
        }else{
            navigate("Login");
        }
    }
    const currentToken = useSelector((state: RootState)=> state.reducers.user.token);
    const myMenu =<p style={{marginTop: "1rem", marginBottom: "0"}}>
    <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>
    </button>
    </p>;
    useEffect(()=>{
        setName(currentName);
    }, [role])
    return (
        <div className="Header container d-flex  border-bottom p-3 mb-4" style={{height: "6rem"}}>
			<div className="col d-flex mt-3 justify-content-between">
                <div className="d-flex">
                    <img  data-bs-target="#collapseWidthExample" aria-expanded="false" onClick={()=>bringUserHome()} src="baggage.svg" style={{width:"3 rem", height: "3rem"}} alt="" />
                    <h1 className="pe-3">Take a trip</h1>
                    <h6 className="pt-4">the rest is on us</h6>
                </div>
                <div className="mt-3 me-4" style={{bottom:"0"}}>
                    <h4>{currentName?"Hello "+ currentName: ""}</h4>
                </div>
            </div>
            {currentToken? myMenu: ""}
            
        </div>
    );
}

export default Header;
