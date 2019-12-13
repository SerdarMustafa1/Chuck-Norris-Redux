import { saveCategories, saveJoke } from "../actions";

function makeRequestURL(url) {
  return fetch(url);
}

export const fetchCategories = url => {
  return function(dispatch) {
    return makeRequestURL(url)
      .then(response => {
        return response.json();
      })
      .then(res => {
        dispatch(saveCategories(res));
      });
  };
};

export const fetchJokeByCategory = url => {
  return function(dispatch) {
    return makeRequestURL(url)
      .then(response => {
        return response.json();
      })
      .then(res => {
        dispatch(saveJoke(res));
      });
  };
};

export const fetchRandom = url => {
  return function(dispatch) {
    return makeRequestURL(url)
      .then(response => {
        return response.json();
      })
      .then(res => {
        dispatch(saveJoke(res));
      });
  };
};
