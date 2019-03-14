import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';


// Reducers:
import reducers from './Reducers';
// Components:
import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/signUp';
import SignIn from "./components/auth/signIn";
import SignOut from "./components/auth/signOut";

import StockPile from './components/stockPile';
// import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducers,
  {
    // To inital State adding the JWT for authentication
    auth: {authenticated: localStorage.getItem('token')}
  },
  applyMiddleware(reduxThunk)
)

// Settting Axios Default Header:
axios.defaults.headers.common["x-auth"] = localStorage.getItem("token");


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/stockpile" component={StockPile} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
