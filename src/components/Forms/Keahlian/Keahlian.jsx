import React from "react";
import { Typography, Grid, Button, TextField } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";

import "./style.css";

const namaFieldArray = "keahlian";

const Keahlian = ({ nextPersonal, backStep }) => {
   const { handleSubmit, register, control } = useForm();
   const { fields, append } = useFieldArray({
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
                  <Grid item xs={12} sm={12} key={field.id}>
                     <TextField
                        {...register(`${namaFieldArray}.${index}.value`)}
                        fullWidth
                        variant="outlined"
                        type="text"
                        label="Keahlian"
                        required
                        size="small"
                     />
                  </Grid>
               ))}

               <Grid item xs={12} sm={12} align="center">
                  <Button
                     type="button"
                     variant="outlined"
                     onClick={() =>
                        append({ value: "" }, { focusName: "test.0.value" })
                     }
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
