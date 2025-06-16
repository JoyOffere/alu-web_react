import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_NOTIFICATION_FILTER,
} from './notificationActionTypes';

export const setLoadingState = (loading) => ({
  type: SET_LOADING_STATE,
  loading,
});

export const setNotifications = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
      const response = await fetch('/dist/notifications.json');
      const data = await response.json();
      // Normalize notifications.json
      const normalizedData = data.reduce((acc, notif) => ({
        ...acc,
        [notif.id]: {
          id: notif.id,
          author: notif.author,
          ...notif.context,
        },
      }), {});
      dispatch(setNotifications(normalizedData));
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      dispatch(setLoadingState(false));
    }
  };
};

export const markAsAread = (id) => ({
  type: MARK_AS_READ,
  id,
});

export const setNotificationFilter = (filter) => ({
  type: SET_NOTIFICATION_FILTER,
  filter,
});