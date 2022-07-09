import mongoose from "mongoose";
import assert from "assert";
import Employee from "../src/models/EmployeeModel";

mongoose.connect("mongodb://localhost:27017/development");


import data from "./employees.json";

Employee.collection.insertMany(data, (err, r) => {
    //console.log(err)
    //console.log(r)
    assert.equal(null,err);
    assert.equal(data.length, r?.insertedCount);;
    console.log("data created in mongodb")
    mongoose.connection.close();
})


