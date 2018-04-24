import axios from 'axios';


export default {
  // Get all User
  getUser: () => {
    return axios.get('/user-route/userRoute');
  },
  // Get user with given id
  getUser: (id) => {
    return axios.get('/user-route/userRoute/' + id);
  },
  deleteUser: (id) => {
    return axios.delete("/user-route/userRoute/" + id);
  },
  saveUser: (userData) => {
    return axios.post("/user-route/userRoute/", userData);
  }
}
