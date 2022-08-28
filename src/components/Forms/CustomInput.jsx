import { TextField, Grid } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const CustomInput = ({
   name,
   label,
   required = false,
   onChange,
   value,
   type,
}) => {
   const { control } = useForm();

   return (
      <Grid item xs={12} sm={6}>
         <Controller
            control={control}
            name={name}
            render={({ field }) => (
               <TextField
                  {...field}
                  fullWidth
                  name="nama"
                  variant="outlined"
                  type={type}
                  label={label}
                  required={required}
                  size="small"
                  onChange={onChange}
                  value={value}
               />
            )}
         />
      </Grid>
   );
};

export default CustomInput;
