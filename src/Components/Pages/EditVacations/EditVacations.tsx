import { useParams } from "react-router-dom";
import "./EditVacations.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../ReduxState/store";
import { Vacation } from "../../../Models/Vacation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

type editedVacation = {
    vacationDestination: string,
    vacationDescription: string,
    endDateVacation: string,
    startDateVacation: string,
    vacationPrice: number,
    uploaded_image: File 
}


function EditVacations(): JSX.Element {
    const {id} = useParams();
    const {register, handleSubmit} = useForm<editedVacation>();
    const allVacations = useSelector((state: RootState)=> state.reducers.vacations.value);
    const currentVacation: Vacation = allVacations.find((item: Vacation)=> item._id === id);
    
    const onSubmit: SubmitHandler<editedVacation> = async (data) => {
        console.log(data);
        
        const response = await axios({
            method: 'post',
            url: "http://localhost:3500/api/vacations/editVacation/" + currentVacation._id,
            headers: {"Content-Type": "multipart/form-data"}, 
             // This is the body part
            data: data
          });
        //   dispatch(addVacation(response.data.vacation))
    }
    return (
        <div className="EditVacations">
			<form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="vacationDestination" className="form-label">Vacation Destination</label>
                <input type="text" className="form-control" defaultValue={currentVacation.vacationDestination} id="vacationDestination" {...register("vacationDestination")}/>
            </div>
            <div className="mb-3 d-flex ">
                <div className="me-3">
                    <label htmlFor="startDateVacation" className="form-label">Start Date</label>
                    <input type="date" defaultValue={currentVacation.startDateVacation} className="form-control" id="startDateVacation" {...register("startDateVacation")}/>
                </div>
                <div>
                    <label htmlFor="endDateVacation" className="form-label">End Date</label>
                    <input type="date" defaultValue={currentVacation.endDateVacation} className="form-control" id="endDateVacation" {...register("endDateVacation")}/>
                    
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="vacationDescription" className="form-label">Vacation Description</label>
                <textarea rows={5} className="form-control" defaultValue={currentVacation.vacationDescription} id="vacationDescription" {...register("vacationDescription")}/>         
            </div>
            <div className="mb-3">
                <label htmlFor="vacationPrice" className="form-label">Price</label>
                <input type="number" defaultValue={currentVacation.vacationPrice} className="form-control" id="vacationPrice" {...register("vacationPrice")}/>
            </div>
            <div>
                <label htmlFor="_imageName" className="form-label">Current Image</label>
                <input type="file" className="form-control" id="_imageName" {...register("uploaded_image")}/>
                <img src={"http://localhost:3500/images/" + currentVacation.imageName} alt="" className="mb-3"/>
            </div>
            <input type="submit" className="btn btn-primary mb-5" value={"edit"}/>
            </form>
        </div>
    );
}

export default EditVacations;
