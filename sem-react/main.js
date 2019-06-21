const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const { createStore } = Redux;
const store = createStore(counter);

store.subscribe(() => {
  console.log("disparou uma ação!");
});

console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());

store.dispatch({ type: "DECREMENT" });
console.log(store.getState());

const display = document.getElementById("display");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", handleIncrement, false);
decrementButton.addEventListener("click", handleDecrement, false);

function handleIncrement() {
  store.dispatch({ type: "INCREMENT" });
}

function handleDecrement() {
  store.dispatch({ type: "DECREMENT" });
}

store.subscribe(() => {
  display.innerText = store.getState();
});
