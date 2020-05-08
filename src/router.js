import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import GraphWalk from './components/pages/graph-walk/GraphWalk';

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
  {
    path: "/graph-walk-simulator",
    component: GraphWalk,
  },
]
