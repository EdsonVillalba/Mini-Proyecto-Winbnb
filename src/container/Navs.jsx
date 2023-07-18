import logo from "./img/logo.svg"
import SearchBar from "../components/SearchBar";

const Navs = () => {
  
  return (
    <header className="">
      <div className="logo">
        <img src={logo} alt="Logo-winbnb" />
      </div>

      <div>
        <SearchBar />
      </div>
     
    </header>
    
    
  );
};

export default Navs;