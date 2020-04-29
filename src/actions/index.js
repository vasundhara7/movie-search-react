import omdb from "../apis/omdb";

export const fetchMovies = (title) => {
  return async (dispatch) => {
    try {
      const response = await omdb.get("/", {
        params: {
          apikey: "4202c2aa",
          s: title,
        },
      });
      console.log("response received", response.data);
      response.data.Response === "True"
        ? dispatch({ type: "SEARCH_MOVIES", payload: response.data })
        : dispatch({ type: "SET_ERROR", payload: response.data.Error });
    } catch (err) {
      console.log(err);
    }
  };
};

export const emptyInfo = () => {
  return {
    type: "REMOVE_INFO",
    payload: {},
  };
};

export const removeMovies = () => {
  return {
    type: "REMOVE_MOVIES",
    payload: [],
  };
};

export const fetchMovieInfo = (title) => {
  return async (dispatch) => {
    const response = await omdb.get("/", {
      params: {
        apikey: "4202c2aa",
        i: title,
        plot: "full",
      },
    });
    console.log("response received_info", response.data);
    dispatch({ type: "MOVIE_INFO", payload: response.data });
  };
};
