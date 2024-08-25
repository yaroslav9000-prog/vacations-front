import { useSelector } from "react-redux";
import "./AdminVacations.css";
import { currentVacations } from "../../../ReduxState/Slices/vacationSlice";
import { Vacation } from "../../../Models/Vacation";
import { RootState } from "../../../ReduxState/store";

function AdminVacations(): JSX.Element {
    const vacations = useSelector((state:RootState)=> state.reducers.vacations);
    // const renderedVacation = vacations.value? vacations.value.map((item: Vacation)=>{
    //     <div>
    //         <h3>{item.startDateVacation}</h3>
    //         <h3>{item.endDateVacation}</h3>
    //         <h3>{item.vacationDescription}</h3>
    //         <h3>{item.vacationPrice}</h3>
    //     </div>
    // }): <p>No vacations to show</p>;
    return (
        <div className="AdminVacations">
			{/* {renderedVacation} */}
        </div>
    );
}

export default AdminVacations;
