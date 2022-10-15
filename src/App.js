import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useEffect, useState } from "react";
import Context from "./assets/context/Context";

export default function App() {
  const endpoint = "/fotos.json";

  const [fotos, setFotos] = useState([]);
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    const obtFotos = async () => {
      const resp = await fetch(endpoint);
      const imagenes = await resp.json();
      console.log(imagenes)
      setFotos(imagenes.photos)
    }
    obtFotos()
  }, [])

  return (
    <div className="App">

      <Context.Provider value={{ fotos, setFotos, favoritos, setFavoritos }}>

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>

        </BrowserRouter>

      </Context.Provider>
    </div>
  );
}
