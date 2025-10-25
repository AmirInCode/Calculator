import { useState } from "react";
import CalcButton from "./CalcButton";
import Display from "./Display";
import "./Calculator.css";




export default function Calculator({mode}) {
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


    const handleFahrenheitChange = (value)=>{
      if (value === "C") {
        setExpression("");
        setResult("");
        return;
      }


      if (value === "=") {
        // اینجا تبدیل فارنهایت به سلسیوس انجام می‌دیم

        try{
          const fahrenheit = parseFloat(expression);
          if (isNaN(fahrenheit)){
            setResult('Erorr');
            return;
          }

          const celsius = ((fahrenheit - 32) * 5 ) / 9;
          setResult(celsius.toFixed(2));
        }catch{
          setResult("erorr");
        }
        return;
      }
    
      // اضافه کردن عدد یا نقطه
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
            <Display value={result} expression={expression} mode={mode} />   
            <div className="calculator">
          
                <div  className="button-grid">
                    {buttons.map((b) => (
                        <CalcButton key={b} label={b} onClick={mode === "calculator"? handleClick : handleFahrenheitChange } />
                    ))}
                </div>
            </div>

        </div>
        
       
      );
}