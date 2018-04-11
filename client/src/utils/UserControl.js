import axios from "axios";

export default {

    // Gets all users
    getUsers: () => {
        return axios.get("/user-route/userRoute");
    },
    // Gets the user with the given id
    getUser: (id) => {
        return axios.get("/user-route/userRoute/" + id);
    },
    // Deletes the user with the given id
    deleteUser: (id) => {
        return axios.delete("/user-route/userRoute/" + id);
    },
    // Saves a user to the database
    saveUser: (userData) => {
        return axios.post("/user-route/userRoute/", userData);
    }
};