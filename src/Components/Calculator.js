import React, { useState, useEffect } from "react";
import '../Styles/Calculator.css';

/* 
-Change handle_num to use a switch statement
-Fix handling for pressing equals multiple times in a row
-Fix calculator box styling
-Add styling for different screen sizes
*/

function Calculator() {

    const [current, setCurrent] = useState(0);
    const [total, setTotal] = useState(0);
    const [operation, setOperation] = useState(0);

    function handle_num(value) {
        if (value == "C") {
            setCurrent(0);
            setTotal(0);
            setOperation(0);
        } else if (value == "/") {
            setOperation("/");
            setTotal(current);
            setCurrent(0);
        } else if (value == "*") {
            setOperation("*");
            setTotal(current);
            setCurrent(0);
        } else if (value == "-") {
            setOperation("-");
            setTotal(current);
            setCurrent(0);
        } else if (value == "+") {
            setOperation("+");
            setTotal(current);
            setCurrent(0);
        } else if (value == "back") {
            if (current.length <= 1 || current == 0) {
                setCurrent(0);
            } else {
                setCurrent(current.slice(0, -1));
            }
        } else if (value == "=") {
            if (current == 0) {
                setCurrent(total);
                setOperation(0);
            } else {
                setTotal(handle_operation(total, current, operation));
            }
        } else if (current == 0) {
            setCurrent(value);
        } else {
            setCurrent(current + value);
        }
    }

    function handle_operation(total, current, operation) {
        if (operation == "+") {
            var result = parseInt(total) + parseInt(current);
            setCurrent(result);
            return result;
        } else if (operation == "-") {
            var result = parseInt(total) - parseInt(current);
            setCurrent(result);
            return result;
        } else if (operation == "*") {
            var result = parseInt(total) * parseInt(current);
            setCurrent(result);
            return result;
        } else if (operation == "/") {
            var result = parseInt(total) / parseInt(current);
            setCurrent(result);
            return result;
        } else {
            setCurrent(total);
            return total;
        }
    }
  
    return (
        <div className="Calculator">
            <div className="Display">
                <p>{current}</p>
            </div>
            <div className="Buttons">
                <div className="Button-row">
                    <button className="Calc-button-double" onClick={() => handle_num("C")}>C</button>
                    <button className="Calc-button" onClick={() => handle_num("back")}>&larr;</button>
                    <button className="Calc-button" onClick={() => handle_num("/")}>&divide;</button>
                </div>
                <div className="Button-row">
                    <button className="Calc-button" onClick={() => handle_num("7")}>7</button>
                    <button className="Calc-button" onClick={() => handle_num("8")}>8</button>
                    <button className="Calc-button" onClick={() => handle_num("9")}>9</button>
                    <button className="Calc-button" onClick={() => handle_num("*")}>&times;</button>
                </div>
                <div className="Button-row">
                    <button className="Calc-button" onClick={() => handle_num("4")}>4</button>
                    <button className="Calc-button" onClick={() => handle_num("5")}>5</button>
                    <button className="Calc-button" onClick={() => handle_num("6")}>6</button>
                    <button className="Calc-button" onClick={() => handle_num("-")}>&minus;</button>
                </div>
                <div className="Button-row">
                    <button className="Calc-button" onClick={() => handle_num("1")}>1</button>
                    <button className="Calc-button" onClick={() => handle_num("2")}>2</button>
                    <button className="Calc-button" onClick={() => handle_num("3")}>3</button>
                    <button className="Calc-button" onClick={() => handle_num("+")}>+</button>
                </div>
                <div className="Button-row">
                    <button className="Calc-button-triple" onClick={() => handle_num("0")}>0</button>
                    <button className="Calc-button" onClick={() => handle_num("=")}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;