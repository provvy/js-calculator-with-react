import React, {useState, useEffect} from "react";
import './App.css';
import Button from "./components/Button.js";
import Display from "./components/Display.js";

function App() {

  const [numbers, setNumbers] = useState("");
  const [counter, setCounter] = useState("");
  const [disabled, setDisabled] = useState(null);

  useEffect(() => {
    setNumbers("0");
    setCounter("0");
    setDisabled(false);
  }, []);

  const addNumber = (value) => {
    setNumbers(parseInt(numbers === "0" ? "" + value : numbers + value));
    setDisabled(false);
  }

  const expression = (value) => {
    setCounter(counter === "0" ? "" + numbers + value : counter + numbers + value);
    setDisabled(true);
    setNumbers("0");
  }

  const equal = () => {
    let result = counter + numbers;
    setNumbers(eval(result));
    setCounter("");
    setDisabled(false);
  }

  const del = () => {
    setCounter("0");
    setNumbers("0");
    setDisabled(false);
  }

  return (
    <div className="container">
      <header className="header">JS Calculator</header>
      <div className="calculator">
        <Display numbers={numbers} counter={counter} />
        <div className="button-div">
          <Button value="C" onclick={del} />
          <Button disabled={disabled} value="÷" onclick={() => expression("/")} />
          <Button onclick={() => addNumber("7")} value="7" />
          <Button onclick={() => addNumber("8")} value="8" />
          <Button onclick={() => addNumber("9")} value="9" />
          <Button disabled={disabled} onclick={() => expression("*")} value="×" />
          <Button onclick={() => addNumber("4")} value="4" />
          <Button onclick={() => addNumber("5")} value="5" />
          <Button onclick={() => addNumber("6")} value="6" />
          <Button disabled={disabled} onclick={() => expression("-")} value="–" />
          <Button onclick={() => addNumber("1")} value="1" />
          <Button onclick={() => addNumber("2")} value="2" />
          <Button onclick={() => addNumber("3")} value="3" />
          <Button disabled={disabled} onclick={() => expression("+")} value="+" />
          <Button onclick={() => addNumber("0")} value="0" />
          <Button value="=" onclick={() => equal()} />
        </div>
      </div>
      <footer className="footer">coded by Paolo Provveduto</footer>
    </div>
  );
}

export default App;
