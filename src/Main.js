import React, { Component } from "react";
import TitleBar from "./components/TitleBar/TitleBar";
import RandomJokeContainer from "./containers/RandomJokeContainer";
import AccordionContainer from "./containers/AccordionContainer";
import Logo from "./images/chuck_norris.jpg";

import "./Main.scss";

const URL = {
  CATEGORIES: "https://api.chucknorris.io/jokes/categories",
  JOKE: "https://api.chucknorris.io/jokes/random?category=",
  RANDOM: "https://api.chucknorris.io/jokes/random"
};

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
          <TitleBar />
        </div>
        <div
          style={{
            color: "lightBlack",
            textAlign: "center",
            fontFamily: "Heebo, sans-serif"
          }}
        >
          <img src={Logo} />
          <div>
            <RandomJokeContainer
              randomUrl={URL.RANDOM}
              style={{ width: "300px" }}
            />
            <h2>Search</h2>
            <input type="text" />
          </div>
          <h1 style={{ margin: "0px" }}>Categories</h1>
        </div>
        <AccordionContainer categoriesUrl={URL.CATEGORIES} jokeUrl={URL.JOKE} />
      </div>
    );
  }
}

export default Main;
