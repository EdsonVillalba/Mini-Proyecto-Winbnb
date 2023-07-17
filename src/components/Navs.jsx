import logo from "./img/logo.svg"

const Navs = () => {
  
  return (
    <header className="">
      <div className="logo">
        <img src={logo} alt="Logo-winbnb" />
      </div>
      <div className="nav-cont">
      <nav className="container input-group mb-3">
      <button
          className="form-slection btn btn-outline-secondary btn-location"
          type="text"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          placeholder="LOCATION">LOCATION</button>
        <button
          className="form-slection btn btn-outline-secondary btn-guest"
          type="text"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          placeholder="GUEST">Add guests</button>
        <button className="btn btn-outline-secondary search-button material-symbols-outlined">
          search
        </button>
      </nav>
      </div>
    </header>
    
    
  );
};

export default Navs;