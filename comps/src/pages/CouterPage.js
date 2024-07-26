import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";
// import { useState } from "react";
import { useReducer } from "react";
const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change_value_to_add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      //   return {
      //     ...state,
      //     count: state.count + 1,
      //   };

      //immer
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      //   return {
      //     ...state,
      //     count: state.count - 1,
      //   };

      // immer
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      //   return {
      //     ...state,
      //     valueToAdd: action.payload,
      //   };

      // immer
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      //   return {
      //     ...state,
      //     count: state.count + state.valueToAdd,
      //     valueToAdd: 0,
      //   };

      // immer
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      throw new Error("unexpected action type:" + action.type);
  }
};
function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);

  //   if you use useReducer you could code like this
  //   const [state, dispatch] = useReducer(reducer, {
  //     count: initialCount,
  //     valueToAdd: 0,
  //   });

  // if you use immer library you could code like this
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  //   const [valueToAdd, setValueToAdd] = useState(0);
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot !</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}
export default CounterPage;
