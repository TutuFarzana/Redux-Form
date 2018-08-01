export const addButtonClicked = (name,age,email,phno) => ({
  type: exampleActions.ADD,
  name: name,
  age: age,
  email: email,
  phno: phno
});

export const exampleActions = {
  ADD: 'INCREMENT'
};
