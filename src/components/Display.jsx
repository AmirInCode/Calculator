import "./Display.css";

export default function Display({ value, expression  }) {
    const showResult = expression && value && expression !== value;

    return (
        <div className="display">
        {/* وقتی نتیجه وجود داره، عبارت بالا نمایش داده میشه */}
        <div className={`display-expression ${showResult ? "visible" : ""}`}>
          {showResult ? expression : ""}
        </div>
  
        {/* نتیجه یا عبارت فعلی */}
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
      </div>
    );
  }