import React, { Component } from "react";
import Joke from "../Joke/Joke";
import { connect } from "react-redux";

class TempComp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRandom();
  }

  render() {
    console.log("Random", this.props);
    return <div></div>;
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    joke: state.joke,
    random: state.random
  };
};

export default connect(mapStateToProps)(TempComp);
