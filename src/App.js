import React from "react";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import store from "./store";
import routes from "./routes/index";
export const history = createBrowserHistory({});

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <>
        {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </>
      </Provider>
    </Router>
  );
}

export default App;
