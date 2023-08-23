import React from "react";
import '../Styles/Calculator.css';

function Calculator() {

    const cur_num = 0;

    function handle_num() {
        
    }
  
    return (
        <div className="Calculator">
            <div className="Display">
                <p>{cur_num}</p>
            </div>
            <div className="Buttons">
                <div className="Button-row">
                    <button className="Calc-button-double" onClick={handle_num}>C</button>
                    <button className="Calc-button" onClick={handle_num}>&larr;</button>
                    <button className="Calc-button" onClick={handle_num}>&divide;</button>
                </div>
                <div className="Button-row">
                    <button className="Calc-button" onClick={handle_num}>7</button>
                    <button className="Calc-button" onClick={handle_num}>8</button>
                    <button className="Calc-button" onClick={handle_num}>9</button>
                    <button className="Calc-button" onClick={handle_num}>&times;</button>
                </div>
                <div className="Button-row">
                    <button className="Calc-button" onClick={handle_num}>4</button>
                    <button className="Calc-button" onClick={handle_num}>5</button>
                    <button className="Calc-button" onClick={handle_num}>6</button>
                    <button className="Calc-button" onClick={handle_num}>&minus;</button>
                </div>
                <div className="Button-row">
                    <button className="Calc-button" onClick={handle_num}>1</button>
                    <button className="Calc-button" onClick={handle_num}>2</button>
                    <button className="Calc-button" onClick={handle_num}>3</button>
                    <button className="Calc-button" onClick={handle_num}>+</button>
                </div>
                <div className="Button-row">
                    <button className="Calc-button-triple" onClick={handle_num}>0</button>
                    <button className="Calc-button" onClick={handle_num}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;