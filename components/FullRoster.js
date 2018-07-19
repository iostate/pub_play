import React from 'react';
import {Link} from 'react-router-dom';
import PlayerAPI from '../api';
// class FullRoster extends Component {
//   render() {
//     return (
//       <div>
//         <h3>This Is The Full Roster Page</h3>
//       </div>
//     );
//   }
// }

const FullRoster = () => (
  <div>
    <ul>
      {PlayerAPI.all().map(p => (
        <li key={p.number}>
          <Link to={`/roster/${p.number}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FullRoster;
