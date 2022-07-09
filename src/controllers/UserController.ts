import User from "../models/UserModel";
import { NextFunction, Request, Response } from 'express';
import { CustomError } from "../models/CustomError";

export const index = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ "endpoint": "/user" });
}
export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let id = req.params.id
    let foundUser = await User.findById(id).exec();
    if (foundUser) res.status(200).json(foundUser);
    else next(new CustomError("user not found", 404));
  }
  catch (error: any) {
    throw new CustomError(error.message);
  }
}
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let data = req.body;
    let newUser = new User(data);
    await newUser.save();
    res.status(200).json(newUser);
  }
  catch (error: any) {
    next(new CustomError(error.message, 400));
  }
}
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let id = req.params.id
    let removedUser = await User.findByIdAndRemove(id);
    if (removedUser) res.status(200).json(removedUser);
    else next(new CustomError("not found", 404));
  } catch (error: any) {
    next(new CustomError(error.message, 400));
  }
}
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let id = req.params.id;
    let newData = req.body;
    let foundUser = await User.findByIdAndUpdate(id, newData);
    if (foundUser) res.status(200).json(foundUser);
    else next(new CustomError("not found", 404));
  } catch (error: any) {
    next(new CustomError(error.message, 400));
  }
}
