export default function CalcButton({label, onClick}){
    return(
        <button
        className="calc-btn"
        onClick={() => onClick(label)}
        >
        {label}
      </button>
    );
}