import Employee from "../models/EmployeeModel";
import { NextFunction, Request, Response } from 'express';
import { CustomError } from "../models/CustomError";
import IEmployee from "../../types/IEmployee";
import mongoose from "mongoose";

export const index = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ "endpoint": "/employee" });
}

export const getEmployee = async (id: string) => {
  try {
    let foundEmployee = await Employee.findById(id);
    if (foundEmployee) return foundEmployee;
    else throw new CustomError("user not found", 404);
  }
  catch (error: any) {
    if(error instanceof mongoose.Error.CastError){
      throw new CustomError("Invalid ID format", 400);
    }
    throw error
  }
}


export const createEmployee = async ( employeeData: IEmployee ) => {
  try{
    let employee = new Employee(employeeData);
    let saved = await employee.save()    
    return saved
  }catch(err:any){
    if(err.code == 11000){
      throw new CustomError("Already registered user",400);
    }
    throw err
  }  
}

export const deleteEmployee = async (id: string) => {
  try {    
    let removedEmployee = await Employee.findByIdAndRemove(id);
    if (removedEmployee) return removedEmployee;
    else throw new CustomError("not found", 404)
  } catch (error: any) {
    if(error instanceof mongoose.Error.CastError){
      throw new CustomError("Invalid ID format", 400);
    }
    throw error;
  }
}

export const updateEmployee = async (id: string, data: any) => {
  try {    
    let newData = data;
    let updatedEmployee = await Employee.findByIdAndUpdate(id, newData);
    if (updatedEmployee) return updatedEmployee;
    else throw new CustomError("not found", 404);
  } catch (error: any) {
    throw error
  }
}


export const getAllEmployee = async () => {
  try{
    let allEmployees = await Employee.find({});
    return allEmployees
  }catch(error:any){
    throw error
  }
}