import React from "react";
import { Typography, Grid, Button, TextField } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { Delete, Add } from "@mui/icons-material";

import "./style.css";

const namaFieldArray = "pengalamanKerja";

const DataPendidikan = ({ update, index, value, control, remove }) => {
   const { register, handleSubmit } = useForm({
      defaultValues: value,
   });

   return (
      <>
         <Grid item xs={12} sm={6}>
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
            <Button
               variant="contained"
               color="error"
               endIcon={<Delete />}
               onClick={() => remove(index)}
            />
            <Button
               variant="contained"
               color="primary"
               onClick={handleSubmit((data) => {
                  update(index, data);
               })}
            >
               oke
            </Button>
         </Grid>
      </>
   );
};

const RiwayatPendidikan = ({ next }) => {
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

         <form onSubmit={handleSubmit((data) => console.log(data))}>
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
                     style={{ width: "100%", height: "100%" }}
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
                     <div
                        style={{
                           display: "flex",
                           flexDirection: "column",
                           alignItems: "center",
                           justifyContent: "center",
                           height: "100%",
                        }}
                     >
                        <Add />
                     </div>
                  </div>
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

export default RiwayatPendidikan;
