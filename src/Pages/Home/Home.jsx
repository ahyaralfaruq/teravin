import React from "react";
import { Container, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { Tabel } from "../../components";

import "./style.css";

const Home = ({ getPesertaBaru }) => {
   return (
      <Container className="home-root">
         <Paper className="paper-wrapper">
            <Typography variant="h5" align="left" gutterBottom>
               Form Submission
            </Typography>

            <Button component={Link} to="/form" variant="outlined" size="small">
               + Add data
            </Button>

            <Tabel getPesertaBaru={getPesertaBaru} />
         </Paper>
      </Container>
   );
};

export default Home;
