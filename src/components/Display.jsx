import Calculator from "./Calculator";
import "./Display.css";
import { useState } from "react";


export default function Display({ value, expression, mode }) {
    const showResult = expression && value && expression !== value;

    // const [selectedMode, setSelectedMode] = useState("Temperature");
    //     const [dropdownOpen, setDropdownOpen] = useState(false);
      
        const [fahrenheit, setFahrenheit] = useState("");
        const [celsius, setCelsius] = useState("");
    
        // const options = ["Temperature", "Weight", "Length"];


        const handleFahrenheitChange = (e) => {
          const f = e.target.value;
          setFahrenheit(f);
          if (f === "") {
            setCelsius("");
          } else {
            setCelsius(((f - 32) * 5/9).toFixed(2));
          }
        };
      
        const handleCelsiusChange = (e) => {
          const c = e.target.value;
          setCelsius(c);
          if (c === "") {
            setFahrenheit("");
          } else {
            setFahrenheit(((c * 9/5) + 32).toFixed(2));
          }
        };

    return (
      
      
        
        <div className="display">

        {mode === "calculator" ?

          (
            <>
            <div className={`display-expression ${showResult ? "visible" : ""}`}>
            {showResult ? expression : ""}
            </div>
    
          
          <div className={`display-result ${showResult ? "result-mode" : ""}`}>
            {showResult ? (
              <>
                <span className="equal">=</span>
                  <span className="result-text">{value}</span>    
              </>
            ) : (
              <span className="result-text">{expression || "0"}</span>
            )}
          </div>
          </>
          )

          :(

                    // حالت تبدیل دما
            <div className="temp-converter">
            <div className="input-group">
              <label>Fahrenheit</label>
              <input
                type="number"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                placeholder="Enter °F"
              />
            </div>
            <hr className="divider" />

            <div className="input-group">
              <label>Celsius</label>
              <input
                type="text"
                value={celsius}
                onChange={handleCelsiusChange}
                placeholder="Enter °C"
              />
            </div>
          </div>
          )

          }
          


      </div>
        
        
    );
  }