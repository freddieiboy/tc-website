/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Empty from '../components/Empty/Empty';

export default class extends Component {

  render() {
    const empty = <Empty />;

    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <h1>Tinycrate is coming soon.</h1>
        </div>
        <div className="theseCratesYo" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
          {empty}
        </div>
      </div>
    );
  }

}
