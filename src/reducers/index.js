import { cloneDeep } from "lodash";

const INITIAL_STATE = {
  categories: [],
  joke: {}
};

const saveCategories = (state, { categories }) => {
  let categoriesJokes = categories.map(category => {
    return {
      category: category,
      icon_url: null,
      id: null,
      url: null,
      value: null
    };
  });
  const newState = cloneDeep(state);
  newState.categories = categoriesJokes;
  return newState;
};

const saveJoke = (state, { joke }) => {
  const category = state.categories.find(
    ({ category }) => category === joke.categories[0]
  );
  if (!category) {
    return state;
  }
  const indexOfFoundCategory = state.categories.indexOf(category);
  const newState = cloneDeep(state);

  newState.categories[indexOfFoundCategory] = {
    category: joke.categories[0],
    icon_url: joke.icon_url,
    id: joke.id,
    url: joke.url,
    value: joke.value
  };

  return newState;
};

const randomJoke = (stat, { joke }) => {
  let heresRandomJoke = state.value;
};

export const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_CATEGORIES":
      return saveCategories(state, action);
    case "SAVE_JOKE":
      return saveJoke(state, action);
    default:
      return state;
  }
};
