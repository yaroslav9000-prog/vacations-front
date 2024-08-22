import { Route, Routes } from "react-router-dom";
import "./Main.css";
import Page404 from "../../Pages/Page404/Page404";
import GraphVacation from "../../Pages/GraphVacation/GraphVacation";
import AdminVacations from "../../Pages/AdminVacations/AdminVacations";
import Login from "../../Pages/Login/Login";
import Vacations from "../../Pages/Vacations/Vacations";
import Register from "../../Pages/Register/Register";
import Welcome from "../../Pages/Welcome/Welcome";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/vacations" element={<Vacations/>}/>
                <Route path="/AdminVacations" element={<AdminVacations/>}/>
                <Route path="/vacationStats" element={<GraphVacation/>}/>
                <Route path="/*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Main;
