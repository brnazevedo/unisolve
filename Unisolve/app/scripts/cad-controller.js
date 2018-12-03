





function cad(){
  var database = firebase.database();
  var flag;
 
    var pass =document.getElementById("pass").value;
    var mail=document.getElementById("mail").value;
    var nome =document.getElementById("nome").value;
    var curso=document.getElementById("curso").value;
   

    if (mail.length < 4) {
        alert('Por favor, entre com um email');
        return;
      }
      if (pass.length < 4) {
        alert('Por favor, entre com a senha');
        return;
      }


    firebase.auth().createUserWithEmailAndPassword(mail, pass).catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
     
        if (errorCode == 'auth/weak-password') {
          alert('A senha é muito fraca!');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        
      });
    

      
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        writeUserData(nome,mail,curso,user.uid)       
        Promise.resolve(writeUserData).then(function(){
          return window.location.pathname = '/main.html'

        } )       

            };
        
      })
      

    }

      
    

function writeUserData(name, email,curso,user) {
      firebase.database().ref('user/'+user).set({
      username: name,
      email: email,
      curso: curso,
      userphoto: 'https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'     
     
    });
     
  };