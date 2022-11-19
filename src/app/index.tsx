import { Provider } from "react-redux";
import { Router } from "src/router";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export { App };
