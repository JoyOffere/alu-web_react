import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotificationsContainer from './Notifications/NotificationsContainer';
import Header from './Header/Header';
import Footer from '../Footer/Footer';
import CourseList from './CourseList/CourseList';
import Login from '../Login/Login';
import { StyleSheet, css } from 'aphrodite';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './actions/uiActionCreators';
// import { Map } from 'immutable';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

class App extends React.Component {
  render() {
    const { isLoggedIn, displayDrawer, login } = this.props;
    return (
      <div className={css(styles.app)}>
        <NotificationsContainer displayDrawer={displayDrawer} />
        <Header />
        {isLoggedIn ? <CourseList /> : <Login login={login} />}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
};

const styles = StyleSheet.create({
  app: { fontFamily: 'Arial, sans-serif' },
});

export default connect(mapStateToProps, {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
})(App);