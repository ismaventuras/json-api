import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <Container sx={{ mt: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sx={{ mt: 4 }}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
