import { useNavigate, useParams } from "react-router-dom";
import "./EditVacations.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../ReduxState/store";
import { Vacation } from "../../../Models/Vacation";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { editVacation } from "../../../ReduxState/Slices/vacationSlice";
// import { editVacation } from "../../../ReduxState/Slices/vacationSlice";

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
    const {register, handleSubmit, watch, setValue, formState: {errors}} = useForm<editedVacation>();
    const allVacations = useSelector((state: RootState)=> state.reducers.vacations.value);
    const currentVacation: Vacation = allVacations.find((item: Vacation)=> item._id === id);
    const inputRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const currentToken = useSelector((state: RootState)=> state.reducers.user.token);
    
    const startDate = watch('startDateVacation');
    const endDate = watch('endDateVacation');
    const onSubmit: SubmitHandler<editedVacation> = async (data, event) => {
        console.log(data);
        // event?.preventDefault()
        const response = await axios({
            method: 'post',
            url: "http://localhost:3500/api/vacations/editVacation/" + currentVacation._id,
            headers: {"Content-Type": "multipart/form-data", "Authorization": "Bearer "+ currentToken}, 
             // This is the body part
            data: data
          });
        //   dispatch(addVacation(response.data.vacation))
        if(response.status> 199 && response.status < 400){
            console.log(response.data);
            dispatch(editVacation({id: id, updatedVacation: response.data.updatedVacation}));
            navigate("/AdminVacations");
        }
        
    }
    useEffect(() => {
        setValue('startDateVacation', currentVacation.startDateVacation);
        setValue('endDateVacation', currentVacation.endDateVacation);
    }, [currentVacation, setValue]);

    useEffect(() => {
        if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
            setValue('endDateVacation', startDate);
        }
    }, [startDate, endDate, setValue]);
    return (
        <div className="EditVacations">
			<form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="vacationDestination" className="form-label">Vacation Destination</label>
                <input type="text" className="form-control" defaultValue={currentVacation.vacationDestination} id="vacationDestination" {...register("vacationDestination", {required: true})}/>
            </div>
            <div className="mb-3 d-flex ">
                <div className="me-3">
                    <label htmlFor="startDateVacation" className="form-label">Start Date</label>
                    <input type="date"  defaultValue={currentVacation.startDateVacation} className="form-control" id="startDateVacation" {...register("startDateVacation", {required: true})}/>
                </div>
                <div>
                    <label htmlFor="endDateVacation" className="form-label">End Date</label>
                    <input min={startDate}  type="date" defaultValue={currentVacation.endDateVacation} className="form-control" id="endDateVacation" {...register("endDateVacation", {required: true, validate: value => 
              !startDate || new Date(value) >= new Date(startDate) || 'End date must be after start date'})}/>
                    
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="vacationDescription" className="form-label">Vacation Description</label>
                <textarea rows={5} className="form-control" defaultValue={currentVacation.vacationDescription} id="vacationDescription" {...register("vacationDescription", {required: true})}/>         
            </div>
            <div className="mb-3">
                <label htmlFor="vacationPrice" className="form-label">Price</label>
                <input type="number" defaultValue={currentVacation.vacationPrice} className="form-control" id="vacationPrice" {...register("vacationPrice", {required: true, min: 0, max: 10000})}/>
            </div>
            <div>
                <label htmlFor="_imageName" className="form-label">Current Image</label>
                <input style={{width:"40rem"}} type="file" className="form-control" id="_imageName" {...register("uploaded_image")}/>
                <img style={{width: "35rem", height: "20rem"}} src={"http://localhost:3500/images/" + currentVacation.imageName} alt="" className="mb-3"/>
            </div>
            <input type="submit" className="btn btn-primary mb-5" value={"edit"}/>
            </form>
        </div>
    );
}

export default EditVacations;
