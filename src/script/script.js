// window.addEventListener("keydown", e =>{
//     if (e.key == "v") {
//         document.body.style.background = "#09e024";
//     }
// });
//
// window.addEventListener("keyup", e =>{
//     if (e.key == "v") {
//         document.body.style.background = "";
//     }
// });
//

// window.addEventListener("keydown", e => {
//     if (e.key == " " && e.ctrlKey) {
//         console.log("Continue!");
//     }
// } )

window.addEventListener("click", e => {
   let dot = document.createElement("div");
   dot.className = "dot";
   dot.style.left = (e.pageX-4) + "px";
   dot.style.left = (e.pageY-4) + "px";
   document.body.appendChild(dot);
} )

