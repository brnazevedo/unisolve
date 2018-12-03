var database = firebase.database();
var userglobal = 'null';
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    userglobal = user.uid;
    var database = firebase.database();
    var nome = document.getElementById("username");
    var userphoto = document.getElementById("userphoto");
    var curs = document.getElementById("curso");
    var perguntas = document.getElementById("perguntas");
    var resp = document.getElementById("respostas");
    var usrn = firebase.database().ref('user/'+user.uid+'/username');
    var onl = document.getElementById("online");
    var cuserphoto = 'empty';
    var cusername = 'empty';
    

//Recuperar pessoas online

    

    //Recuperar nome no firebase
    var name = firebase.database().ref('user/'+user.uid+'/username');
    name.on("value", function(snapshot) {
      nome.innerHTML = snapshot.val();
      cusername = snapshot.val();
       }, function (error) {
       console.log("Error: " + error.code);
    });

    //Recuperar foto no firebase
    var photo = firebase.database().ref('user/'+user.uid+'/userphoto');
    photo.on("value", function(snapshot) {
      userphoto.innerHTML = ('<img src="'+snapshot.val()+'"width="120" height="120">');
      cuserphoto = snapshot.val();
   }, function (error) {
      console.log("Error: " + error.code);
   });
    
   
   //Recuperar curso no firebase
   var curso = firebase.database().ref('user/'+user.uid+'/curso');
   curso.on("value", function(snapshot) {
     console.log(snapshot.val());
     curs.innerHTML = (snapshot.val());
  }, function (error) {
     console.log("Error: " + error.code);
  });

  //Recuperar pessoas online
  var online = firebase.database().ref('online/'+user.uid+'/online');
    
  online.on("value", function(snapshot) {
    
     if(snapshot.val()==true){
     onl.innerHTML = " <li><a href=\"#\"><img src=\" "+cuserphoto+" \" alt=\""+cusername+"\" id=\"user1\"/></a></li>"
    }}, 
    function (error) {
    console.log("Error: " + error.code);})
        
      


}else{
  return window.location.pathname = '/'
}

;
 }
);

function lout(){
  firebase.database().ref('user/' + userglobal+'/online').set({
    online: false
  })

    firebase.auth().signOut();

 }

 
 function mandar(){
  var question = document.getElementById("question").value;
  var d = new Date();
  var dia = 'empty';
  var mes = 'empty';
  var hora = 'empty';
  var min = 'empty';
    dia = d.getDate();
    mes = d.getMonth();
    min = d.getMinutes();
    hora = d.getHours();
    firebase.database().ref('perguntas/'+userglobal+'/'+dia+'-'+mes+'/'+hora+':'+min).set({
    pergunta: question
 })}














