import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (e) => {
    const value = e.target.value;
    setInput((prev) => prev + value);
  };

  const clearAll = () => setInput("");
  const deleteOne = () => setInput((prev) => prev.slice(0, -1));

  const calculate = () => {
    if (input === "") return;
    const result = eval(input);
    setInput(result.toString());
    setHistory((prev) => [...prev, `${input} = ${result}`]);
  };

  const clearHistory = () => setHistory([]);

  return (
    <div className="calc-container">
        <div className="history-box top">
          <h3>History</h3>
          <div className="history-list">
            {history.length === 0 ? (
              <p className="no-data">No records</p>
            ) : (
              history.map((item, index) => <p key={index}>{item}</p>)
            )}
          </div>
          {history.length > 0 && (
            <button onClick={clearHistory} className="clear-btn">Clear</button>
          )}
        </div>
      <div className="calc-body">
        <input type="text" value={input} disabled />
        <div className="buttons">
          <button onClick={clearAll}>AC</button>
          <button onClick={deleteOne}>⌫</button>
          <button value="%" onClick={handleClick}>%</button>
          <button value="/" onClick={handleClick}>÷</button>

          <button value="7" onClick={handleClick}>7</button>
          <button value="8" onClick={handleClick}>8</button>
          <button value="9" onClick={handleClick}>9</button>
          <button value="*" onClick={handleClick}>×</button>

          <button value="4" onClick={handleClick}>4</button>
          <button value="5" onClick={handleClick}>5</button>
          <button value="6" onClick={handleClick}>6</button>
          <button value="-" onClick={handleClick}>−</button>

          <button value="1" onClick={handleClick}>1</button>
          <button value="2" onClick={handleClick}>2</button>
          <button value="3" onClick={handleClick}>3</button>
          <button value="+" onClick={handleClick}>+</button>

          <button value="0" onClick={handleClick} className="zero">0</button>
          <button value="." onClick={handleClick}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
