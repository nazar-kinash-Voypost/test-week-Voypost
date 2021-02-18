import { CssBaseline, ThemeProvider } from "@material-ui/core";
import StoryBook from "./components/StoryBook/StoryBook";

import { Switch, Route } from "react-router-dom";
import theme from "./common/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Switch>
            <Route path="/story-book" component={StoryBook} />
          </Switch>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
