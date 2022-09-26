let menuStatus = false;

document.getElementById("menu").style.marginLeft = "-300px";
// we added that to hide the menu from the beginning


/* we create here a function that will check the menuStatus variable, when it is
false we will show the menu and we will change the value of the menuStatus to true
else we will hide the menu by adding marginLeft -300px and we will change the value to false
*/
function menuToggle() {
   if(menuStatus == false) {
       document.getElementById("menu").style.marginLeft = "0px";
       document.getElementById("menu").style.transition = "1s";
       menuStatus = true;
   }else {
       document.getElementById("menu").style.marginLeft = "-300px";
       menuStatus = false;
   }
}


// here we add an event to the (menu-btn) when we click the function will be called

document.getElementById("menu-btn").addEventListener("click",menuToggle);