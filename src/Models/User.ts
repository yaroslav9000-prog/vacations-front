import mongoose from "mongoose";
export interface User{
     firstName: string;
     lastName: string;
     email: string;
     pwd: string;
     role: "user" | "admin";
     id?: string;

    
}