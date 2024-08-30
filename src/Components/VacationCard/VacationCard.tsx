import "./VacationCard.css";
import { Vacation } from "../../Models/Vacation";
import { RootState } from "../../ReduxState/store";
import { useSelector } from "react-redux";
import { useState } from "react";

type VacationInfo = {
    vacation : Vacation;
}

function VacationCard(props: VacationInfo): JSX.Element {
    const user = useSelector((state: RootState)=> state.reducers.user.user)?.role;
    const userID = useSelector((state: RootState)=> state.reducers.user.user?.id);
    const vacationID = props.vacation._id;
    const [descrip, setDescrip] = useState(false);
    
    const onClick = ()=>{
        setDescrip(!descrip);
    }
    return (
        <div className="VacationCard card position-relative" style={{width: "18rem", height: "27rem", padding: "0"}} >
			<img className="card-img-top w-100" src={'http://localhost:3500/images/' + props.vacation.imageName} alt={`${props.vacation.vacationDestination}`} style={{height: "12rem"}}/><div className="position-absolute top-20 start-20"></div>
            <div className="card-body">
                <h5>{props.vacation.vacationDestination}</h5>
                <div  onClick={()=>onClick()}>
                    <p className={descrip? "descriptionParag card-text": "card-text"}>{descrip? props.vacation.vacationDescription: props.vacation.vacationDescription.slice(0,50) + "..."}</p>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Starts at: {props.vacation.startDateVacation}</li>
                <li className="list-group-item">Ends at: {props.vacation.endDateVacation}</li>
                <li className="list-group-item " style={{backgroundColor:"royalblue", color: "white"}}>Price: {props.vacation.vacationPrice}&#x24;</li>
            </ul>
        </div>
    );
}

export default VacationCard;
