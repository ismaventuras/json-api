import { Schema, model } from 'mongoose'
import IEmployee from '../../types/IEmployee';

const employeeSchema = new Schema<IEmployee>({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });

const Employee = model<IEmployee>('Employee', employeeSchema);

export default Employee
