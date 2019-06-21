import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./Counter";

/**
 * Os reducers modificam o objeto dependendo da Ação disparada
 */
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

/**
 * A variável store recebe o estado atualizado
 */
const store = createStore(reducer);

store.subscribe(() => {
  console.log("VALOR DO ESTADO:", store.getState());
});

/**
 * O component Provider embrulha todo component que o comṕonente raíz chamar, passando a store atualizada
 */
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
