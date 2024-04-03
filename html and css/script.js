document.addEventListener('DOMContentLoaded', ()=> {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.getElementById('nav-list');
  
    hamburgerMenu.addEventListener('click', ()=> {
      navList.style.display = navList.style.display === 'none' ? 'flex' : 'none';
    });
  });
  