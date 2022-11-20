import { Provider } from "react-redux";
import { Router } from "src/router";
import { GlobalStyle } from "src/theme/GlobalStyle";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  );
}

export { App };
