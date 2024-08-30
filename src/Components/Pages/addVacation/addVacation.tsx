import "./addVacation.css";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { addVacation, currentVacations, fetchVacations, setVacations } from "../../../ReduxState/Slices/vacationSlice";
import { AppDispatch } from "../../../ReduxState/store";
import { format } from "date-fns";
import { useState } from "react";

type newVacation = {
    vacationDestination: string,
    vacationDescription: string,
    endDateVacation: string,
    startDateVacation: string,
    vacationPrice: number,
    uploaded_image: File 
}

function AddVacation(): JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const [startDate, setStartDate] = useState<Date>();
    const {register, handleSubmit} = useForm<newVacation>();
    const handleDate = (value: any)=>{
        setStartDate(value)
    }
    const onSubmit: SubmitHandler<newVacation> = async (data) => {
        console.log(data);
        
        const response = await axios({
            method: 'post',
            url: "http://localhost:3500/api/vacations/addVacation",
            headers: {"Content-Type": "multipart/form-data"}, 
             // This is the body part
            data: data
          });
          dispatch(addVacation(response.data.vacation))
    }
    const dateObj = new Date();
    const currentDate = `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDay()}`
    return(
        <div className="addVacation">
			<form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="vacationDestination" className="form-label">Vacation Destination</label>
                    <input {...register("vacationDestination",{required: true, minLength: 3})} type="text" className="form-control" id="vacationDestination" placeholder="Jerusalem, Israel"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="startDateVacation" className="form-label">Vacation start Date</label>
                    <input min={currentDate} type="date" {...register("startDateVacation")} className="form-control" id="startDateVacation" />
                </div>
                <div className="mb-3">
                    <label htmlFor="endDateVacation" className="form-label">Vacation end Date</label>
                    <input min={currentDate} {...register("endDateVacation")} type="date" className="form-control" id="endDateVacation" />
                </div>
                <div className="mb-3">
                    <label htmlFor="vacationDescription" className="form-label">Vacation description</label>
                    <textarea {...register("vacationDescription",{required: true, minLength: 50})} className="form-control" id="vacationDescription" rows={3}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="vacationPrice" className="form-label">Vacation Price</label>
                    <input {...register("vacationPrice")} type="number" className="form-control" id="vacationPrice"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Choose your image</label>
                    <input {...register("uploaded_image")} className="form-control" name="uploaded_image" type="file" id="formFile" />
                </div>
                <div className="mb-3 d-flex">
                    <input type="submit" className="btn btn-success"/>
                </div>
            </form>
        </div>
    );
}

export default AddVacation;
