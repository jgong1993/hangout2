/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
$("#myDropdown").hide();

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function otherFunction(){
  document.getElementById("dropbtn").onclick = myFunction();
}

$(".bigdropdown").click(function(){
  myFunction();
});
$(".otherFunction").click(function(){
  myFunction();
});

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   console.log("1: " + !event.target.matches('.bigdropdown'));
//   console.log("2: " + !event.target.matches('.dropbtn'));
//   if ( !event.target.matches('.bigdropdown') ) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }