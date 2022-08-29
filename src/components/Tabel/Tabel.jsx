import React from "react";
import {
   Button,
   Table,
   TableHead,
   TableRow,
   TableCell,
   TableBody,
} from "@mui/material";
import { RemoveRedEye } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Tabel = ({ getPesertaBaru }) => {
   return (
      <Table>
         <TableHead>
            <TableRow style={{ background: "#eee" }}>
               <TableCell>ID No.</TableCell>
               <TableCell>Nama</TableCell>
               <TableCell>Alamat</TableCell>
               <TableCell>Detail</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {getPesertaBaru.map((data, index) => (
               <TableRow key={data.id}>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.nama}</TableCell>
                  <TableCell>{data.alaamat}</TableCell>
                  <TableCell>
                     <Button
                        component={Link}
                        to={`/detail/${data.id}`}
                        style={{ color: "#dbdbdb" }}
                     >
                        <RemoveRedEye />
                     </Button>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default Tabel;
