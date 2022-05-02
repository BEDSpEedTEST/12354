// // make a button that change the background color
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red";
// }
// );
$(document).ready(function() {
$('#s').click(function(){
    $('body').css({
        'color': 'black',
        'background-color': 'white'
    })
})
})