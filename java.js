let signinbtn = document.querySelector("#signinbtn");
let signupbtn = document.querySelector("#signupbtn");
// let fields = document.querySelectorAll(".rem"); 
let title = document.querySelector("#title");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let conpas = document.querySelector("#conpas");
let mobile = document.querySelector("#mob");
let pass = document.querySelector("#pass");
let box = document.querySelector(".box")
let fp = document.querySelector("#para");
signinbtn.onclick = ()=>{
    title.innerHTML="LOGIN";
    mobile.style.position="absolute";
    name.style.position="absolute";
    conpas.style.position="absolute";
    box.style.height ="500px";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
   
}
signupbtn.onclick = function (){
    title.innerText = "Sign Up";
    mobile.style.position = "relative";
    box.style.height ="600px";
 
    signinbtn.classList.add("disable");
    signupbtn.classList.remove("disable");
}