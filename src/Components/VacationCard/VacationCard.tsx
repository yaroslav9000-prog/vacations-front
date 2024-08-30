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
    const [descrip, setDescrip] = useState(false);
    
    const onClick = ()=>{
        setDescrip(!descrip);
    }
    return (
        <div className="VacationCard card " style={{width: "18rem", height: "24rem"}} >
			<img src={'http://localhost:3500/images/' + props.vacation.imageName} alt={`${props.vacation.vacationDestination}`} />
            <div className="card-body">
                <h5>{props.vacation.vacationDestination}</h5>
                <div  onClick={()=>onClick()}>
                    <p className={descrip? "descriptionParag": ""}>{descrip? props.vacation.vacationDescription: props.vacation.vacationDescription.slice(0,50) + "..."}</p>
                </div>
            </div>
        </div>
    );
}

export default VacationCard;
