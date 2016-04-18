import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <div className="container">
          <h1>Home page</h1>
          <Helmet title="Home page"/>
        </div>
      </div>
    );
  }
}
