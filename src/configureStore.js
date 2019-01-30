import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import rootSaga from "./actions/sagas/rootSaga";

import rootReducer from "./reducers";

import * as appActions from "./actions/app";
import sagaMiddleware from "./sagaMiddleware";

const middlewares = [];
middlewares.push(thunk);
middlewares.push(sagaMiddleware);

export default function configureStore() {
  const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
  sagaMiddleware.run(rootSaga);

  // Hot module replacement of reducers has to be explicit since redux v2.0.0
  // See release notes : https://github.com/reduxjs/react-redux/releases/tag/v2.0.0
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return { store };
}
