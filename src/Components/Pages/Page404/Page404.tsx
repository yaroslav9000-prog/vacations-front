import { useNavigate } from "react-router-dom";
import "./Page404.css";

function Page404(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="Page404">
			<div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold text-body-emphasis">404 Oops....</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Page not found</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={()=>navigate("/Vacations")}>Take me home</button>
      </div>
    </div>
  </div>
        </div>
    );
}

export default Page404;
