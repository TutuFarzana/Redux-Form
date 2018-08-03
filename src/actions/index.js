export const formSubmitted = (name,age,email,phoneNumber) => ({
    type: actions.SUBMIT_FORM,
    name: name,
    age: age,
    email: email,
    phoneNumber: phoneNumber
});

export const actions = {
    SUBMIT_FORM: "FORM_SUBMIT"
};