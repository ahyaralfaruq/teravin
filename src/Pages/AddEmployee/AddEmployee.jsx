import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
   Container,
   Paper,
   Stepper,
   Step,
   StepLabel,
   Typography,
   Divider,
   Button,
} from "@mui/material";
import {
   DataDiri,
   RiwayatPendidikan,
   PengalamanKerja,
   Keahlian,
} from "../../components";

import "./AddEmployee.css";
import { v4 } from "uuid";

const AddEmployee = ({ addPesertaBaru }) => {
   const [postData, setPostData] = useState({
      id: "",
      nama: "",
      alamat: "",
      email: "",
      nohp: "",
      gender: "",
      agama: "",
      norek: "",
      dateOfBirth: "",
      placeOfBirth: "",
      race: "",
      riwayatPendidikan: [],
      pengalamanKerja: [],
      keahlian: "",
   });

   console.log(postData);

   const [activeStep, setActiveStep] = useState(0);
   const steps = [
      "Data diri",
      "Riwayat pendidikan",
      "Pengalaman Kerja",
      "Keahlian",
   ];

   const nextStep = () => setActiveStep((next) => next + 1);
   const backStep = () => setActiveStep((back) => back - 1);

   // trigger setelah submit untuk memasukkan data
   const nextPersonal = (data) => {
      setPostData((current) => {
         return { ...current, ...data, id: v4() };
      });
      nextStep();
   };

   const Forms = () => {
      return activeStep === 0 ? (
         <DataDiri nextPersonal={nextPersonal} />
      ) : activeStep === 1 ? (
         <RiwayatPendidikan />
      ) : activeStep === 2 ? (
         <PengalamanKerja />
      ) : (
         <Keahlian />
      );
   };

   const onFinally = () => {
      addPesertaBaru(postData);
   };

   console.log(postData);

   const Confirmation = () => (
      <>
         <Typography
            variant="h6"
            align="center"
            style={{ marginBottom: "40px" }}
         >
            Pendaftaran Selesai
         </Typography>
         <Divider />
         <Typography variant="subtittle2" style={{ marginBottom: "50px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            inventore nostrum aperiam, in quos culpa nemo aspernatur quaerat
            laborum delectus dolore id voluptatem libero iste rem ducimus!
            Laboriosam, unde ut?
         </Typography>
         <Button type="button" onClick={onFinally} variant="outlined">
            Back to home
         </Button>
      </>
   );

   return (
      <Container>
         <Paper className="paper-wrapper">
            <Typography variant="h5" align="center" gutterBottom>
               Form Submission
            </Typography>
            <Stepper alternativeLabel activeStep={activeStep}>
               {steps.map((label, i) => (
                  <Step key={i}>
                     <StepLabel>{label}</StepLabel>
                  </Step>
               ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : <Forms />}
         </Paper>
      </Container>
   );
};

export default AddEmployee;
