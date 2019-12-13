export const fetchCategories = url => {
  return {
    type: "FETCH_CATEGORIES",
    url: url
  };
};

export const fetchRandom = joke => {
  return {
    type: "FETCH_RANDOM",
    joke: joke
  };
};

export const fetchFromSearch = url => {
  return {
    type: "FETCH_FROM_SEARCH",
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
