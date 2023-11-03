import React, { Component, useState } from 'react';
import Nav from './Nav';
import Main from './Main';
import BookingForm from './BookingForm';

export default class BookingPage extends Component {
  render() {
    return (
      <>
        <Nav />
        <Main />
        <BookingForm />
      </>
    );
  }
}
