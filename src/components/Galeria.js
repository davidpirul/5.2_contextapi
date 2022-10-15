import { useContext } from "react";
import Context from "../assets/context/Context";
import "../assets/css/galeria.css";
import Heart from "./Heart";

export default function Home() {
  const {fotos, favoritos, setFavoritos} = useContext(Context);

  const settingFavorito = (foto) => {

    if (foto.fav === false) {
      foto.fav = true
      setFavoritos([...favoritos, foto]);
    } else {
      foto.fav = false
      const newFavoritos = favoritos.filter((favorito) => favorito.id !== foto.id)
      setFavoritos(newFavoritos)
    }
  }

    /* const fotoIndex = fotos.findIndex((f) => f.id === id);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    setFotos([...fotos]); */
  

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto) => (
        <div
        onClick={() => settingFavorito(foto)}
        key={foto.id}
        className="foto"
        style={{ backgroundImage: `url(${foto.src.medium})` }}
        >
          <Heart filled={foto.fav}/>
          <p>{foto.alt}</p>
        </div>
      ))}
    </div>
  );
}
