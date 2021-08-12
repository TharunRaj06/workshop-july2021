import { useState } from "react";
import "./App.css";
const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f884d339307760215cba45e56aaaa2d7`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        setResult(
          "Temperature at" +
            " " +
            city +
            " " +
            "is" +
            " " +
            Math.round(celcius) +
            " " +
            "*C"
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="main">
      <div className="card1">
        <div>
          <form method="post" onSubmit={submitHandler}>
            <input
              type="search"
              name="search"
              id="search-bar"
              placeholder="search"
              onChange={changeHandler}
              value={city}
            />
            <h2>{result}</h2>
            <input type="submit" id="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
