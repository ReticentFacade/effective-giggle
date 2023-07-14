import axios from 'axios';

const API_ENDPOINT = "http://localhost:5000/api/auth";

const register = (username, password) => {
    return axios.post(API_ENDPOINT + "/user-registered", {
        username,
        password
    });
};

const AuthService = {
    register
};

export default AuthService;