import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// CSS react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Component 
import PersonContainer from './components/PersonContainer';

// Redux
import { Provider } from 'react-redux';
import store from './redux';

ReactDOM.render(
  <Provider store={store}>
    <PersonContainer />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
