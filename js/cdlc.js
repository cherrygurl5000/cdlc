/*Function to show the menu on smaller screens*/
function showMenu(menus) {
    var change = document.getElementById(menus);
    var change2 = document.getElementById("services-menu");
    
    if(change.style.display == "block") {
        change.style.display = "none";
        change2.style.display = "none";
    }
    else {
        change.style.display = "block";
    }
}
/*Function to hide the menu
function hideMenu() {
  var menu1 = document.getElementById("nav-menu");
  var menu2 = document.getElementById("services-menu");

  if (menu1.style.display == "block" || menu2.style.display == "block") {
    menu1.style.display = "none";
    menu2.style.display = "none";
  }
}

window.addEventListener("click", hideMenu);*/

// Initial slideIndex setting
var slideIndex = 0;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Function for displaying the slides
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var imageBox = document.getElementById("shown");
  if (n > slides.length-1) {slideIndex = 0;}
  if (n < 0) {slideIndex = slides.length;}
  //else {slideIndex = n;}
  
  imageBox.style.width = "90%";
  imageBox.style.height = "300px";
  imageBox.style.marginLeft = "auto";
  imageBox.style.marginRight = "auto";
  imageBox.style.maxWidth = "600px";

  imageBox.style.backgroundImage = 'url('+slides[slideIndex].src+')';
  imageBox.style.backgroundSize = '100% 100%';
  
}

/*Function for checking reasons*/
function checked() {
  var checks = document.querySelectorAll('input[type="checkbox"]:checked').length;
  var reason = document.getElementById("reason");

  if(checks < 1) {
    reason.style.color = "red";
    alert('Requires a Reason!');
    return;
  }
  else {
    reason.style.color = "initial";
  }
}

/*Check recaptcha function*/
function recap() {

  if(grecaptcha && grecaptcha.getResponse().length > 0) {
    mail();
  }
  else {
      //The recaptcha is not cheched
      //You can display an error message here
      alert('You have to check the recaptcha!');
  }
}

/*Function for sending contact email */
function mail() {


  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var checks = document.querySelectorAll('input[type="checkbox"]:checked').length;
  var reason = document.getElementById("reason");
  var i = 0;
  var reasons = "";

  /*Statements for checking reasons*/
  if(checks < 1) {
    reason.style.color = "red";
    alert('Requires a Reason!');
    return;
  }
  else {
    reason.style.color = "initial";
  }

  /*Go through the checkmarks to set the Subject Line*/
  while (i < checks) {
    if(document.getElementById("detail").checked === true) {
      reasons+="Mobile Auto Detailing, ";
      i++;
    }
    if(document.getElementById("inside").checked === true) {
      reasons+="Interior/Exterior Detailing, ";
      i++;
    }
    if(document.getElementById("correct").checked === true) {
      reasons+="Paint Correction, ";
      i++;
    }
    if(document.getElementById("schedule").checked === true) {
      reasons+="Scheduling, ";
      i++;
    }
    if(document.getElementById("other").checked === true) {
      reasons+="Other ";
      i++;
    }
  }

/*Set the email to open in a new window with all information included from the form*/
  window.open("mailto:cdlcauto@gmail.com?subject="+reasons+"&body=Name:%20"+name+
  "%3C%2Fbr%3E %3C%2Fbr%3E"+"Email:%20"+email+"%3C%2Fbr%3E %3C%2Fbr%3E Phone:%20"+phone+
  "%3C%2Fbr%3E %3C%2Fbr%3E Message:%20"+message);

  
}