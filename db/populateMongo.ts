import mongoose from "mongoose";
import assert from "assert";
import Employee from "../src/models/EmployeeModel";
import data from "./employees.json";

//mongoose.connect("mongodb://localhost:27017/development");
// Employee.collection.insertMany(data, (err, r) => {
//     //console.log(err)
//     //console.log(r)
//     assert.equal(null,err);
//     assert.equal(data.length, r?.insertedCount);;
//     console.log("data created in mongodb")
//     mongoose.connection.close();
// });

export async function populateEmployees(data: any) {
    try{
        let insertedEmployees = await Employee.collection.insertMany(data);
        return insertedEmployees
    }
    catch(err){
        throw err
    }
}


