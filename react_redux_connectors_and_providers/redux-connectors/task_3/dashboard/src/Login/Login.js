import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className={css(styles.login)}>
      <h2>Log in to continue</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className={css(styles.label)}>Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={css(styles.input)}
          required
        />
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={css(styles.input)}
          required
        />
        <button type="submit" className={css(styles.button)}>Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func,
};

Login.defaultProps = {
  login: () => {},
};

const styles = StyleSheet.create({
  login: {
    padding: '2rem',
    textAlign: 'center',
    maxWidth: '400px',
    margin: '2rem auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  label: { display: 'block', margin: '0.5rem 0' },
  input: {
    width: '100%',
    padding: '0.5rem',
    margin: '0.5rem 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
  },
});

export default Login;