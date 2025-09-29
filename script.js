const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

console.log("hii")

let isMenuOn = false

let ham = document.querySelector('.ham')
let lines = document.querySelector('.ham span')
let filter = document.querySelector('.filter')
let menu = document.querySelector('.navmenu')
ham.addEventListener('click' , ()=>{
    
    ham.classList.toggle("on")
    lines.classList.toggle("on")
    
    if(isMenuOn === false){
        menu.style.right = "0px"
        menu.style.opacity = "1"    
       // menu.style.display = "block"
        isMenuOn = true
        filter.style.opacity = 1 
        filter.style.left = "0"
    }
    else {
        menu.style.right = "-50%"
        menu.style.opacity = "0"
       // menu.style.display = "none"
        isMenuOn = false
        filter.style.opacity = 0 
        filter.style.right = "-100%"
    }
})

function getRandomInteger(min, max) {
  min = Math.ceil(min); // Ensures the minimum value is rounded up to the nearest whole number
  max = Math.floor(max); // Ensures the maximum value is rounded down to the nearest whole number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randInt = getRandomInteger(1 , 8 )


document.querySelector(".bg").style.backgroundImage = `url('assests/pic${randInt}.jpg')`

