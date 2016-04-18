import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Survey extends Component {
  render() {
    return (
      <div className="container">
        <h1>Survey Page</h1>
        <Helmet title="Survey Page"/>
      </div>
    );
  }
}
