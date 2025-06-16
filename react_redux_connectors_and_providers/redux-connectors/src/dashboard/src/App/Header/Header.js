import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { logout } from '../actions/uiActionCreators';
import { Map } from 'immutable';

export const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

const Header = ({ user, logout }) => (
  <header className={css(styles.header)}>
    <img src="/dist/logo.png" alt="Holberton Logo" className={css(styles.logo)} />
    {user && user.size > 0 && (
      <div className={css(styles.userInfo)}>
        <p>Welcome {user.get('firstName')} {user.get('lastName')} ({user.get('email')})</p>
        <a href="#/" onClick={logout} className={css(styles.logout)}>Logout</a>
      </div>
    )}
  </header>
);

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

Header.defaultProps = {
  user: Map({}),
  logout: () => {},
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #ddd',
  },
  logo: { height: '40px' },
  userInfo: { display: 'flex', alignItems: 'center' },
  logout: { color: 'red', marginLeft: '1rem', textDecoration: 'none' },
});

export default connect(mapStateToProps, { logout })(Header);