const openMenu = document.getElementById('sidebar-btn');
const sideBar = document.getElementById('navbar');

openMenu.addEventListener('click', () => {
  console.log('btn');
  sideBar.classList.toggle('navbar-open')
})