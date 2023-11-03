import React, { Component } from 'react';

export default class BookingForm extends Component {
  handleSubmit(event) {
    return null;
  }
  render() {
    return (
      <div
        style={{
          marginTop: '50px',
          position: 'absolute',
          left: '31%',
          width: '650px',
          height: '50%',
          border: '2px solid #F4CE14',
          borderRadius: '20px',
        }}
      >
        <form
          style={{ marginTop: '50px', marginLeft: '20px' }}
          onSubmit={this.handleSubmit}
        >
          <span
            style={{
              fontSize: '16px',
              color: '#495e57',
              fontWeight: 'bold',
            }}
          >
            <label for='res-date'>Choose date</label>
            <input
              type='date'
              id='res-date'
              style={{ marginLeft: '20px', width: '200px' }}
            />
          </span>
          <br />
          <span
            style={{
              marginTop: '20px',
              fontSize: '16px',
              color: '#495e57',
              fontWeight: 'bold',
            }}
          >
            <label for='res-time'>Choose time</label>
            <select
              style={{ marginLeft: '20px', width: '200px' }}
              id='res-time '
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </span>
          <br />
          <span
            style={{
              marginBottom: '100px',
              fontSize: '16px',
              color: '#495e57',
              fontWeight: 'bold',
            }}
          >
            <label for='guests'>Number of guests</label>
            <input
              style={{ marginLeft: '20px', width: '200px' }}
              type='number'
              placeholder='1'
              min='1'
              max='10'
              id='guests'
            ></input>
          </span>
          <br />
          <span
            style={{
              marginBottom: '20px',
              fontSize: '16px',
              color: '#495e57',
              fontWeight: 'bold',
            }}
          >
            <label for='occasion'>Occasion</label>
            <select
              style={{ marginLeft: '20px', width: '200px' }}
              id='occasion'
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </span>
          <br />
          <button
            style={{
              width: '135px',
              height: '35px',
              padding: '0',
              backgroundColor: '#F4CE14',
              borderRadius: '8px',
              marginLeft: '100px',
              marginTop: '20px',
            }}
            type='submit'
          >
            Make a reservation
          </button>
        </form>
      </div>
    );
  }
}
