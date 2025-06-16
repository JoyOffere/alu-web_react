import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (user) => ({
  type: LOGIN,
  user,
});

export const logout = () => ({ type: LOGOUT });

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('/dist/login-success.json');
      const data = await response.json();
      // Map login-success.json to user object
      const user = {
        email: data.email,
        firstName: data.first_name,
        lastName: data.last_name,
        profilePicture: data.profile_picture,
      };
      dispatch(login(user));
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
};