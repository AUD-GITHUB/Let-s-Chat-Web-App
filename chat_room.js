var firebaseConfig = {
    apiKey: "AIzaSyAKmPiwCtERX2E4vp7NBgelFNjKEG8RUlU",
    authDomain: "let-s-chat-web-app-c856a.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-c856a-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-c856a",
    storageBucket: "let-s-chat-web-app-c856a.appspot.com",
    messagingSenderId: "833860752007",
    appId: "1:833860752007:web:54d80c9a6ecf0f44c91e22"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            Created : "New Room"
      });

      localStorage.setItem("room_name", room_name);
      console.log(room_name);
      window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      row = "<div id =" + Room_names + " class = 'room_name' onclick = 'redirectToRoomPage(this.id)'>#" + Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomPage(name){
      console.log("name");
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
