import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '../../router';
import './App.css';

class App extends Component{
  routes
  render() {
    return(
      <div>
        <Router>
          <Switch>
              {routes.map((route, i) => {
                return <Route key={i}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              })}
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
