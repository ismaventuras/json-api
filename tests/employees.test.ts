import { expect } from "chai";
import { createEmployee, deleteEmployee, getEmployee, updateEmployee } from "../src/controllers/EmployeeController"
import mongoose from "mongoose";

// Open connection to DB
mongoose.connect("mongodb://localhost:27017/development")
mongoose.connection
    .once('open', () => { })
    .on('error', (error) => {
        console.log('Warning', error);
    })

describe("Test Employee collection on MongoDb", (async () => {
    beforeEach(done => {
        mongoose.connection.collections.employees.drop(() => {
            done();
        });
    });

    it("should create , get , update and delete an employee", async () => {
        let name = "ismael bautista";
        let newName = "fulano"
        let email = "ismael.bautista@example.local";

        let newEmployee = await createEmployee({ name, email });
        expect(newEmployee.name).to.equal(name);
        expect(newEmployee.email).to.equal(email);

        let foundEmployee = await getEmployee(newEmployee.id);
        expect(foundEmployee.name).to.equal(name);
        expect(foundEmployee.email).to.equal(email);

        let updatedEmployee = await updateEmployee(newEmployee.id, { name: newName });
        let foundEmployeeAfterUpdate = await getEmployee(updatedEmployee.id);
        expect(foundEmployeeAfterUpdate.name).to.equal(newName);
        expect(foundEmployeeAfterUpdate.email).to.equal(email);

        let deleted = await deleteEmployee(updatedEmployee.id);
        expect(deleted.name).to.equal(foundEmployeeAfterUpdate.name);
        expect(deleted.email).to.equal(foundEmployeeAfterUpdate.email);

        mongoose.connection.close()
    })
}))

