
var firebaseConfig = {
    apiKey: "AIzaSyDVjoGBldQppV6u-cCLRqpnOStJsYQLif0",
    authDomain: "paradise-f22cd.firebaseapp.com",
    databaseURL: "https://paradise-f22cd-default-rtdb.firebaseio.com",
    projectId: "paradise-f22cd",
    storageBucket: "paradise-f22cd.appspot.com",
    messagingSenderId: "41834335176",
    appId: "1:41834335176:web:f47df743624a13a281cefd",
    measurementId: "G-M626V01YGQ"
  };
firebase.initializeApp(firebaseConfig),

  user_name = localStorage.getItem("user_name"),

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
