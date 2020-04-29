import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MovieInfo from "./MovieInfo";
import SearchBar from "./SearchBar";
import Header from "./Header";
import MovieList from "./MovieList";

const App = () => {
  return (
    //
    <div className="ui ">
      <BrowserRouter>
        <Route exact path="/" component={MovieList} />
        <Route path="/movie/info" component={MovieInfo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
