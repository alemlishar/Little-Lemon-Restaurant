import React, { Component } from 'react';

export default class Highlightspecials extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: '40px',
          width: '100%',
          border: '5px',
          position: 'relative',
          left: '25%',
        }}
      >
        <div
          style={{
            height: '100px',
            width: '100%',
            backgroundColor: 'white',
            position: 'relative',
          }}
        >
          <p
            style={{
              fontSize: '34px',
              fontWeight: 'bold',
              position: 'absolute',
              left: '0',
            }}
          >
            This Weeks Specials!
          </p>
          <button
            style={{
              marginTop: '30px',
              borderColor: '#F4CE14',
              backgroundColor: '#F4CE14',
              borderRadius: '8px',
              width: '120px',
              height: '35px',
              position: 'absolute',
              left: '42%',
            }}
          >
            Online menu
          </button>
        </div>
        {/*  <div
          style={{
            width: '100%',
            backgroundColor: '#495e57',
          }}
        >
          <img
            src={logo}
            width='190px'
            height='220px'
            borderRadius='35px'
            alt='hey'
          ></img>
        </div>*/}
      </div>
    );
  }
}
