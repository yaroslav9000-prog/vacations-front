import axios from "axios";
import "./DeleteButton.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../ReduxState/store";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteVacation } from "../../ReduxState/Slices/vacationSlice";
import { createFollowsObject, setFollows } from "../../ReduxState/Slices/followedVacations";
import { useEffect, useRef } from "react";

type VacationID = {
    vacationID: string
}

function DeleteButton({vacationID}: VacationID): JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const modalDismiss = useRef();
    const currentToken = useSelector((state: RootState)=> state.reducers.user.token);
    const allFollows = useSelector((state: RootState)=> state.reducers.follows.allFollows);
    const handleDelete = async () =>{
        console.log(vacationID);
        const response = await axios.delete(`http://localhost:3500/api/vacations/deleteVacation/${vacationID}`, {headers:{"Authorization": "Bearer " + currentToken}}); 
        dispatch(deleteVacation(vacationID));
        navigate("/AdminVacations")
    }
    const vacationToDelete = useSelector((state: RootState)=> state.reducers.vacations.value).find(item=> item._id === vacationID);
    
    
    return (
        <>
        <button type="button" className="DeleteButton btn btn-danger d-flex" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-x-fill" viewBox="0 0 16 16">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.854 7.146 8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708"/>
            </svg>
            <span className="">
            Delete
            </span>
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{vacationToDelete.vacationDestination}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        You Sure you want that deletion?🤔
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={()=>handleDelete()} ref={modalDismiss.current} data-bs-dismiss="modal" className="btn btn-danger">🗑️Delete it!!!</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteButton;
