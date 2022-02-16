import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Spinner from '../Components/Shared/Spinner';
import Forbidden from '../Components/Shared/Forbidden';

const TodoRoutes = lazy(() => import('./todo'));
const AuthRoutes = lazy(() => import('./auth'));

const MainRoutes = () => {

  return (
    <Router>
       <Suspense
        fallback={<Spinner type="TailSpin" color="#002147" height={80} width={80} text="To-Do List" />}>
        <Switch>
          <Route path="/" component={TodoRoutes} />
          <Route path="/auth" component={AuthRoutes} />
          <Route path="/forbidden" component={Forbidden} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default MainRoutes;