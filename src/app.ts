import express from "express";
import handleError from "./middleware/error-handle.middleware";
import userRouter from "./routes/UserRouter";
import employeeRouter from "./routes/EmployeeRouter";
import CORS from "cors";
import morgan from "morgan";
import { CustomError } from "./models/CustomError";
const app = express();

// logging
//app.use(morgan("combined"))

// accept json
app.use(express.json());

//validate if json sent is valid, if not call error handler
const isValidJsonOnRequest = (error:any, req:any, res:any, next:any) => {
    if(error instanceof SyntaxError){
        next(new CustomError("Invalid JSON", 400));
    }
    else{
        next()
    }
}
app.use(isValidJsonOnRequest)

// enable CORS
let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(CORS(corsOptions));


// routes
app.get("/", (req, res) => { res.status(200).json({ "message": "Hello, World" }); });
app.use("/user", userRouter);
app.use("/employee", employeeRouter);
// use a custom error handler as last middleware so we can throw errors to next(new Error())
app.use(handleError);

export default app

