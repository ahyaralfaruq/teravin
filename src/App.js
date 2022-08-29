import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, AddEmployee } from "./Pages";

import "./App.css";

const LOCAL_STORAGE_KEY = "daftar-teravin";

function App() {
   const [state, setState] = useState([]);

   const addPesertaBaru = (data) => {
      setState([...state, data]);
   };

   useEffect(() => {
      const daftarPeserta = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (daftarPeserta) {
         setState(daftarPeserta);
      }
   }, []);

   useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
   }, [state]);

   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home getPesertaBaru={state} />} />
            <Route
               path="/form"
               element={<AddEmployee addPesertaBaru={addPesertaBaru} />}
            />
         </Routes>
      </div>
   );
}

export default App;
