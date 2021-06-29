import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className={styles.component}>
    <header className="App-header">
      <h2>Homepage view</h2>
      <Link
        className="App-link"
        to="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </header>
  </div>
);

export default Homepage;