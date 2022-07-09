import { AppBar, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Header(){

    return(
        <Box>
            <AppBar position="static">
                <Toolbar variant='dense'>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant={"h6" } component={RouterLink} to={"/"} sx={{flexGrow:1, textDecoration:"none"}} color="inherit">Inventory</Typography>
                        <Button component={RouterLink} to={"/employees"} color="inherit">Employees</Button>
                        <Button color="inherit">Computers</Button>
                        <Button color="inherit">Assets</Button>
                        <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}