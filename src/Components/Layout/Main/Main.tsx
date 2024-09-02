import { Route, Routes, useNavigate } from "react-router-dom";
import "./Main.css";
import Page404 from "../../Pages/Page404/Page404";
import GraphVacation from "../../Pages/GraphVacation/GraphVacation";
import AdminVacations from "../../Pages/AdminVacations/AdminVacations";
import Login from "../../Pages/Login/Login";
import Vacations from "../../Pages/Vacations/Vacations";
import Register from "../../Pages/Register/Register";
import Welcome from "../../Pages/Welcome/Welcome";
import AddVacation from "../../Pages/addVacation/addVacation";
import EditVacations from "../../Pages/EditVacations/EditVacations";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../ReduxState/store";
import { logOut } from "../../../ReduxState/Slices/authSlice";
import { setVacations } from "../../../ReduxState/Slices/vacationSlice";
import { makeZeroFollows, setFollows } from "../../../ReduxState/Slices/followedVacations";



function Main(): JSX.Element {
    const currentRole = useSelector((state: RootState)=>state.reducers.user.role);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const logout = ()=>{
        dispatch(logOut());
        dispatch(setVacations({vacations: null}));
        dispatch(setFollows({allFollows: null, userFollows: null}));
        dispatch(makeZeroFollows())
        dispatch(setVacations({vacations: null}))
        navigate("/");
    }
    const userList = 
    <ul className="list-group list-group-flush">
    <li className="list-group-item btn" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" onClick={()=>logout()}>Log out</li>
    </ul>;
    const adminList = 
    <ul className="list-group list-group-flush">
    <li className="list-group-item btn" onClick={()=> navigate("/vacationStats")} data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false">Vacation Report</li>
    <li className="list-group-item btn" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" onClick={()=> navigate("/AddVacation")} >Add new Vacation</li>
    <li className="list-group-item btn" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false">Get Excel file</li>
    <li className="list-group-item btn" onClick={()=>logout()} data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false">Log out</li>
    </ul>    
    return (
        <div className="Main d-flex">
			<Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/vacations" element={<Vacations/>}/>
                <Route path="/AdminVacations" element={<AdminVacations/>}/>
                <Route path="/addVacation" element={<AddVacation/>}/>
                <Route path="/EditVacation/:id" element={<EditVacations/>}/>
                <Route path="/vacationStats" element={<GraphVacation/>}/>
                <Route path="/*" element={<Page404/>}/>
            </Routes>
            <div style={{minHeight: "120px"}}>
            <div className="collapse collapse-horizontal" id="collapseWidthExample">
                <div className="card card-body" style={{width: "200px"}}>
 
                        {currentRole == "admin"? adminList: userList}
                        
                        
                </div>
            </div>
            </div>
        </div>
    );
}

export default Main;
