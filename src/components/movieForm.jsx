import React, { Component } from "react";

class MovieForm extends Component {
  render() {
    const { match, history } = this.props;
    return (
      <div>
        <h1>Movie Form</h1>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
