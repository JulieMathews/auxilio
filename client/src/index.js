import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/bootstrap.css';
/*import './css/font-awesome.min.css';*/
import './css/responsive.css';
import './css/style.css';
// import './css/style.css.map';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
