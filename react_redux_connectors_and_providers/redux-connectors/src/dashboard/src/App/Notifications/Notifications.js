import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import { fromJS } from 'immutable';

const Notifications = ({
  displayDrawer,
  listNotifications,
  markAsAread,
  setNotificationFilter,
}) => (
  <div className={css(styles.notifications)}>
    <div className={css(styles.menuItem)}>Your notifications</div>
    {displayDrawer && (
      <div className={css(styles.panel)}>
        <p>Here is the list of notifications</p>
        <button
          onClick={() => setNotificationFilter('URGENT')}
          className={css(styles.button)}
          aria-label="Show urgent notifications"
        >
          ‼️
        </button>
        <button
          onClick={() => setNotificationFilter('DEFAULT')}
          className={css(styles.button)}
          aria-label="Show all notifications"
        >
          💠
        </button>
        <ul className={css(styles.list)}>
          {listNotifications.size === 0 && (
            <li className={css(styles.noNotifications)}>No new notifications</li>
          )}
          {listNotifications.map((notification) => (
            <NotificationItem
              key={notification.get('id')}
              type={notification.get('type')}
              value={notification.get('value')}
              markAsRead={() => markAsAread(notification.get('id'))}
            />
          ))}
        </ul>
      </div>
    )}
  </div>
);

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  markAsAread: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: fromJS([]),
  markAsAread: () => {},
  setNotificationFilter: () => {},
};

const styles = StyleSheet.create({
  notifications: { position: 'absolute', top: '10px', right: '10px', zIndex: 1000 },
  menuItem: { cursor: 'pointer', padding: '0.5rem' },
  panel: {
    border: '1px solid #ccc',
    padding: '1rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  button: { margin: '0 0.5rem', cursor: 'pointer' },
  list: { listStyle: 'none', padding: 0 },
  noNotifications: { padding: '0.5rem' },
});

export default Notifications;