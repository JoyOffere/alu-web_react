import React, { Component } from 'react';
import Notifications from './src/Notifications/Notifications';
import Login from './src/Login/Login';
import Header from './src/Header/Header';
import Footer from './src/Footer/Footer';
import CourseList from './src/CourseList/CourseList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    return (
      <div className="App">
        <Notifications
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <Header />
        <Login />
        <CourseList />
        <Footer />
      </div>
    );
  }
}

export default App;