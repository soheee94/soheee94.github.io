import React from "react";
import { ScrollProvider } from "./ScrollContext";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import WorkPage from "./pages/WorkPage";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
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
        <Route
          path="/work/:title"
          component={({ match }) => (
            <ScrollProvider>
              <WorkPage match={match} />
            </ScrollProvider>
          )}
        />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않아욧!</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
