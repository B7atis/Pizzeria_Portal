import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import { Link } from 'react-router-dom';

const Kitchen = () => (
  <div className={styles.component}>
    <h2>Kitchen view</h2>
    <Link to="/orders" className="link">
      Orders
    </Link>
  </div>
);

Kitchen.propTypes = {
  children: PropTypes.node,
};

export default Kitchen;