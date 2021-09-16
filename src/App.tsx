import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useFetchUser } from 'state/user/hooks';
import Navbar from 'components/Navbar';
import ProtectedRoute from 'components/ProtectedRoute';

const Home = React.lazy(() => import('pages/Home'));
const Register = React.lazy(() => import('pages/Register'));
const Login = React.lazy(() => import('pages/Login'));
const Article = React.lazy(() => import('pages/Article'));
const Settings = React.lazy(() => import('pages/Settings'));
const NotFound = React.lazy(() => import('pages/NotFound'));

const App: React.FC = () => {
  useFetchUser();
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="/article" component={Article} />
          <ProtectedRoute path="/settings" component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
