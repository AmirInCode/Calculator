import { useState } from "react";
import CalcButton from "./CalcButton";
import Display from "./Display";
import "./Calculator.css";


export default function Calculator() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");


    const handleClick = (value) => {
        // پاک کردن
    if (value === "C") {
        setExpression("");
        setResult("");
        return;
      }
  
      // محاسبه
      if (value === "=") {
        try {
          const evalResult = eval(expression).toString();
          setResult(evalResult);
        } catch {
          setResult("Error");
        }
        return;
      }
  
      // اگر نتیجه داریم
      if (result) {
        // اگر کاربر بعد از مساوی، یکی از عملگرها رو زد، ادامه محاسبه بده
        if (["+", "-", "*", "/"].includes(value)) {
          setExpression(result + value);
          setResult("");
        } else {
          // اگر عدد یا نقطه زد، یعنی یه محاسبه جدید شروع شده
          setExpression(value);
          setResult("");
        }
        return;
      }
  
      // حالت معمولی (در حال تایپ عبارت)
      setExpression(expression + value);
    };

    const buttons = [
        "C","+/-","%","/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        ".", "0", "<=", "=",
      ];

    return (
        <div>
            <Display value={result} expression={expression} />
            <div className="calculator">
          
                <div  className="button-grid">
                    {buttons.map((b) => (
                        <CalcButton key={b} label={b} onClick={handleClick} />
                    ))}
                </div>
            </div>

        </div>
        
       
      );
}