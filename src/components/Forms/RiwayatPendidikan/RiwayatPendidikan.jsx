import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

import CustomInput from "../CustomInput";

import "./style.css";

const RiwayatPendidikan = ({ next }) => {
   const { handleSubmit, register } = useForm();

   return (
      <div className="form-wrapper">
         <Typography variant="h6" align="center">
            Data diri
         </Typography>

         <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Grid container spacing={3}>
               {/* <CustomInput type="text" name="nama" label="Nama" required />
               <CustomInput type="email" name="email" label="Email" required />
               <CustomInput
                  type="text"
                  name="placeOfBirth"
                  label="Tempat lahir"
                  required
               />
               <CustomInput
                  type="text"
                  name="dateOfBirth"
                  label="Tanggal lahir"
                  required
               />
               <CustomInput type="number" name="norek" label="Norek" required />
               <CustomInput
                  type="tel"
                  name="nohp"
                  label="Nomor Telepon"
                  required
               />
               <CustomInput type="text" name="gender" label="Gender" required />
               <CustomInput type="text" name="agama" label="Agama" required />
               <CustomInput type="text" name="alamat" label="Alamat" required />
               <CustomInput
                  type="text"
                  name="race"
                  label="Kewarganegaraan"
                  required
               /> */}
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

export default RiwayatPendidikan;
