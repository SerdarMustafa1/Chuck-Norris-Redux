import React, { Component } from 'react'
import Collapsible from 'react-collapsible'
import Joke from '../Joke/Joke'
import { connect } from 'react-redux'

class Accordion extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    console.log("Accordian",this.props)
    return (
      <div>
        {this.props.categories && this.props.categories.map((category, index) =>
          <Collapsible
            key={index}
            classParentString="App-Collapsible"
            trigger={category.category}
            onOpening={() => {
              this.props.fetchJokeByCategory(category.category)
            }}>
            {this.props.categories &&
              <Joke joke={category} />}
          </Collapsible>
        )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    joke: state.joke
  }
};

export default connect(mapStateToProps)(Accordion)