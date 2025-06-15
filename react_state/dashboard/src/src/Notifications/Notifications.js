import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

function Notifications({ displayDrawer, handleDisplayDrawer, handleHideDrawer }) {
  return (
    <div className="Notifications">
      <div className="menuItem" onClick={handleDisplayDrawer}>
        Your notifications
      </div>
      {displayDrawer && (
        <div className="NotificationsPanel">
          <button
            style={{ float: 'right' }}
            aria-label="Close"
            onClick={handleHideDrawer}
          >
            X
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <li>Notification 1</li>
            <li>Notification 2</li>
          </ul>
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;