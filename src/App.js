import React, { Component } from "react";
//import logo from './logo.svg';
import cartoons from "./cartoons.json";
import Container from "./components/Container";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Cartoons from "./components/Cartoons";
import Cartoon from "./components/Cartoon";
import "./App.css";

class App extends Component {
  state = {
    cartoons: cartoons,
    unselectedCartoons: cartoons,
    mes: "Click on an image to begin",
    curScore: 0,
    topScore: 0
  };

  pickCartoon = character => {
    const findCartoon = this.state.unselectedCartoons.find(
      cart => cart.character === character
    );

    if (findCartoon === undefined) {
      this.setState({
        cartoons: cartoons,
        unselectedCartoons: cartoons,
        mes: "You Lost",
    curScore: 0
      });
    } else {
      const newCartoons = this.state.unselectedCartoons.filter(
        cart => cart.character !== character
      );

      this.setState({
        cartoons: cartoons,
        unselectedCartoons: newCartoons,
        mes: "Keep going",
        curScore: this.state.curScore += 1,
        topScore: this.state.curScore > this.state.topScore ? this.state.curScore : this.state.topScore
      });
    }

    this.mixItUp(cartoons);
  };

  mixItUp = arr => {
    for (let i = 0; i < arr.length; i++) {
      let m = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[m]] = [arr[m], arr[i]];
    }
  };

  render() {
    return (
      <Container>
        <Nav
          mes={this.state.mes}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Header />
        <Cartoons>
          {this.state.cartoons.map(cartoon => (
            <Cartoon
              key={cartoon.id}
              character={cartoon.character}
              url={cartoon.url}
              pickCartoon={this.pickCartoon}
            />
          ))}
        </Cartoons>
      </Container>
    );
  }
}

export default App;
