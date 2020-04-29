import React from "react";
import { connect } from "react-redux";

import {
  fetchMovies,
  fetchMovieInfo,
  emptyInfo,
  removeMovies,
} from "../actions";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  //   componentDidMount() {
  //     this.props.fetchMovies("thor");
  //   }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onFormSubmit = (e) => {
    const { history } = this.props;
    console.log(history, "<===");
    e.preventDefault();
    console.log("submitted term", this.state.term);

    if (this.state.term.length < 3) {
      alert("Please enter search term of more than 3 alphabets");
      return;
    } else {
      this.props.removeMovies();
      this.props.fetchMovies(this.state.term);
      history.push("/");
    }
  };
  //   getInfo = (e) => {
  //     console.log("the vlaue", e.target.value);
  //     this.props.emptyInfo();
  //     this.props.fetchMovieInfo(e.target.value);
  //     this.props.history.push("/movie/info");
  //   };
  //   renderMovies = () => {
  //     const { movies } = this.props;
  //     return movies.map((movie, key) => (
  //       <div key={key}>
  //         {movie.Title}
  //         <br />
  //         {movie.imdbID}
  //         <button value={movie.Title} onClick={this.getInfo}>
  //           get info
  //         </button>
  //       </div>
  //     ));
  //   };

  render() {
    const { movies } = this.props;
    console.log("props-----", this.props);

    return (
      //
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field" style={{ padding: 5 }}>
            <input
              id="term"
              type="text"
              placeholder="Movie Search"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
        {/* {movies.length && this.renderMovies()} */}
      </div>
    );
  }
}

const mapStateToProps = ({ movieSearch }) => {
  return { movies: movieSearch.movies };
};

export default connect(mapStateToProps, {
  fetchMovies,
  fetchMovieInfo,
  emptyInfo,
  removeMovies,
})(SearchBar);
