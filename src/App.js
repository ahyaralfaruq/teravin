import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, AddEmployee } from "./Pages";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daftar-peserta-baru" element={<AddEmployee />} />
         </Routes>
      </div>
   );
}

export default App;
