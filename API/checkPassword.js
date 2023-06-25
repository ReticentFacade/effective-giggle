
const checkPassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/;

    return regex.test(password);
};

const getPasswordRules = () => {
    return [
        "- At least one digit (0-9)",
        "- At least one lowercase letter (a-z)",
        "- At least one uppercase letter (A-Z)",

    ];
};

const Pw = {
    checkPassword,
    getPasswordRules
}

export default Pw;