import "./addVacation.css";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { addVacation, currentVacations, fetchVacations, setVacations } from "../../../ReduxState/Slices/vacationSlice";
import { AppDispatch, RootState } from "../../../ReduxState/store";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { currentToken } from "../../../ReduxState/Slices/authSlice";

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
    const {register, handleSubmit, watch, setValue} = useForm<newVacation>();
    const navigate = useNavigate();
    const startDate = watch('startDateVacation');
    const endDate = watch('endDateVacation');
    const currentToken = useSelector((state:RootState)=> state.reducers.user.token);
    const onSubmit: SubmitHandler<newVacation> = async (data) => {
        console.log(data);
        
        const response = await axios({
            method: 'post',
            url: "http://localhost:3500/api/vacations/addVacation",
            headers: {"Content-Type": "multipart/form-data", "Authorization": "Bearer " + currentToken}, 
             // This is the body part
            data: data
          });
          dispatch(addVacation(response.data.vacation))
          navigate("/AdminVacations");
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayString = today.toISOString().split('T')[0];

    useEffect(() => {
        if (startDate) {
            const startDateObj = new Date(startDate);
            if (startDateObj < today) {
                setValue('startDateVacation', todayString);
            }
            if (endDate) {
                const endDateObj = new Date(endDate);
                if (endDateObj < startDateObj || endDateObj < today) {
                    setValue('endDateVacation', startDate);
                }
            }
        }
    }, [startDate, endDate]);
    return(
        <div className="addVacation justify-content-center" style={{width: "80%"}}>
			<form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="vacationDestination" className="form-label">Vacation Destination</label>
                    <input {...register("vacationDestination",{required: true, minLength: 3})} type="text" className="form-control" id="vacationDestination" placeholder="Jerusalem, Israel"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="startDateVacation" className="form-label">Vacation start Date</label>
                    <input  type="date" {...register("startDateVacation")} className="form-control" id="startDateVacation" />
                </div>
                <div className="mb-3">
                    <label htmlFor="endDateVacation" className="form-label">Vacation end Date</label>
                    <input  {...register("endDateVacation")} type="date" className="form-control" id="endDateVacation" />
                </div>
                <div className="mb-3">
                    <label htmlFor="vacationDescription" className="form-label">Vacation description</label>
                    <textarea {...register("vacationDescription",{required: true, minLength: 50})} className="form-control" id="vacationDescription" rows={3}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="vacationPrice" className="form-label">Vacation Price</label>
                    <input {...register("vacationPrice", {required: true})} type="number" className="form-control" id="vacationPrice"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Choose your image</label>
                    <input {...register("uploaded_image", {required: true, min: 0, max: 10000})} className="form-control" name="uploaded_image" type="file" id="formFile" />
                </div>
                <div className="mb-3 d-flex">
                    <input type="submit" className="btn btn-success"/>
                </div>
            </form>
        </div>
    );
}

export default AddVacation;
