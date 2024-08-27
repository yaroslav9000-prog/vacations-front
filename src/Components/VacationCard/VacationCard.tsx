import "./VacationCard.css";
import { Vacation } from "../../Models/Vacation";
import { RootState } from "../../ReduxState/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { currentImagesPath } from "../../ReduxState/Slices/vacationSlice";

type VacationInfo = {
    vacation : Vacation;
}

function VacationCard(props: VacationInfo): JSX.Element {
    const user = useSelector((state: RootState)=> state.reducers.user.user)?.role;
    const [descrip, setDescrip] = useState(false);
    const imagePath = useSelector(currentImagesPath);
    const onClick = ()=>{
        setDescrip(!descrip);
    }
    return (
        <div className="VacationCard card " style={{width: "18rem", height: "24rem"}}>
			<img src={imagePath + props.vacation.imageName} alt="card-image-top" />
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
