const registerBtn=document.getElementById('register');
const loginrBtn=document.getElementById('login');
const container=document.getElementById('container');

registerBtn.addEventListener("click",() => {
    container.classList.add("right-panel-active");
})

loginrBtn.addEventListener("click",() => {
    container.classList.remove("right-panel-active");
})