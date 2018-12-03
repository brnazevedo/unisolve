var database = firebase.database();
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
    firebase.database().ref('user/' + user.uid+'/online').set({
      online: true
    }
  
  ).then(function(){
    return window.location.pathname = '/main.html'
  });
    
  

    } else {
    console.log('user must login')
  }
});



function ck(){
   var pass =document.getElementById("pass").value;
  var mail=document.getElementById("mail").value;
    console.log(pass,mail);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {

    firebase.auth().signInWithEmailAndPassword(mail,pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
     })})
  
     
  }
   

  function face(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
  
    }).catch(function(error) {
   
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
   });
  
   } 

   
   