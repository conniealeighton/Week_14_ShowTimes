import React, { Component } from "react";

class Showtimes extends Component {
  render() {
    return (
      <div className="showtime">
        <h4 className="showtime-title">{this.props.title}</h4>
        {this.props.children}
      </div>
    );
  }
}

export default Showtimes;
