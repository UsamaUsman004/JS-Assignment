//Google Auth
function GooglesignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            document.getElementById('ChatBox').removeAttribute('style');
            document.getElementById('loginBox').setAttribute('style', 'display:none');
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            alert(errorMessage);
            // ...
        });
}


function signOut() {
    firebase.auth().signOut();
    console.log('success');
    document.getElementById('loginBox').removeAttribute('style');
    document.getElementById('ChatBox').setAttribute('style', 'display:none');
}

function sendMessage() {
    var message = `<div class="row justify-content-end" id="Sender">
                        <div class="col-md-5">
                            <p class="alert alert-secondary text-dark float-right" style="display: inline-block;">
                            ${document.getElementById('textMessage').value}
                            <small class="ml-5 text-muted">2:07</small>
                            </p>
                        </div>
                        <div class="col-md-1">
                            <img src="pp.png" class="profile">
                        </div>
                    </div>`;

    document.getElementById('messageArea').innerHTML += message;
    document.getElementById('textMessage').value = "";
    document.getElementById('textMessage').focus();

    // Scroll Down to the last Message
    document.getElementById('messageArea').scrollTo(0, document.getElementById('messageArea').clientHeight);

}

// Email Authentication

//For SignUp
let SignUp =()=>{
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then((result) => {
		console.log(result);
	})
	.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  console.log(errorMessage);
})

}

//For SignIn
let SignIn = () => {
	let email = document.getElementById("SignIn_email").value;
	let password = document.getElementById("SignIn_password").value;

	firebase.auth().signInWithEmailAndPassword(email, password)
	.then((result) => {
		document.getElementById('ChatBox').removeAttribute('style');
        document.getElementById('loginBox').setAttribute('style', 'display:none');
	})
	.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  
});
}
