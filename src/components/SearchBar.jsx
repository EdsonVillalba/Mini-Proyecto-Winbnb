import { useEffect, useState } from "react";
import GuestSelector from "./GuestSelector";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showList, setShowList] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (searchText) => {
    const filteredData = data.filter(
      (item) =>
        item.city.toLowerCase().includes(searchText.toLowerCase()) ||
        item.country.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  const handleInputChange = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);
    handleSearch(searchText);
    setSelectedItem(null); // Limpiar el elemento seleccionado cuando cambia el input
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setSearchTerm(`${item.city}, ${item.country}`);
    setSearchResults([]); // Limpiar la lista de resultados cuando se selecciona un elemento
    setShowList(false); // Cerrar la lista al seleccionar un elemento
  };

  const handleToggleList = () => {
    setShowList((prevShowList) => !prevShowList); // Cambiar el estado actual de showList
  };

  const handleSearchClick = () => {
    if (!selectedItem && !searchResults.some((item) => item.city === searchTerm || item.country === searchTerm)) {
      alert("Selecciona un elemento válido de la lista antes de realizar la búsqueda.");
    } else {
      alert("Enhorabuena");
    }
    setSearchTerm(""); // Limpiar el input después de mostrar la alerta
  };

  return (
    <div>
      <div className="flex">
        <input
          className={`input-group btn btn-location dropdown-toggle ${showList ? "active" : ""}`}
          type="text"
          placeholder="LOCATION"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleToggleList} // Hacer clic en el input despliega o cierra la lista
          autoFocus // Añadir el atributo autoFocus para enfocar el input automáticamente
        />
        <GuestSelector />
        <button
          className="input-group btn btn-outline-secondary search-button material-symbols-outlined"
          onClick={handleSearchClick}
        >
          search
        </button>
      </div>
      {showList && (
        <div className="locacion">
          <ol className="list-group">
            {searchResults.map((element, index) => (
              <li
                key={index}
                onClick={() => handleSelectItem(element)}
                className={selectedItem === element ? "selected" : ""}
              >
                <a className="enlace" href="#">{/* Enlace que selecciona el elemento */}
                  <span className="material-symbols-outlined">location_on</span>
                  {element.city}, {element.country}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};


export default SearchBar;



