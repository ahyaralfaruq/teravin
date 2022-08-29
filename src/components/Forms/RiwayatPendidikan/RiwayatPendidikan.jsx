import React from "react";
import { Typography, Grid, Button, TextField } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { Add } from "@mui/icons-material";

import "./style.css";

const namaFieldArray = "riwayatPendidikan";

const DataPendidikan = ({ update, index, value, control, remove }) => {
   const { register, handleSubmit } = useForm({
      defaultValues: value,
   });

   return (
      <Grid item xs={12} sm={6} className="inputs-wrapper">
         <TextField
            {...register(`namaSekolah`, { required: true })}
            fullWidth
            variant="outlined"
            type="text"
            label="Nama sekolah"
            required
            size="small"
         />
         <TextField
            {...register(`jurusan`, { required: true })}
            fullWidth
            variant="outlined"
            type="text"
            label="Jurusan"
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
            {...register(`keterangan`)}
            fullWidth
            variant="outlined"
            type="text"
            label="Keterangan"
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

const RiwayatPendidikan = ({ nextPersonal, backStep }) => {
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
            Riwayat Pendidikan
         </Typography>

         <form onSubmit={handleSubmit((data) => nextPersonal({ ...data }))}>
            <Grid container spacing={3}>
               {fields.map((field, index) => (
                  <DataPendidikan
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
                           namaSekolah: "",
                           jurusan: "",
                           dari: "",
                           sampai: "",
                           keterangan: "",
                        });
                     }}
                  >
                     <div className="add-button-content">
                        <Add />
                        <Typography variant="subtitle2">
                           Add Riwayat Pendidikan
                        </Typography>
                     </div>
                  </div>
               </Grid>
            </Grid>
            <div style={{ textAlign: "right" }}>
               <Button variant="outlined" onClick={backStep} size="small">
                  Prev
               </Button>

               <Button type="submit" variant="outlined" size="small">
                  Next
               </Button>
            </div>
         </form>
      </div>
   );
};

export default RiwayatPendidikan;
