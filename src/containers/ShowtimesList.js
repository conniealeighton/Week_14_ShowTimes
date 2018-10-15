import React, {Component} from 'react';
import Showtimes from '../components/Showtimes';

class ShowtimesList extends Component {
  render () {
    const showtimeNodes = this.props.data.map(showtime => {
      return (
        <Showtimes title={showtime.title} key={showtime.id}>
          {showtime.text}
        </Showtimes>
      );
    });
    return <div className="showtime-list">{showtimeNodes}</div>;
  }
}

export default ShowtimesList;
