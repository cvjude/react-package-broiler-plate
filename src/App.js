import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loader from './components/Loader';
import './App.css';

const HomePage = lazy(() => import('./views/HomePage'));
function App() {
  return (
    <main className='App'>
      <Router>
        <Loader />
        <Suspense fallback={<Loader tempLoad={true} />}>
          <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </Suspense>
      </Router>
    </main>
  );
}

export default hot(module)(App);
