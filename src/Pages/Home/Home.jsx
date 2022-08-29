import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Tabel } from "../../components";

const Home = ({ getPesertaBaru }) => {
   return (
      <Container>
         <Typography variant="h4">Home</Typography>

         <Button component={Link} to="/form" variant="outlined" size="small">
            + Add data
         </Button>

         <Tabel getPesertaBaru={getPesertaBaru} />
      </Container>
   );
};

export default Home;
