import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';

const Home = React.lazy(() => import('pages/Home'));
const Register = React.lazy(() => import('pages/Register'));
const Login = React.lazy(() => import('pages/Login'));
const NotFound = React.lazy(() => import('pages/NotFound'));

const App: React.FC = () => (
  <Router>
    <Navbar />
    <React.Suspense fallback={<></>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default App;
