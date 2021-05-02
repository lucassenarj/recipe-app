import {
  FAVORITES_ADD_RECIPE,
  FAVORITES_REMOVE_RECIPE,
  FAVORITES_SET_LIST,
} from "./../actions/favorites";

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case FAVORITES_SET_LIST: {
      const { favorites } = action.payload;
      return favorites;
    }
    case FAVORITES_ADD_RECIPE: {
      const { recipe } = action.payload;
      return [
        ...state,
        { ...recipe },
      ];
    }
    case FAVORITES_REMOVE_RECIPE: {
      const { idMeal } = action.payload;
      return state.filter((recipe) => recipe.idMeal !== idMeal);
    }
    default:
      return state;
  }
};

export default favoritesReducer;
