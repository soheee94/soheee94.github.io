import React from "react";

import { ThemeProvider } from "styled-components";
import { ScrollProvider } from "./ScrollContext";
import Typography from "./Typography";
import { Switch, Route } from "react-router-dom";
import Main from "./page/Main";
import Work from "./page/Work";

const theme = {
  main: "#FFDBAF",
  point: "#20202F",
  white: "#fff"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Switch>
          <Route
            path="/"
            component={() => (
              <ScrollProvider>
                <Main />
              </ScrollProvider>
            )}
            exact
          />
          <Route path="/work/:title" component={Work} />
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
    </ThemeProvider>
  );
}

export default App;
