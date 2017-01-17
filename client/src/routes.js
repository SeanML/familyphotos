import Base from './components/Base';
import Home from './components/Home';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';

const routes = {
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/signup',
      component: SignUpPage
    }
  ]
};

export default routes;