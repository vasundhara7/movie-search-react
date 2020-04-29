let initialState = {
  movies: [],
  movieInfo: {},
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      return {
        ...state,
        movies: action.payload.Search,
        error: "",
      };
    case "MOVIE_INFO":
      return {
        ...state,
        movieInfo: action.payload,
      };
    case "REMOVE_INFO":
      return {
        ...state,
        movieInfo: action.payload,
      };
    case "REMOVE_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
