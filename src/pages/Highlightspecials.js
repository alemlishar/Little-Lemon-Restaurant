import React, { Component } from 'react';
import greekSalad from './../assets/greek salad.jpg';
import lemoDesert from './../assets/lemon dessert.jpg';
import bruchetta from './../assets/bruchetta.png';

export default class Highlightspecials extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          marginTop: '40px',
          height: '600px',
          border: '5px',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100px',
          }}
        >
          <p
            style={{
              left: '31%',
              fontSize: '28px',
              fontWeight: 'bold',
              position: 'absolute',
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
              width: '140px',
              height: '35px',
              position: 'absolute',
              left: '64%',
            }}
          >
            Online menu
          </button>
        </div>
        <div
          style={{
            height: '400px',
            border: '20px',
            position: 'absolute',
            left: '31%',
          }}
        >
          <div
            style={{
              width: '200px',
              float: 'left',
              border: '1px solid #EDEfEE',
              left: '50%',
              height: '350px',
              marginTop: '20px',
              backgroundColor: '#EDEfEE',
            }}
          >
            <img
              src={greekSalad}
              width='200px'
              height='160px'
              alt=''
              borderRadius='10px'
            ></img>
            <span
              style={{
                display: 'inline-flex',
                marginTop: '10px',
                marginRight: '2px',
              }}
            >
              <p
                style={{
                  marginLeft: '10px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Greek Salad
              </p>
              <p
                style={{
                  marginLeft: '50px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#EE9972',
                }}
              >
                $12.99
              </p>
            </span>
            <p
              style={{
                marginTop: '20px',
                marginLeft: '10px',
                marginRight: '5px',
                fontSize: '10px',
              }}
            >
              The famous greek salad of crispy lettuce, peppers, olives and our
              chicago stylefeta cheese garnished with crunchy garlic and
              rosemary croutons
            </p>
            <p
              style={{
                marginTop: '45px',
                marginLeft: '10px',
                marginRight: '5px',
                fontSize: '10px',
                fontWeight: 'bold',
              }}
            >
              Order a delivery
            </p>
          </div>
          <div
            style={{
              width: '200px',
              float: 'left',
              border: '1px solid #EDEfEE',
              height: '350px',
              marginTop: '20px',
              marginLeft: '20px',
              backgroundColor: '#EDEfEE',
            }}
          >
            <img
              src={bruchetta}
              width='200px'
              height='160px'
              alt=''
              borderRadius='10px'
            ></img>
            <span
              style={{
                display: 'inline-flex',
                marginTop: '10px',
                marginRight: '2px',
              }}
            >
              <p
                style={{
                  marginTop: '10px',
                  marginLeft: '10px',
                  marginRight: '5px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Brucheta
              </p>
              <p
                style={{
                  marginLeft: '50px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#EE9972',
                }}
              >
                $12.99
              </p>
            </span>
            <p
              style={{
                marginTop: '20px',
                marginLeft: '10px',
                marginRight: '5px',
                fontSize: '10px',
              }}
            >
              Our Brucheta is made from grilled bread that has been seared with
              garlic and seasoned with salt and olive oil
            </p>
            <p
              style={{
                marginTop: '45px',
                marginLeft: '10px',
                marginRight: '5px',
                fontSize: '10px',
                fontWeight: 'bold',
              }}
            >
              Order a delivery
            </p>
          </div>
          <div
            style={{
              width: '200px',
              float: 'left',
              border: '1px solid #EDEfEE',
              height: '350px',
              marginTop: '20px',
              marginLeft: '20px',
              backgroundColor: '#EDEfEE',
              borderRadius: '10px',
            }}
          >
            <img src={lemoDesert} width='200px' height='160px' alt=''></img>
            <span
              style={{
                display: 'inline-flex',
                marginTop: '10px',
                marginRight: '2px',
              }}
            >
              <p
                style={{
                  marginTop: '10px',
                  marginLeft: '10px',
                  marginRight: '5px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Lemon Desert
              </p>
              <p
                style={{
                  marginLeft: '40px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#EE9972',
                }}
              >
                $12.99
              </p>
            </span>
            <p
              style={{
                marginTop: '25px',
                marginLeft: '10px',
                marginRight: '5px',
                fontSize: '10px',
              }}
            >
              This comes straight from grandmas recipe book, every last
              ingrident has been sourced and is as authentic as can be imagined
            </p>
            <p
              style={{
                marginTop: '45px',
                marginLeft: '10px',
                marginRight: '5px',
                fontSize: '10px',
                fontWeight: 'bold',
              }}
            >
              Order a delivery
            </p>
          </div>
        </div>
      </div>
    );
  }
}
