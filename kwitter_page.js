const firebaseConfig = {
      apiKey: "AIzaSyA3ikz0N0BoSFzDZqiMux7EaNyFEVPYUQ0",
      authDomain: "kwitternew-3c94f.firebaseapp.com",
      databaseURL: "https://kwitternew-3c94f-default-rtdb.firebaseio.com",
      projectId: "kwitternew-3c94f",
      storageBucket: "kwitternew-3c94f.appspot.com",
      messagingSenderId: "499702931592",
      appId: "1:499702931592:web:c26625b149c10a8d5bff3d"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var user_name=localStorage.getItem("user_name");
  console.log(user_name);
  var Room_name=localStorage.getItem("room_name");
  console.log(Room_name);
  function send(){
msg=document.getElementById("msg").value;
console.log(msg);
firebase.database().ref(Room_name).push({ name:user_name, message:msg, like:0 });
document.getElementById("msg").value="";
}

  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location = "index.html";

}

function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
names=message_data["name"];
message=message_data["message"];
like = message_data["like"];
namewithtag= "<h4>"+names + "<img class='user_tick'src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+ message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=namewithtag+messagewithtag+like_button+spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id) { 
  console.log("clicked on like button - " + message_id);
   button_id = message_id; 
   likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1; console.log(updated_likes);
     firebase.database().ref(Room_name).child(message_id).update
     ({ like : updated_likes });
     }