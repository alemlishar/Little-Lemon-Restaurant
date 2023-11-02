import React, { Component } from 'react';
import Main from './Main';
import Nav from './Nav';
import Highlightspecials from './Highlightspecials';

export default class Home extends Component {
  render() {
    return (
      <>
        <Nav />
        <Main />
        <Highlightspecials />
      </>
    );
  }
}
