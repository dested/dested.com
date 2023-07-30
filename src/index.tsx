import React from 'react';
import ReactDOM, {hydrate, render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import './index.css';
import {Home} from './pages/home/home';
import {Love} from './pages/love/love';
import reducers, {Store} from './reducers';
import * as serviceWorker from './serviceWorker';
const store = createStore<Store>(reducers);

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/love" component={Love} />
            <Route render={() => <Redirect to={'/'} />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
