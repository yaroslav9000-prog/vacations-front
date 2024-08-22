import { ObjectId } from 'mongodb';
import mongoose, { Types } from 'mongoose';

export class Vacation{
    vacationDestination : string;
    vacationDescription: string;
    vacationStartDate: string;
    vacationEndDate: string;
    vacationPrice: number;
    imgName: string;
    _id: mongoose.Types.ObjectId;
    constructor(vacationDestination: string, vacationDescription: string, vacationStartDate: string, vacationEndDate: string, vacationPrice: number, imgName: string){
        this.vacationDestination = vacationDestination;
        this.vacationDescription = vacationDescription;
        this.vacationStartDate = vacationStartDate;
        this.vacationEndDate = vacationEndDate;
        this.vacationPrice = vacationPrice;
        this.imgName = imgName;
        this._id = new mongoose.Types.ObjectId;
    }

}