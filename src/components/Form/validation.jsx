const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,4}$/i;
const regexPassword = "^(?=.*[A-Za-z])(?=.*)[A-Za-z]{8,}$"
// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/gm
// const regexPassword = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$";

const Validate = (inputs) => {
    const errors = {}
    if (!inputs.username) {
        errors.username = "Username must not be empty"
    }
    else if (!regexEmail.test(inputs.username)) {
        errors.username = "Username must be a valid  email"
    }
    else if (inputs.username.length > 35) {
        errors.username = "Username must not have more than 35 characters"
    }
    else if (!inputs.password) {
        errors.password = "Password must not be empty"
    }
    else if (!regexPassword.test(inputs.password)) {
        errors.password = "Password must have at least ona character and one number"
    }
    return errors
}

export default Validate;