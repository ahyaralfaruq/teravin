import React from "react";
import { Typography, Grid, Button, TextField } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { Add } from "@mui/icons-material";

import "./style.css";

const namaFieldArray = "pengalamanKerja";

const DataPengalaman = ({ update, index, value, control, remove }) => {
   const { register, handleSubmit } = useForm({
      defaultValues: value,
   });

   return (
      <Grid item xs={12} sm={6} className="inputs-wrapper">
         <TextField
            {...register(`namaPerusahaan`, { required: true })}
            fullWidth
            variant="outlined"
            type="text"
            label="Nama perusahaan"
            required
            size="small"
         />
         <TextField
            {...register(`jenisIndustri`, { required: true })}
            fullWidth
            variant="outlined"
            type="text"
            label="Jenis Industri"
            required
            size="small"
         />
         <TextField
            {...register(`dari`, { required: true })}
            fullWidth
            variant="outlined"
            type="text"
            label="Dari"
            required
            size="small"
         />
         <TextField
            {...register(`sampai`, { required: true })}
            fullWidth
            variant="outlined"
            type="text"
            label="Sampai"
            required
            size="small"
         />
         <TextField
            {...register(`alasan`)}
            fullWidth
            variant="outlined"
            type="text"
            label="Alasan berhenti"
            required
            size="small"
         />
         <div className="button-wrapper">
            <Button
               variant="contained"
               color="error"
               onClick={() => remove(index)}
            >
               Remove
            </Button>
            <Button
               variant="contained"
               color="primary"
               onClick={handleSubmit((data) => {
                  update(index, data);
               })}
            >
               oke
            </Button>
         </div>
      </Grid>
   );
};

const PengalamanKerja = ({ nextPersonal, backStep }) => {
   const { handleSubmit, control } = useForm();
   const { fields, append, update, remove } = useFieldArray({
      control,
      name: namaFieldArray,
      defaultValues: {
         [namaFieldArray]: [],
      },
   });

   return (
      <div className="form-wrapper">
         <Typography variant="h6" align="center">
            Pengalaman Kerja
         </Typography>

         <form onSubmit={handleSubmit((data) => nextPersonal({ ...data }))}>
            <Grid container spacing={3}>
               {fields.map((field, index) => (
                  <DataPengalaman
                     key={field.id}
                     update={update}
                     index={index}
                     value={field}
                     remove={remove}
                  />
               ))}

               <Grid item xs={12} sm={6}>
                  <div
                     className="add-button"
                     onClick={() => {
                        append({
                           namaPerusahaan: "",
                           jenisIndustri: "",
                           dari: "",
                           sampai: "",
                           alasan: "",
                        });
                     }}
                  >
                     <div className="add-button-content">
                        <Add />
                        <Typography variant="subtitle2">
                           Add Pengalaman Kerja
                        </Typography>
                     </div>
                  </div>
               </Grid>
            </Grid>
            <div style={{ textAlign: "rigth" }}>
               <Button variant="outlined" onClick={backStep} size="small">
                  Back
               </Button>

               <Button type="submit" variant="outlined" size="small">
                  Next
               </Button>
            </div>
         </form>
      </div>
   );
};

export default PengalamanKerja;
