import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, value, markAsRead }) => (
  <li
    className={css(type === 'urgent' ? styles.urgent : styles.default)}
    onClick={markAsRead}
  >
    {value}
  </li>
);

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  markAsRead: () => {},
};

const styles = StyleSheet.create({
  default: { color: 'blue', padding: '0.5rem', cursor: 'pointer' },
  urgent: { color: 'red', padding: '0.5rem', cursor: 'pointer' },
});

export default NotificationItem;