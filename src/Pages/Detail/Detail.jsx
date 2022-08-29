import { Typography, Container, Paper, Divider } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const Detail = ({ getPesertaBaru }) => {
   const initialData = {
      id: 1,
      nama: "Default Data",
      alamat: "jl. Teravin",
      placeOfBirth: "Jakarta",
      dateOfBirth: "20 Januari 1973",
      email: "defaultEmail@email.com",
      nohp: "083899966613",
      norek: "0000000000",
      gender: "laki-laki",
      agama: "Islam",
      race: "Indonesia",
      pengalamanKerja: [
         {
            namaPerusahaan: "Perusahaan",
            jenisIndustri: "Jasa",
            dari: "2018",
            sampai: "2020",
            alasan: "tidak ada",
         },
         {
            namaPerusahaan: "Perusahaan 2",
            jenisIndustri: "Jasa",
            dari: "2020",
            sampai: "2021",
            alasan: "tidak ada",
         },
      ],
      riwayatPendidikan: [
         {
            namaPerusahaan: "Sekolah",
            jurusan: "Jasa",
            dari: "2015",
            sampai: "2018",
            keterangan: "tidak ada",
         },
      ],
      keahlian: [
         {
            value: "Coding",
         },
      ],
   };
   const paramId = useParams();

   return (
      <Container className="container">
         {getPesertaBaru
            .filter((pesertaBaru) => pesertaBaru.id === paramId.id)
            .map((data) => (
               <Paper className="pre">
                  <Typography variant="h5" align="center" gutterBottom>
                     {initialData.id}
                  </Typography>
                  <Divider />
                  <div>
                     <Typography variant="h6" align="center" gutterBottom>
                        Data diri
                     </Typography>
                     <Typography variant="body1">
                        Nama : {initialData.nama}
                     </Typography>
                     <Typography variant="body1">
                        Alamat : {initialData.alamat}
                     </Typography>
                     <Typography variant="body1">
                        Tempat Lahir : {initialData.placeOfBirth}
                     </Typography>
                     <Typography variant="body1">
                        Tanggal Lahir : {initialData.dateOfBirth}
                     </Typography>
                     <Typography variant="body1">
                        Email : {initialData.email}
                     </Typography>
                     <Typography variant="body1">
                        No. Hp : {initialData.nohp}
                     </Typography>
                     <Typography variant="body1">
                        No. Rek : {initialData.norek}
                     </Typography>
                     <Typography variant="body1">
                        Gender : {initialData.gender}
                     </Typography>
                     <Typography variant="body1">
                        Agama : {initialData.agama}
                     </Typography>
                     <Typography variant="body1">
                        Kewarganegaraan : {initialData.race}
                     </Typography>
                  </div>
                  <div>
                     <Typography variant="h6" align="center" gutterBottom>
                        Riwayat Pendidikan
                     </Typography>
                     {initialData.riwayatPendidikan.map((rp) => (
                        <div style={{ marginBottom: "30px" }}>
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
                     ))}
                  </div>
                  <div>
                     <Typography variant="h6" align="center" gutterBottom>
                        Pengalaman Kerja
                     </Typography>
                     {initialData.pengalamanKerja.map((pk) => (
                        <div style={{ marginBottom: "30px" }}>
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
                     ))}
                  </div>
                  <div>
                     <Typography variant="h6" align="center" gutterBottom>
                        Keahlian
                     </Typography>
                     {initialData.pengalamanKerja.map((k) => (
                        <div style={{ marginBottom: "30px" }}>
                           <Typography variant="body1">
                              Keahlian : {k.namaPerusahaan}
                           </Typography>
                        </div>
                     ))}
                  </div>
               </Paper>
            ))}
      </Container>
   );
};

export default Detail;
