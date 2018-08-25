import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Root extends Component {
  renderInitialData() {
    let innerHtml = '';
    if (this.props.initialData) {
      innerHtml += `window.__initialData__ = ${JSON.stringify(this.props.initialData)};`;
    }
    if (this.props.reduxData) {
      innerHtml += `window.__reduxData__ = ${JSON.stringify(this.props.reduxData)};`;
    }

    if (this.props.user) {
      innerHtml += `window.__user__ = ${JSON.stringify(this.props.user)};`;
    }

    return (
      <script dangerouslySetInnerHTML={{__html: innerHtml}} />
    );
  }

  render() {
    const head = this.props.head;
    
    let JS = [
      'http://localhost:8080/manifest.js',
      'http://localhost:8080/vendor.js',
      'http://localhost:8080/main.js'
    ];
    
    let CSS = [
      'http://localhost:8080/vendor.styles.css',
      'http://localhost:8080/styles.css'
    ];

    return (
      <html className="CodingTournament">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {CSS.map((style, key) => <link key={key} href={style} rel="stylesheet" type="text/css" />)}
          <link rel="shortcut icon" href="/public/favicon.ico"/>
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{__html: this.props.content}} />
          {this.renderInitialData()}
          {JS.map((file, index) => <script key={index} src={file} />)}
        </body>
      </html>
    );
  }
}

Root.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object,
  initialData: PropTypes.object,
  reduxData: PropTypes.object,
  head: PropTypes.object,
  content: PropTypes.string,
  assets: PropTypes.object
};

export default Root;
