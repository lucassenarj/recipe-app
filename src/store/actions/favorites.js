export const FAVORITES_ADD_RECIPE = "FAVORITES_ADD_RECIPE";
export const FAVORITES_REMOVE_RECIPE = "FAVORITES_REMOVE_RECIPE";
export const FAVORITES_SET_LIST = "FAVORITES_SET_LIST";

export const favoritesSetList = (favorites, dispatch) => {
  dispatch({
    type: FAVORITES_SET_LIST,
    payload: {
      favorites,
    },
  });
};

export const favoritesAddRecipe = (recipe, dispatch) => {
  dispatch({
    type: FAVORITES_ADD_RECIPE,
    payload: {
      recipe,
    },
  });
};

export const favoritesRemoveRecipe = (idMeal, dispatch) => {
  dispatch({
    type: FAVORITES_REMOVE_RECIPE,
    payload: {
      idMeal,
    },
  });
};
