import React, {Component} from 'react';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';
import {render} from 'react-dom';
import './css/style.css';
import 'semantic-ui-css/semantic.min.css';


class Root extends Component {

  render() {
    return (
      <div>
        <App />
      </div>
    )
  }
}

render(<Root />, document.getElementById('root'));