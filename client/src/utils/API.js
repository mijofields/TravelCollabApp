import axios from "axios";

export default {

  registerUser: function() {
    return axios.post("/api/user/signup");
  }, 
  //Sign In user 
  signInUser: function(username){
    return axios.post("/api/user/signin");
  },
  //Gets All Friend
  getAllFriends: function(username) {
    return axios.get("/api/friends/allFriends");
  }, 

  // Gets the User with the given id
  // getFriendById: function(id) {
  //   return axios.get("/api/friends/" + id);
  // },
  getUserInfo: function(username){
    return axios.get("/api/user")
  },
  //Gets Friend by Username
  getUserByUsername: function(username) {
    return axios.post("/api/friends/:" + username);
  },
  createFriends: function(username) {
    return axios.get("/api/friends/createFriend");
  },
  // Saves a User to the database
  saveFriend: function(friendData) {
    return axios.post("/api/friends", friendData);
  },
  //Delete Friend by ID
  deleteFriend: function(username){
    return axios.delete("/api/friends/:" + username)
  }
};

