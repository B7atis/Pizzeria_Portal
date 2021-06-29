import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/123`}>Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/abc`}>Event</Link>
  </div>
);

export default Tables;