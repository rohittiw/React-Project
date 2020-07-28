import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

const ClaimsPage = React.lazy(() => import('./components/claims/claims'));
const paymentPage = React.lazy(() => import('./components/Pricing/Pricing'));

export default function App() {
    return (
    <React.StrictMode>
      <Header></Header>
      <div className="container-fluid min-height">
      <Router>
        <React.Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path="/" component={ClaimsPage} />
            <Route exact path="/Pricing" component={paymentPage} />
          </Switch>
        </React.Suspense>
      </Router>
      </div>
      <Footer></Footer>
    </React.StrictMode>
    );
}