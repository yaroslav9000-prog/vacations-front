import { ObjectId } from 'mongodb';
import mongoose, { Types } from 'mongoose';

export interface Vacation{
    vacationDestination : string;
    vacationDescription: string;
    startDateVacation: string;
    endDateVacation: string;
    vacationPrice: number;
    imageName: string;
    _id: mongoose.Types.ObjectId;

}