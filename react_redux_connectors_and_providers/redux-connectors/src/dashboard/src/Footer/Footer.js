import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Map } from 'immutable';

export const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

const Footer = ({ user }) => (
  <footer className={css(styles.footer)}>
    <p>Copyright {new Date().getFullYear()} - Holberton School</p>
    {user && user.size > 0 && (
      <p>Contact us: <a href={`mailto:${user.get('email')}`}>{user.get('email')}</a></p>
    )}
  </footer>
);

Footer.propTypes = {
  user: PropTypes.object,
};

Footer.defaultProps = {
  user: Map({}),
};

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #ddd',
  },
});

export default connect(mapStateToProps)(Footer);