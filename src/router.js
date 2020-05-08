import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';

export default [
  {
    exact: true,
    path: "/",
    component: Login,
  },
  {
    path: "/clients",
    component: Home,
  },
]
