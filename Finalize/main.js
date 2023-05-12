const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-Link');
const Loginlink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

Loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

function updateDateTime() {
  const datetimeContainer = document.getElementById("datetime-container");
  const now = new Date();
  const datetimeString = now.toLocaleString();
  datetimeContainer.innerText = datetimeString;
}

setInterval(updateDateTime, 1000);

 
  let light = document.getElementById("light");
  let dark = document.getElementById("dark");
  let body = document.getElementById("body");

  dark.addEventListener("click", function(){
    body.style.background = "black";
  });
  light.addEventListener("click", function(){
    body.style.background = "white";
  });

