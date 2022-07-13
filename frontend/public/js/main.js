"use strict";

// jQuery(document).ready(function ($) {
//   $(document).ready(function () {
//     //E-mail Ajax Send
//     $("form").submit(function () {
//       //Change
//       var th = $(this);
//       $.ajax({
//         type: "POST",
//         url: "assets/mail/mail.php",
//         //Change
//         data: th.serialize()
//       }).done(function () {
//         UIkit.notification({
//           message: 'Form sent successfully!',
//           status: 'success',
//           pos: 'top-center',
//           timeout: 5000
//         });
//         setTimeout(function () {
//           // Done Functions
//           th.trigger("reset");
//         }, 1000);
//       });
//       return false;
//     });
//   });
// });

//Get modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen to outside click
window.addEventListener('click', outsideClick);

//Function to open modal
function openModal(){
    modal.style.display = 'block';
}

//Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//Function to close modal if outside is clicked
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

var loadFile = function(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('output');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};