import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react"

const createURI = "http://localhost:3000/employee"


interface IEmployeeFormError{
    nameError: string;
    emailError: string;
}

export default function NewEmployee(){
    const [employeeName, setEmployeeName] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [error,setError] = useState<IEmployeeFormError>({nameError:"", emailError:""});

    function clean(){
        setEmployeeName("");
        setEmployeeEmail("");
    }

    function validate(){
        let nameError = ""
        let emailError = ""

        if(!employeeName) nameError = "name cannot be blank";
        if(!employeeEmail) emailError = "email cannot be blank";
        
        if(nameError || emailError){
            setError({nameError,emailError})
            return false
        }
        return true;
    }
    
    const onChangeEmployeeName = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeName(e.target.value);
    const onChangeEmployeeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmployeeEmail(e.target.value);
    
    const sendNewEmployee = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault() // prevent reload
        let isValid = validate();
        if(isValid){
            try{
                let response = await fetch(createURI, {
                    method: "POST",  // *GET, POST, PUT, DELETE, etc.
                    mode: "cors", // no-cors, *cors, same-origin
                    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({name:employeeName, email:employeeEmail})
                });
                let data = await response.json();
                console.log(data)
                if(!data.status) clean();
            }catch(error:any){
                console.log(error);
            }
        }

        
    }

    return(
            <Box component={"form"} onSubmit={sendNewEmployee}>
                <Typography variant="h6">new employee</Typography>
                <Box sx={{display:"flex", flexDirection:"column", maxWidth:"25%", gap:1}}>
                    <TextField 
                        error={Boolean(error?.nameError)}
                        variant='filled' size="small" label="name" 
                        value={employeeName} onChange={onChangeEmployeeName} 
                        required
                        type={"text"}
                        />
                    <TextField 
                        variant='filled' size="small" label="email" 
                        value={employeeEmail} onChange={onChangeEmployeeEmail} 
                        required
                        type={"email"}
                        />
                    <Button type="submit">Send</Button>
                </Box>
            </Box>
    )
}