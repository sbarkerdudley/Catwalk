import React from 'react';

var alertComingSoon = (event) => {
  event.preventDefault();
  alert('This feature is coming soon. Thank you for your patience!');
};

var Share = () => {

  return (
    <div id="share">
      <ul>
        <li className='share'>
          <a href="#" onClick={alertComingSoon}>
            <span className="fab fa-facebook-square"></span>
          </a>
        </li>
        <li className='share'>
          <a href="#" onClick={alertComingSoon}>
            <span className="fab fa-twitter-square"></span>
          </a>
        </li>
        <li className='share'>
          <a href="#" onClick={alertComingSoon}>
            <span className="fab fa-pinterest-square"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Share;