const openMenu = document.getElementById('sidebar-btn');
const sideBar = document.getElementById('navbar');

openMenu.addEventListener('click', () => {
  sideBar.classList.toggle('navbar-open')
})

document.addEventListener("DOMContentLoaded", function(e) {
  function resize () {
  if (window.innerWidth < 1200) {
    sideBar.classList.remove('navbar-open');
  }
}
window.onresize = resize;
})