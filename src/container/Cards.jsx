import { useEffect, useState } from "react";
import FormatoCards from "../components/FormatoCards";

const Cards = () => {
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook useEffect ejecutará la función getData solo una vez al cargar la página.
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="distribuidor">
        <div className="cards-container">
            {data.map((element, indice) => (
                <FormatoCards
                key={"#" + indice}
                        superHost={element.superHost}
                        title={element.title}
                        rating={element.rating}
                        type={element.type}
                        photo ={element.photo}
                        beds={element.beds}
                />
            ))}
        </div>
    </div>
  );
};

export default Cards;
