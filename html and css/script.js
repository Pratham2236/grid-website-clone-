document.addEventListener('DOMContentLoaded', ()=> {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.getElementById('nav-list');
  
    hamburgerMenu.addEventListener('click', ()=> {
      navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });
  });
  $(document).on('click', '#close', function(){
      $('#nav-list').css('display', 'none')
  });
$(document).on('click', '#close', function(){
      $('#nav-list').css('display', 'none')
  });
