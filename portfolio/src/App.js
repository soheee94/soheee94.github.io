import React from "react";
import { ScrollProvider } from "./ScrollContext";
import Typography from "./Typography";
import { Switch, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import WorkPage from "./page/WorkPage";

function App() {
  return (
    <Typography>
      <Switch>
        <Route
          path="/"
          component={() => (
            <ScrollProvider>
              <MainPage />
            </ScrollProvider>
          )}
          exact
        />
        <Route path="/work/:title" component={WorkPage} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않아욧!</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </Typography>
  );
}

export default App;
