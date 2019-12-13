import { connect } from 'react-redux';
import { fetchCategories, fetchJokeByCategory } from '../helpers/request';
import Accordion from '../components/Accordion/Accordion';

const mapStateToProps = (state, ownProps) => {
  return { state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories(ownProps.categoriesUrl))
    },
    fetchJokeByCategory: (category) => {
      dispatch(fetchJokeByCategory(ownProps.jokeUrl.concat(category)))
    }
  }
}

const AccordionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Accordion)

export default AccordionContainer