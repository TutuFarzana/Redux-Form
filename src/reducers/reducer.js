const initialState = {
  name: "",
  age: "",
  email: "",
  phoneNumber: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_SUBMIT':
      return {
        ...state,
        name: action.name,
        age: action.age,
        email: action.email,
        phoneNumber: action.phoneNumber
      };

    default:
      return state;
  }
}
export default reducer;