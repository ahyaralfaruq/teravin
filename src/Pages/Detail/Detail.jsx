import { Typography, Container, Paper, Divider } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const Detail = ({ getPesertaBaru }) => {
   const paramId = useParams();

   const datas = getPesertaBaru.filter(
      (pesertaBaru) => pesertaBaru.id === paramId.id
   );

   console.log(datas);
   return (
      <Container className="container">
         <Paper className="pre" key={datas.id}>
            <Typography variant="h5" align="center" gutterBottom>
               {datas.id}
            </Typography>
            <Divider />
            <div>
               <Typography variant="h6" align="center" gutterBottom>
                  Data diri
               </Typography>
               {datas.map((data) => (
                  <div style={{ marginBottom: "30px" }} key={data.id}>
                     <Typography variant="body1">Nama : {data.nama}</Typography>
                     <Typography variant="body1">
                        Alamat : {data.alamat}
                     </Typography>
                     <Typography variant="body1">
                        Tempat Lahir : {data.placeOfBirth}
                     </Typography>
                     <Typography variant="body1">
                        Tanggal Lahir : {data.dateOfBirth}
                     </Typography>
                     <Typography variant="body1">
                        Email : {data.email}
                     </Typography>
                     <Typography variant="body1">
                        No. Hp : {data.nohp}
                     </Typography>
                     <Typography variant="body1">
                        No. Rek : {data.norek}
                     </Typography>
                     <Typography variant="body1">
                        Gender : {data.gender}
                     </Typography>
                     <Typography variant="body1">
                        Agama : {data.agama}
                     </Typography>
                     <Typography variant="body1">
                        Kewarganegaraan : {data.race}
                     </Typography>
                  </div>
               ))}
            </div>
            <div>
               <Typography variant="h6" align="center" gutterBottom>
                  Riwayat Pendidikan
               </Typography>
               {datas.map((data) =>
                  data.riwayatPendidikan.map((rp) => (
                     <div style={{ marginBottom: "30px" }} key={rp.id}>
                        <Typography variant="body1">
                           Nama sekolah: {rp.namaSekolah}
                        </Typography>
                        <Typography variant="body1">
                           Jurusan : {rp.jurusan}
                        </Typography>
                        <Typography variant="body1">
                           Dari : {rp.dari}
                        </Typography>
                        <Typography variant="body1">
                           Sampai : {rp.sampai}
                        </Typography>
                        <Typography variant="body1">
                           Keterangan : {rp.keterangan}
                        </Typography>
                     </div>
                  ))
               )}
            </div>
            <div>
               <Typography variant="h6" align="center" gutterBottom>
                  Pengalaman Kerja
               </Typography>
               {datas.map((data) =>
                  data.pengalamanKerja.map((pk) => (
                     <div style={{ marginBottom: "30px" }} key={pk.id}>
                        <Typography variant="body1">
                           Nama perusahaan : {pk.namaPerusahaan}
                        </Typography>
                        <Typography variant="body1">
                           Jenis industri : {pk.jenisIndustri}
                        </Typography>
                        <Typography variant="body1">
                           Dari : {pk.dari}
                        </Typography>
                        <Typography variant="body1">
                           Sampai : {pk.sampai}
                        </Typography>
                        <Typography variant="body1">
                           Alasan keluar : {pk.alasan}
                        </Typography>
                     </div>
                  ))
               )}
            </div>
            <div>
               <Typography variant="h6" align="center" gutterBottom>
                  Keahlian
               </Typography>
               {datas.map((data) =>
                  data.keahlian.map((k) => (
                     <div style={{ marginBottom: "30px" }} key={k.id}>
                        <Typography variant="body1">
                           Keahlian : {k.keahlian}
                        </Typography>
                     </div>
                  ))
               )}
            </div>
         </Paper>
      </Container>
   );
};

export default Detail;
