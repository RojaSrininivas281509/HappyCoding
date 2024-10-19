import React, { useReducer } from 'react';

// Reducer function to manage form state
const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return action.initialState;
    default:
      return state;
  }
};

const Form = () => {
  const initialState = { name: '', email: '', password: '' };

  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM', initialState });
  };

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="button" onClick={handleReset}>
        Reset Form
      </button>
    </form>
  );
};
export default Form;