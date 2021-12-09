
//firebase config 
var firebaseConfig = {
    apiKey: "AIzaSyCXBYTuIG-YtwVbavq9cqTVn9LlLzQPu48",
    authDomain: "calorie-pal-8c6ab.firebaseapp.com",
    projectId: "calorie-pal-8c6ab",
    storageBucket: "calorie-pal-8c6ab.appspot.com",
    messagingSenderId: "1056260062896",
    appId: "1:1056260062896:web:3da46965064c9971b08575",
    measurementId: "G-TY7HQDVS99"
  };


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();


auth.onAuthStateChanged(function(user) {
    if (user) {
  
        console.log(user.uid);
  
        //getting snapshot of firstname and lastname
        //from database and updating it onto the profile
        database.ref('users/' + user.uid).once('value').then(function(snapshot){
        const first = snapshot.val().firstname.toUpperCase();
        const last = snapshot.val().lastname.toUpperCase();
          document.getElementById("full-name").innerText = "HELLO, " +  first +" "+ last;
          console.log(snapshot.val().firstname)
        });


    }})




    const logout = document.querySelector('#logout');
    logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      location.href = 'loginCalorie.html';
      console.log('user logged out');
    });
    });