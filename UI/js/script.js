

function onReady(callback) {
    /** Checks if the webpage has loaded fully before proceeding to run the app **/
    document.readyState === "interactive" || document.readyState === "complete"
      ? callback()
      : document.addEventListener("DOMContentLoaded", callback);
  }
function runApp(){
var signinModal = document.getElementById('signin');
var signinButton = document.getElementById('sign-in');
var signupButton = document.getElementById('sign-up');
var span = document.getElementsByClassName('close')[0];  /**  Get the <span> element that closes the modal  */


signinButton.addEventListener('click', () => {
   signinModal.style.display = 'block';
});
span.onclick = () => {
   signinModal.style.display = 'none';
}

signupButton.addEventListener('click', () => {
window.location.assign("signup.html");
});


}
onReady(runApp);
