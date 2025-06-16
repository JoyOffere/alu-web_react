import { createSelector } from 'reselect';
// import { fromJS } from 'immutable';

const getNotifications = (state) => state.notifications.get('notifications');
const getFilter = (state) => state.notifications.get('filter');

export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFilter],
  (notifications, filter) => {
    return notifications
      .valueSeq()
      .filter((notification) => !notification.get('isRead'))
      .filter((notification) =>
        filter === 'URGENT' ? notification.get('type') === 'urgent' : true
      )
      .toList();
  }
);