import { useState,useRef  } from "react";

const GuestSelector = () => {
    const [showSelector, setShowSelector] = useState(false);
    const [numAdults, setNumAdults] = useState(0);
    const [numChildren, setNumChildren] = useState(0);
    const [guestValue, setGuestValue] = useState("Add guest");
    
  
    const toggleSelector = () => {
      setShowSelector((prevShowSelector) => !prevShowSelector);
    };
  
    const handleIncrement = (type) => {
      if (type === "adults") {
        setNumAdults((prevNumAdults) => prevNumAdults + 1);
      } else if (type === "children") {
        setNumChildren((prevNumChildren) => prevNumChildren + 1);
      }
    };
  
    const handleDecrement = (type) => {
      if (type === "adults" && numAdults > 0) {
        setNumAdults((prevNumAdults) => prevNumAdults - 1);
      } else if (type === "children" && numChildren > 0) {
        setNumChildren((prevNumChildren) => prevNumChildren - 1);
      }
    };
  
    const handleApply = () => {
      const guestText = `${numAdults} Adult${numAdults !== 1 ? "s" : ""}${
        numChildren > 0 ? `, ${numChildren} Child${numChildren !== 1 ? "ren" : ""}` : ""
      }`;
      setGuestValue(guestText);
      toggleSelector();
    };
  
    const guestInputRef = useRef(null);
  
    return (
      <div className="input-group guest-selector">
        <input
          ref={guestInputRef}
          type="button"
          className="add-guests-btn"
          onClick={toggleSelector}
          value={guestValue}
        />
        {showSelector && (
          <div className="selector-popup">
            <div className="selector-header">Guests</div>
            <div className="guests-count">
              <div className="guest-type">Adults</div>
              <div className="count-controls">
                <button onClick={() => handleDecrement("adults")}>-</button>
                <span>{numAdults}</span>
                <button onClick={() => handleIncrement("adults")}>+</button>
              </div>
            </div>
            <div className="guests-count">
              <div className="guest-type">Children</div>
              <div className="count-controls">
                <button onClick={() => handleDecrement("children")}>-</button>
                <span>{numChildren}</span>
                <button onClick={() => handleIncrement("children")}>+</button>
              </div>
            </div>
            <button className="apply-btn" onClick={handleApply}>
              Apply
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default GuestSelector;

