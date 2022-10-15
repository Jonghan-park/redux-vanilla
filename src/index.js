import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (state = 0, action) => {
  if (action.type === "ADD") {
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  } else {
    return state;
  }
};
const store = createStore(reducer);
const onChange = () => {
  number.innerText = store.getState();
};
store.subscribe(onChange);
add.addEventListener("click", () => store.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => store.dispatch({ type: "MINUS" }));
