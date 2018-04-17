// const {google} = require('googleapis');


// export default {
//     signOut: function () {
//     var auth2 = google.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }

// };
$("#sign-out").click(function(){

    console.log(`about to sign out`);

    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(

console.log("user signed out")

    );


});
