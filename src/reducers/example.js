const initialState = {
  name: "",
  age: "",
  email: "",
  phno: ""
};
const example = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        name: action.name,
        age: action.age,
        email: action.email,
        phno: action.phno
      };

    default:
      return state;
  }
}
export default example;
