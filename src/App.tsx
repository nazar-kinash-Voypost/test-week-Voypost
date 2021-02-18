import { CssBaseline, ThemeProvider } from "@material-ui/core";
import StoryBook from "./components/StoryBook/StoryBook";

import { Switch, Route } from "react-router-dom";
import theme from "./common/theme";
import SignUpForm from "./components/SignUpForm/SignUpForm";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Switch>
            <Route path="/story-book" component={StoryBook} />
            <Route path="/sign-up" component={SignUpForm} />
          </Switch>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
