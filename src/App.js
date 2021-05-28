import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    show: true,
    name: "Иван",
  };
  render() {
    return (
    <div className="App">
      <p>{this.state.show ? "Привет" : "Пока"}, {this.state.name}</p>
    </div>);
  }
}

export default App;
