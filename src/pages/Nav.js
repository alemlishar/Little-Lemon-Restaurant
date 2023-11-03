import React, { Component } from 'react';
import logo from './../assets/lemmon.png';
import './../style.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Home from './Home';

export default class Nav extends Component {
  render() {
    return (
      <div
        style={{
          border: '2px',
          padding: '10',
          height: '80px',
          width: '100%',
          position: 'relative',
        }}
      >
        <span
          style={{
            border: '5px',
            top: '15px',
            left: '450px',
            position: 'absolute',
          }}
        >
          <img src={logo} width='170px' height={50} alt=''></img>
        </span>
        <div
          style={{
            height: '100%',
            border: '5px',
            top: '10px',
            left: '830px',
            position: 'absolute',
          }}
        >
          <ul style={{ liststyle: 'no-bullet' }}>
            <li
              style={{
                display: 'inline',
                marginLeft: '-80px',
                fontSize: '12px',
                fontWeight: 'bolder',
              }}
            >
              <Link style={{ textDecoration: 'none' }} to='/'>
                Home
              </Link>
            </li>
            <li
              style={{
                display: 'inline',
                marginLeft: '20px',
                fontSize: '10px',
                fontWeight: 'bold',
              }}
            >
              About
            </li>
            <li
              style={{
                display: 'inline',
                marginLeft: '20px',
                fontSize: '10px',
                fontWeight: 'bold',
              }}
            >
              Menu
            </li>
            <li
              style={{
                display: 'inline',
                marginLeft: '20px',
                fontSize: '10px',
                fontWeight: 'bold',
              }}
            >
              <Link style={{ textDecoration: 'none' }} to='/booking'>
                Reservation
              </Link>
            </li>
            <li
              style={{
                display: 'inline',
                marginLeft: '20px',
                fontSize: '10px',
                fontWeight: 'bold',
              }}
            >
              Order online
            </li>
            <li
              style={{
                display: 'inline',
                marginLeft: '20px',
                fontSize: '10px',
                fontWeight: 'bold',
              }}
            >
              Login
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
