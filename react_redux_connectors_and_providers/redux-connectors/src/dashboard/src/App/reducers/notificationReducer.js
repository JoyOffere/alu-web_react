import { Map } from 'immutable';
import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_NOTIFICATION_FILTER,
} from '../actions/notificationActionTypes';

const initialState = Map({
  loading: false,
  notifications: Map({}),
  filter: 'DEFAULT',
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.loading);
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.set('notifications', Map(action.data));
    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.id), 'isRead'], true);
    case SET_NOTIFICATION_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
};

export default notificationReducer;