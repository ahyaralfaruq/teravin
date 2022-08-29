import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

import CustomInput from "../CustomInput";

import "./style.css";

const Keahlian = ({ next }) => {
   const { handleSubmit, register } = useForm();

   return (
      <div className="form-wrapper">
         <Typography variant="h6" align="center">
            Data diri
         </Typography>

         <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Grid container spacing={3}>
               <Grid item xs={12} sm={8}>
                  <TextField
                     {...register("keahlian")}
                     fullWidth
                     variant="outlined"
                     type="text"
                     label="Nama"
                     required
                     size="small"
                  />
               </Grid>
            </Grid>
            <div style={{ textAlign: "center" }}>
               <Button type="submit" variant="outlined">
                  Next
               </Button>
            </div>
         </form>
      </div>
   );
};

export default Keahlian;
