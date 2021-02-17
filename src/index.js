import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

//REducer
const initialstate = { items: [] };
const ProductReducer = (state = initialstate, action) => {
  console.log();
  switch (action.type) {
    case "ADD":
      console.warn("STATE", state);
      //console.log(action.payload)
      const newitems = [...state.items, action.payload];
      console.log(newitems);
      return {
        ...state,
        items: newitems,
      };

    case "DELETE":
      const id = action.payload;
      const nextitems = state.items.filter((item) => item.id != id);
      return {
        ...state,
        items: nextitems,
      };

    case "UPDATE":
      const id1 = action.payload.id;
      console.log(id1);
      const items = state.items;
      console.log(items);
      //console.log(items)
      const Index = items.findIndex((item) => item.id == id1);
      console.log(Index);
      items[Index] = action.payload.values;

      return {
        ...state,
        items: items,
      };

    default:
      return state;
  }
};

//ModalREducer
const ModalReducer = (state = { show: false, data: {} }, action) => {
  switch (action.type) {
    case "OPEN":
      console.log(action.payload);
      const _id=action.payload.id;
      const items=action.payload.items
      let data = items.filter((item) => item.id == _id);
      data = data[0];
      console.log(data)
      return {
        ...state,
        show: true,
        data:data
      };

    case "CLOSE":
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: formReducer,
  ProductReducer,
  ModalReducer,
});

const Store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
