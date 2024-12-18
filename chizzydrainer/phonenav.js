// var phonenav = document.getElementById('phonenav');
// var menu = document.getElementById('open');
// var cancel = document.getElementById('cancel');

// function opener() {
//     // phonenav.style.display = 'block'
//     menu.style.display = 'none'
//     cancel.style.display = 'block'
// }

// function closer() {
//     phonenav.style.display = 'none'
//     cancel.style.display = 'none'
//     menu.style.display = 'block'
// }


$(document).ready(function(){
    $("#menu").click(function(){
    $("#phonenav").show(1000)      
    $("#menu").hide(1000)
    $(".cancel").show(1000)
    });
  });
  
$(document).ready(function(){
    $(".cancel").click(function(){
    $("#phonenav").hide(1000)
    $(".cancel").hide(1000)
    $("#menu").show(1000)
    });
  });
  


// var phonenav = document.getElementById('phonenav');

// function opennav() {
//   phonenav.style.visibility = 'visible'
// }

// function closenav() {
//   phonenav.style.visibility = 'hidden'
// }