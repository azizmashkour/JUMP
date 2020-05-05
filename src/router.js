import Home from './components/pages/Home';
import Login from './components/pages/Login';

export default [
  {
    exact: true,
    path: "/login",
    component: Login,
    authRequired: false
  },
  {
    path: "/",
    component: Home,
    authRequired: true
  },
]
