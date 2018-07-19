import React, {Component} from 'react';
import PlayerAPI from '../api';

// My Implementation
/* class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const player = PlayerAPI.get(parseInt(this.props.match.params.number, 10));

    // Render an error message if player wasn't found
    if (!player) {
      return <div>Sorry, but the player was not found</div>;
    } else {
      return (
        <div>
          <h1>
            {player.name} (#{player.number})
          </h1>
          <h2>{player.position}</h2>
        </div>
      );
    }
  }
} */

// Article Implementation, https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
const Player = props => {
  const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }
  return (
    <div>
      <h1>
        {player.name} (#{player.number})
      </h1>
      <h2>{player.position}</h2>
    </div>
  );
};

export default Player;
