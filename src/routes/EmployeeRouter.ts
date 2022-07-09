// File for Employee routes
// errors are thrown by the controllers and sent to the error handler by the route


import { NextFunction, Request, Response , Router} from 'express';
import IEmployee from '../../types/IEmployee';
import {createEmployee, getEmployee, deleteEmployee, updateEmployee, index} from "../controllers/EmployeeController";
import { CustomError } from '../models/CustomError';

let router = Router()


router.route("/")
    .post(async (req: Request, res: Response, next: NextFunction) => {
        try{
            let {name, email} = req.body;
            if(!name || name.length < 4 || name.length > 32) throw new CustomError("name is missing or less than 4 characters or more than 32 characters",400, req.body);
            if(!email) throw new CustomError("email is missing",400, req.body);            
            let saved = await createEmployee({name, email});            
            res.status(200).json(saved);
        }catch(err: any){
            next(err)
        }
    })
    .get(index)
    
router.route("/:id")
    .get(async (req: Request, res: Response, next: NextFunction) => {
        try{
            let id = req.params.id
            if(!id) throw new CustomError("missing id");
            let found = await getEmployee(id);
            res.status(200).json(found);
        }catch(e){            
            next(e)
        }        
    })
    .put(async (req: Request, res: Response, next: NextFunction) => {
        try{
            let id = req.params.id;
            let newData = req.body;
            if(!id) throw new CustomError("missing id");
            if(!newData.name && !newData.email) throw new CustomError("missing new name or email");
            let updated = await updateEmployee(id, newData);
            res.status(200).json(updated);
        }catch(e){
            next(e)
        }
    })
    .delete(async (req: Request, res: Response, next: NextFunction) => {
        try{
            let id = req.params.id;
            if(!id) throw new CustomError("missing id");
            let deleted = await deleteEmployee(id);
            res.status(200).json(deleted);
        }catch(e){
            next(e)
        }
    })

export default router
