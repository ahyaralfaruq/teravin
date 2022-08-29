import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

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
      keahlian: [],
   });

   const [activeStep, setActiveStep] = useState(0);
   const steps = [
      "Data diri",
      "Riwayat pendidikan",
      "Pengalaman Kerja",
      "Keahlian",
   ];
   const navigate = useNavigate();

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
         <RiwayatPendidikan nextPersonal={nextPersonal} backStep={backStep} />
      ) : activeStep === 2 ? (
         <PengalamanKerja nextPersonal={nextPersonal} backStep={backStep} />
      ) : (
         <Keahlian nextPersonal={nextPersonal} backStep={backStep} />
      );
   };

   const onFinally = () => {
      addPesertaBaru(postData);

      navigate("/", { replace: true });
   };

   const Confirmation = () => (
      <>
         <Typography
            variant="h6"
            align="center"
            style={{ marginBottom: "40px" }}
         >
            Pendaftaran Selesai
         </Typography>

         <Divider style={{ marginBottom: "20px" }} />

         {[postData].map((data, i) => (
            <Typography
               variant="subtitle2"
               style={{ marginBottom: "50px", wordWrap: "break-word" }}
               key={i}
            >
               {JSON.stringify(data)}
            </Typography>
         ))}

         <div style={{ textAlign: "center" }}>
            {postData.keahlian.length === 0 ||
            postData.riwayatPendidikan.length < 1 ||
            postData.pengalamanKerja.length === 0 ? (
               <Button
                  type="button"
                  disabled
                  variant="contained"
                  color="primary"
                  size="small"
               >
                  Selesai dan Kembali
               </Button>
            ) : (
               <Button
                  type="button"
                  onClick={onFinally}
                  variant="contained"
                  color="primary"
                  size="small"
               >
                  Selesai dan Kembali
               </Button>
            )}
         </div>
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
