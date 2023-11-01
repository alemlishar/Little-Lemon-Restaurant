import React, { Component } from 'react';
import logo from './../assets/restauranfood.jpg';

export default class Main extends Component {
  render() {
    return (
      <div
        style={{
          border: '2px',
          backgroundColor: '#495e57',
          height: '200px',
          width: '100%',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', left: '25%' }}>
          <p
            style={{
              fontSize: '18px',
              color: '#F4CE14',
              marginBottom: '2px',
            }}
          >
            Little Lemmon
          </p>
          <text
            style={{
              padding: '0',
              marginBottom: '1px',
              fontSize: '16px',
              color: 'white',
            }}
          >
            Chicago
          </text>
          <h6
            style={{
              color: 'white',
              fontSize: '10px',
              maxWidth: '22ch',
              padding: '0',
              marginBottom: '5px',
            }}
          >
            We are family owned Meditrannean restaurant, focus on traditional
            recipes served with a modern twist.
          </h6>
          <button
            style={{
              padding: '0',
              backgroundColor: '#F4CE14',
              borderRadius: '8px',
            }}
          >
            Reserve a Table
          </button>
        </div>
        <div
          style={{
            position: 'absolute',
            marginTop: '20px',
            left: '64%',
            borderRadius: '15px',
            display: 'inline-block',
            overflow: 'hidden',
          }}
        >
          <img
            src={logo}
            width='190px'
            height='220px'
            borderRadius='35px'
            alt='hey'
          ></img>
        </div>
      </div>
    );
  }
}
