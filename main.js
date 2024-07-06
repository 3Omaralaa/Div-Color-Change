let the_button = document.getElementById("btn")
var the_Div = document.querySelector(".div")

var the_colors = ["red", "green" , "blue", "yellow"]
let i = 0
// the_button.onclick = function(){
//     the_Div.style.backgroundColor = the_colors[0]
// }
the_button.addEventListener("click",function(){
    the_Div.style.backgroundColor = the_colors[i];
    i++
    if(i == 4){
        i = 0
    }
})