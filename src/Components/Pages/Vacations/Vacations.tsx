import { useDispatch, useSelector } from "react-redux";
import "./Vacations.css";
import { AppDispatch, RootState}  from "../../../ReduxState/store";
import { Vacation } from "../../../Models/Vacation";
import VacationCard from "../../VacationCard/VacationCard";
import { useEffect, useState } from "react";
import { fetchVacations } from "../../../ReduxState/Slices/vacationSlice";
import { createFollowsObject, setFollows } from "../../../ReduxState/Slices/followedVacations";
import axios, { AxiosResponse } from "axios";
// import { currentVacations } from "../../../ReduxState/Slices/vacationSlice";

function Vacations(): JSX.Element {
    const vacations = useSelector((state:RootState)=> state.reducers.vacations.value);
    const userID = useSelector((state:RootState)=> state.reducers.user.user?.id);
    const dispatch = useDispatch<AppDispatch>();
    const ITEMS_PER_PAGE = 10;
    const totalPages = Math.ceil(vacations.length / 10);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = currentPage * ITEMS_PER_PAGE - 1;

    const configNumArray = ()=>{
        //if i have total of three 
        let myArray;
        if(totalPages>= 3){
            myArray = new Array(totalPages);
            for(let i = 0; i < totalPages; i++){
                myArray[i] = i + 1
            }
            return myArray;
        }else{
            myArray = new Array(totalPages);
            for(let i = 0; i< totalPages; i++){
                myArray[i] = i + 1;
            }
            return myArray;
        }

        
    }
    const returnArrayOfThree =()=>{
        const myArray = configNumArray();

        return [myArray[currentPage - 2]?myArray[currentPage - 2]: "", myArray[currentPage -1], myArray[currentPage]? myArray[currentPage]: ""];
    }

    const changePage= (value: number)=>{
        setCurrentPage(value);
    }
    const previousPage =()=>{
        if(currentPage === 1) return;
        setCurrentPage(currentPage - 1)
    }
    const nextPage =()=>{
        if(currentPage === totalPages) return;
        setCurrentPage(currentPage + 1);
    }
    const getFollows = async()=>{
        return (await axios.get("http://localhost:3500/api/follows/" + userID)).data;
    }
    const renderedVacations = 
    vacations.length == 0?<p>No vacations to show</p>:vacations.slice(startIndex, endIndex).map((item: Vacation)=>(<VacationCard vacation={item} />))
    useEffect(()=>{
        dispatch(fetchVacations());
        const followsResponse = getFollows();
        followsResponse.then(response=> {
            dispatch(setFollows(response));
            dispatch(createFollowsObject(response));
        })
        // dispatch(setFollows(followsResponse.data));
        // dispatch(createFollowsObject(followsResponse.data))
    },[])
    return (
        <div className="Vacations container justify-content-center">
			<div className="row row-cols-auto px-4" >
            {renderedVacations}
            </div>
            <nav className="d-flex justify-content-center my-4 text-center">
                <ul className="pagination">
                    <li className="page-item" style={{width:"2rem"}} onClick={()=>previousPage()}><a className="page-link">&laquo;</a></li>
                    {
                        returnArrayOfThree().map((item: any)=>{
                            if(typeof item === "number"){
                                return<li className="page-item" onClick={()=>{changePage(item)}}><a className="page-link">{item}</a></li>;}})
                    }
                    <li className="page-item" style={{width: "2rem"}} onClick={()=>nextPage()}><a className="page-link">&raquo;</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Vacations;


