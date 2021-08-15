import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('pages/Home'));
const NotFound = React.lazy(() => import('pages/NotFound'));

const App: React.FC = () => (
  <Router>
    <React.Suspense fallback={<></>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default App;
