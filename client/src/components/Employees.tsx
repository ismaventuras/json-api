import { Button, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Employees(){
    return(
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h6'>Employees</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" component={RouterLink} to={"/employees/new"}>Create new</Button>
                </Grid>                
                <Grid item xs={12}>
                    Employee list
                </Grid>
            </Grid>
    )
}