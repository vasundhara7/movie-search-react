import React from "react";
import { connect } from "react-redux";

import {
  fetchMovies,
  fetchMovieInfo,
  emptyInfo,
  removeMovies,
} from "../actions";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onFormSubmit = (e) => {
    const { history } = this.props;
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
