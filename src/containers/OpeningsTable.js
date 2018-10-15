import React, { Component } from "react";
import ShowtimesList from "./ShowtimesList";

class OpeningsTable extends Component {
  constructor (props) {
    super(props);
    this.state= {
      data: [{id: 1, title: "Reservoir Dogs", text: "Time: 23:30"}, {id: 2, title: "Pulp Fiction", text: "Time: 15:00"}, {id: 3, title: "The Hateful Eight", text: "Time: 20:00"}]
    };
  }
  render() {
    return (
      <div className="openings-table">
        <h2> Showtimes List </h2>
        <ShowtimesList data={this.state.data} />
      </div>
    );
  }
}

export default OpeningsTable;
