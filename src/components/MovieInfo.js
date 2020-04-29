import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import isEmpty from "lodash/isEmpty";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class MovieInfo extends React.Component {
  render() {
    const { info } = this.props;

    console.log("info here", info);
    if (isEmpty(info)) {
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
    } else
      return (
        <>
          <Header history={this.props.history} />
          <div className="ui container">
            <div class="ui celled grid">
              <div class="row">
                <div class="six wide column centered">
                  <img src={info.Poster} />
                </div>
                <div class="eight wide column">
                  <span>
                    <h1 className="ui red inverted header">{info.Title}</h1>(
                    {info.Genre})
                  </span>{" "}
                  <div className="ui subheader">{info.Language}</div>
                  <br />
                  <div className="ui subheader">
                    IMDB Rating:{info.imdbRating}
                  </div>
                  {/* <h3>Ratings</h3>
                <p>{getRatings()}</p> */}
                  <h3>Cast</h3>
                  <p>{info.Actors}</p>
                  <h3>Plot</h3>
                  <p>{info.Plot}</p>
                  {/* <div className="ui row">
                  <div className="column">
                    <h3>Director</h3>
                    <p>{info.Director}</p>
                  </div>
                  <div className=" column">
                    <h3>Box Office Collection</h3>
                    <p>{info.BoxOffice}</p>
                  </div>
                </div> */}
                  <div class="ui grid">
                    <div class="ten wide column">
                      <h3>Director</h3>
                      <p>{info.Director}</p>
                    </div>
                    <div class="ten wide column tablet six wide computer column">
                      {" "}
                      <h3>Box Office Collection</h3>
                      <p>{info.BoxOffice}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="three wide column">
                  <p>Runtime</p>
                  <p>{info.Runtime}</p>
                </div>
                <div class="ten wide column">
                  <p>
                    <strong>Writers:</strong> {info.Writer}
                  </p>
                </div>
                <div class="three wide column">
                  <p>Release date</p>
                  <p>{info.Released}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
  }
}

const mapStateToProps = ({ movieSearch }) => {
  return { info: movieSearch.movieInfo };
};

export default connect(mapStateToProps)(MovieInfo);
