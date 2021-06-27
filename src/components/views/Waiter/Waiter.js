import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Waiter';
import { Link } from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/:id`}> order id</Link>
  </div>
);

export default Waiter;