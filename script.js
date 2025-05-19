toggle.onclick = function () {
  sideBar.classList.toggle("active");
  toggle.innerText = toggle.innerText == `=` ? "||" : "=";
};


dashboardNavBtn.onclick=function(){
    setLiActive(dashboardLi)
    showSec(dashboardSec)
}
customersNavBtn.onclick = function(){
    setLiActive(customersLi)
    showSec(customersSec)
}

apartmentsNavBtn.onclick = function(){
    setLiActive(apartmentsLi)
    showSec(apartmentsSec)
}
bookingsNavBtn.onclick = function(){
    setLiActive(bookingsLi)
    showSec(bookingsSec)
}
installmentsNavBtn.onclick = function(){
    setLiActive(installmentsLi)
    showSec(installmentsSec)
}


const setLiActive = (navID) => {
  document.querySelectorAll(".side-bar ul li").forEach((l) => {
    l.classList.remove("active");

    setTimeout(navID.classList.add("active"), 50);
  });
};


const showSec = (secID) => {
  document.querySelectorAll(".main section").forEach((s) => {
    s.style.display = "none";
    s.classList.remove("active-sec");

    setTimeout(() => {
      secID.classList.add("active-sec");
      secID.style.display = "block";
    }, 50);
  });
};
