import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor} from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
