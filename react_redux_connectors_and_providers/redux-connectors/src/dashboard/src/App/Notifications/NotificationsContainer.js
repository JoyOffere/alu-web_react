import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notifications from './Notifications';
import { fetchNotifications, markAsAread, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { fromJS } from 'immutable';

export const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotificationsByType(state),
});

class NotificationsContainer extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return <Notifications {...this.props} />;
  }
}

NotificationsContainer.propTypes = {
  listNotifications: PropTypes.object,
  fetchNotifications: PropTypes.func,
  markAsAread: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

NotificationsContainer.defaultProps = {
  listNotifications: fromJS([]),
  fetchNotifications: () => {},
  markAsAread: () => {},
  setNotificationFilter: () => {},
};

export default connect(mapStateToProps, {
  fetchNotifications,
  markAsAread,
  setNotificationFilter,
})(NotificationsContainer);