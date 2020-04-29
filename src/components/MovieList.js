import React from "react";
import { connect } from "react-redux";
import { fetchMovieInfo, emptyInfo, fetchMovies } from "../actions";
import Header from "./Header";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class MovieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies("thor");
  }
  getInfo = (e) => {
    console.log("the vlaue", e.target.value);
    this.props.emptyInfo();
    this.props.fetchMovieInfo(e.target.value);
    this.props.history.push("/movie/info");
  };
  renderMovies = () => {
    const { movies } = this.props;
    const { error } = this.props;
    return movies.map((movie, key) => (
      <div className="twelve wide tablet five wide computer column " key={key}>
        <div className="ui special cards">
          <div className="card">
            <div className="blurring dimmable image">
              <div className="ui dimmer">
                <div className="content">
                  <div className="center">
                    <div className="ui inverted button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src={movie.Poster} style={{ height: 300 }} />
            </div>
            <div className="content">
              <button
                value={movie.imdbID}
                onClick={this.getInfo}
                className="ui transparent button"
              >
                {movie.Title}
              </button>
            </div>
            <div className="extra content">
              <div className="meta">
                <span className="date">Released in {movie.Year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  render() {
    const { movies } = this.props;
    const { error } = this.props;
    console.log("here list", movies);
    console.log("ERRRR", error);

    if (movies && movies.length) {
      return (
        <>
          <Header history={this.props.history} />
          <div className="ui container">
            <h2 className="ui centered inverted red header">Search Results</h2>
            <div className="ui centered grid">{this.renderMovies()}</div>
          </div>
        </>
      );
    } else if (error != "") {
      return (
        <>
          <Header history={this.props.history} />
          <div className="ui container">
            <h2 className="ui inverted red header">No movies found!</h2>
            <h3>Try checking the spelling or search for another movie</h3>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Header history={this.props.history} />
          <Loader
            type="Puff"
            color="red"
            height={100}
            width={100}
            timeout={5000} //3 secs
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </>
      );
    }
  }
}
const mapStateToProps = ({ movieSearch }) => {
  return { movies: movieSearch.movies, error: movieSearch.error };
};

export default connect(mapStateToProps, {
  fetchMovieInfo,
  emptyInfo,
  fetchMovies,
})(MovieList);
