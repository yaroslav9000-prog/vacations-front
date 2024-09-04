import { useDispatch, useSelector } from "react-redux";
import "./Vacations.css";
import { AppDispatch, RootState}  from "../../../ReduxState/store";
import { Vacation } from "../../../Models/Vacation";
import VacationCard from "../../VacationCard/VacationCard";
import { useEffect, useState } from "react";
import { fetchVacations, setNotStarted, setStarted, setVacations } from "../../../ReduxState/Slices/vacationSlice";
import { createFollowsObject, setFollows } from "../../../ReduxState/Slices/followedVacations";
import axios, { AxiosResponse } from "axios";
// import { currentVacations } from "../../../ReduxState/Slices/vacationSlice";

function Vacations(): JSX.Element {
    const vacations = useSelector((state:RootState)=> state.reducers.vacations.value);
    const started = useSelector((state: RootState)=> state.reducers.vacations.started);
    const notStarted = useSelector((state: RootState)=> state.reducers.vacations.notStarted);
    const followed = useSelector((state: RootState)=> state.reducers.follows.followed);
    let followedVacations: Vacation[] =[];

    for(let index = 0; index < vacations.length; index++){
        let currentVacation = vacations[index];
        for(let i=0; i < followed.length; i++){
            if(followed[i].vacationID == currentVacation._id){
                followedVacations.push(currentVacation)
            }
        }
    }

    const arrayOfChoice = [vacations, followedVacations, notStarted, started];
    const [render, setRender] =useState<number>(0)
    const setArray = (value: number)=>{
        setRender(value);
    }

    const userID = useSelector((state:RootState)=> state.reducers.user.user?.id);
    const dispatch = useDispatch<AppDispatch>();
    const ITEMS_PER_PAGE = 10;
    const totalPages = Math.ceil(arrayOfChoice[render].length / 10);
    const [currentPage, setCurrentPage] = useState(1);

    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = currentPage * ITEMS_PER_PAGE - 1;
    const currentToken = useSelector((state:RootState)=> state.reducers.user.token);
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
        return (await axios.get("http://localhost:3500/api/follows/" + userID, {headers:{"Authorization":"Bearer "+ currentToken}})).data;
    }
    
    useEffect(()=>{
        // dispatch(fetchVacations());
        axios.get("http://localhost:3500/api/vacations/", {headers: {"Authorization":"Bearer " + currentToken}}).then(response=> response.data).then(data=> dispatch(setVacations(data.vacations)));
        
        const followsResponse = getFollows();
        followsResponse.then(response=> {
            dispatch(setFollows(response));
            axios.get("http://localhost:3500/api/vacations/vacationReport",{headers:{"Authorization": "Bearer " + currentToken}}).then(response=> response.data).then(data=> dispatch(createFollowsObject(data)))
            
        })
        axios.get("http://localhost:3500/api/vacations/started", {headers: {"Authorization": "Bearer " + currentToken}}).then(response=>response.data).then(data=> dispatch(setStarted(data["result"])));
        


        axios.get("http://localhost:3500/api/vacations/notStarted", {headers: {"Authorization": "Bearer " + currentToken}}).then(response=>response.data).then(data=> dispatch(setNotStarted(data["result"])))
    },[])
    const renderedVacations = 
    arrayOfChoice[render].length == 0?<p>No vacations to show</p>:arrayOfChoice[render].slice(startIndex, endIndex).map((item: Vacation)=>(<VacationCard vacation={item} />))
    return (
        <div className="Vacations container justify-content-center">
			<div className="d-flex">
                <div className="form-check me-3">
                    <input className="form-check-input" onChange={()=>setArray(0)} type="radio" name="flexRadioDefault" checked={render==0} id="flexRadioDefault1"/>
                    <label className="form-check-label"htmlFor="flexRadioDefault1">
                        vacations
                    </label>
                </div>
                <div className="form-check me-3">
                    <input className="form-check-input" onChange={()=>setArray(1)} type="radio" name="flexRadioDefault" checked={render==1} id="flexRadioDefault1"/>
                    <label className="form-check-label"htmlFor="flexRadioDefault1">
                        followed
                    </label>
                </div>
                <div className="form-check me-3">
                    <input className="form-check-input"  type="radio" onChange={()=>setArray(2)} checked={render==2} name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        not started
                    </label>
                </div>
                <div className="form-check me-3">
                    <input className="form-check-input" checked={render==3} type="radio" onChange={()=>setArray(3)} name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        in progress
                    </label>
                </div>
            </div>
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


