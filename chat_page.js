var firebaseConfig = {
    apiKey: "AIzaSyAKmPiwCtERX2E4vp7NBgelFNjKEG8RUlU",
    authDomain: "let-s-chat-web-app-c856a.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-c856a-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-c856a",
    storageBucket: "let-s-chat-web-app-c856a.appspot.com",
    messagingSenderId: "833860752007",
    appId: "1:833860752007:web:54d80c9a6ecf0f44c91e22"
  };
  
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name : user_name,
      message : msg,
      likes : 0
  });
  document.getElementById("msg").value ="";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}