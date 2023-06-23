
const API_ENDPOINT = "http://localhost:3000/api/auth";

const register = (username, email, password) => {
    const data = axios.post(API_ENDPOINT + "register",
        {
            username,
            email,
            password
        },
        {}
    );
    return data;
};

const login = (username, password) => {
    return axios.post(API_ENDPOINT + "login", {
        username,
        password
    },
    {});
};

const AuthServices = {
    register,
    login
};