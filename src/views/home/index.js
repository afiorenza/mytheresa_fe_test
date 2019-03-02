import './home.scss';

import React from 'react';
import {
  Autocomplete
} from 'components';

export default class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <Autocomplete />
      </div>
    );
  }
}
