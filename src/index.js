import configureStore from "./store/configureStore";

const store = configureStore();

// store.dispatch((dispatch, getState) => {
//   dispatch({ type: "bugReceived", bugs: [1, 2, 3] });
//   console.log(getState());
// });

store.dispatch({ type: "error", payload: { message: "error message" } });
