
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
document.getElementById("user_name").innerHTML="welcome! "+ user_name;

function add_room(){
var Room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(Room_name).update({
      purpose:" Buckinhgam palace is my home "
  });
  localStorage.setItem("room_name", Room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='Room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name) { 
      console.log(name); 
      localStorage.setItem("Room_name", name); 
      window.location = "kwitter_page.html";
 }

 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("Room_name");
       window.location = "index.html";

 }