import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header container d-flex justify-content-start">
			<div className="col d-flex mt-3">
                <img src="baggage.svg" style={{width:"3 rem", height: "3rem"}} alt="" />
                <h1 className="pe-3">Take a trip</h1>
                <h6 className="pt-4">the rest is on us</h6>
            </div>
            
        </div>
    );
}

export default Header;
