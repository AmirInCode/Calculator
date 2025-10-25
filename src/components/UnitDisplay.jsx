import { useState } from "react";


export function UnitDisplay(){
    const [selectedMode, setSelectedMode] = useState("Temperature");
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    // const [fahrenheit, setFahrenheit] = useState("");
    // const [celsius, setCelsius] = useState("");

    const options = ["Temperature", "Weight", "Length"];
  
    return(
        <div className="unit-display">
            <div className="dropdown">
                <button onClick={()=>{setDropdownOpen(!dropdownOpen)}}>
                    {selectedMode}
                </button>

                {dropdownOpen && (
          <div className="dropdown-menu">
            {options.map((opt) => (
              <div
                key={opt}
                className="dropdown-item"
                onClick={() => {
                  setSelectedMode(opt);
                  setDropdownOpen(false);
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
            </div>
        </div>
    );
}