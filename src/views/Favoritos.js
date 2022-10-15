import { useContext } from "react";
import Context from "../assets/context/Context"

export default function Favoritos() {
  const { favoritos } = useContext(Context)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((foto) => (
          <div
            key={foto.id}
            className="foto"
            style={{ backgroundImage: `url(${foto.src.medium})` }}
          >
            <p>{foto.alt}</p>
          </div>))}
      </div>
    </div>
  );
}
