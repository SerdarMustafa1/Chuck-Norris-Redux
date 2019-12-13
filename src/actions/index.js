export const fetchCategories = url => {
  return {
    type: "FETCH_CATEGORIES",
    url: url
  };
};

export const saveCategories = categories => {
  return {
    type: "SAVE_CATEGORIES",
    categories: categories
  };
};

export const saveJoke = joke => {
  return {
    type: "SAVE_JOKE",
    joke: joke
  };
};

export const saveJokeAction = joke => ({
  type: "SAVE",
  payload: joke
});
