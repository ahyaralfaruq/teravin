import React from "react";
import { Typography, Grid, Button, TextField } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";

import "./style.css";

const namaFieldArray = "keahlian";

const DataKeahlian = ({ update, index, value, control, remove }) => {
   const { register, handleSubmit } = useForm({
      defaultValues: value,
   });

   return (
      <Grid item xs={12} sm={12} className="inputs-wrapper">
         <TextField
            {...register(`keahlian`, { required: true })}
            fullWidth
            variant="outlined"
            type="text"
            label="Keahlian"
            required
            size="small"
         />
         <div className="button-wrapper">
            <Button
               variant="contained"
               color="error"
               size="small"
               onClick={() => remove(index)}
            >
               Remove
            </Button>
            <Button
               variant="contained"
               color="primary"
               size="small"
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

const Keahlian = ({ nextPersonal, backStep }) => {
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
            Keahlian
         </Typography>

         <form onSubmit={handleSubmit((data) => nextPersonal({ ...data }))}>
            <Grid container spacing={3}>
               {fields.map((field, index) => (
                  <DataKeahlian
                     key={field.id}
                     update={update}
                     index={index}
                     value={field}
                     remove={remove}
                  />
               ))}

               <Grid item xs={12} sm={12} align="center">
                  <Button
                     type="button"
                     variant="outlined"
                     onClick={() => {
                        append({
                           keahlian: "",
                        });
                     }}
                  >
                     Add Keahlian
                  </Button>
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

export default Keahlian;
