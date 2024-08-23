import "./VacationCard.css";
import { Vacation } from "../../Models/Vacation";

type Props={
    vacationInfo: Vacation,
    userRole: "user"| "admin";
}

function VacationCard(props: Vacation): JSX.Element {
    return (
        <div className="VacationCard">
			
        </div>
    );
}

export default VacationCard;
