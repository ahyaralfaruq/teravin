import React from "react";
import { Typography, Grid, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";

const DataDiri = ({ nextPersonal }) => {
   const { handleSubmit, register } = useForm();

   const navigate = useNavigate();

   const backToHome = () => {
      // 👇️ replace set to true
      navigate("/", { replace: true });
   };

   return (
      <div className="form-wrapper">
         <Typography variant="h6" align="center">
            Data diri
         </Typography>

         <form onSubmit={handleSubmit((data) => nextPersonal({ ...data }))}>
            <Grid container spacing={3}>
               <Grid item xs={12} sm={6}>
                  <TextField
                     {...register("nama")}
                     fullWidth
                     variant="outlined"
                     type="text"
                     label="Nama"
                     required
                     size="small"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     {...register("gender")}
                     fullWidth
                     variant="outlined"
                     type="text"
                     label="Gender"
                     required
                     size="small"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     {...register("placeOfBirth")}
                     fullWidth
                     variant="outlined"
                     type="text"
                     label="Tempat lahir"
                     required
                     size="small"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     {...register("dateOfBirth")}
                     fullWidth
                     variant="outlined"
                     type="text"
                     label="Tanggal lahir"
                     required
                     size="small"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     {...register("email")}
                     fullWidth
                     variant="outlined"
                     type="email"
                     label="Email"
                     required
                     size="small"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     {...register("nohp")}
                     fullWidth
                     variant="outlined"
                     type="tel"
                     label="No. Telp"
                     required
                     size="small"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     {...register("agama")}
                     fullWidth
                     variant="outlined"
                     type="text"
                     label="Agama"
                     required
                     size="small"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     {...register("race")}
                     fullWidth
                     variant="outlined"
                     type="text"
                     label="Kewarganegaraan"
                     required
                     size="small"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     {...register("norek")}
                     fullWidth
                     variant="outlined"
                     type="number"
                     label="No. Rek"
                     required
                     size="small"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     {...register("alamat")}
                     fullWidth
                     variant="outlined"
                     type="text"
                     label="Alamat"
                     required
                     size="small"
                  />
               </Grid>
            </Grid>
            <div style={{ textAlign: "right" }}>
               <Button variant="outlined" onClick={backToHome} size="small">
                  Back to Home
               </Button>
               <Button type="submit" variant="outlined" size="small">
                  Next
               </Button>
            </div>
         </form>
      </div>
   );
};

export default DataDiri;
