const aboutItem = document.getElementById('aboutItem');
const about = document.getElementById('about');
const home = document.getElementById('home');
const footer = document.getElementById('footer');
const mobileMenu = document.getElementById('mobileMenu');
const showAllSpeakers = document.getElementById('showAllSpeakers');
const moreSpeakers = document.getElementById('moreSpeakers');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

window.addEventListener('resize', ((e) => {
  if (e.target.screen.availWidth > 768) {
    menu.style.display = 'flex';
    closeMenu.style.display = 'none';
  } else {
    closeMenu.style.display = 'block';
    menu.style.display = 'none';
  }
}));

aboutItem.addEventListener('click', () => {
  if (home.style.display === 'none') {
    home.style.display = 'block';
    about.style.display = 'none';
    aboutItem.innerHTML = 'About';
  } else {
    home.style.display = 'none';
    about.style.display = 'block';
    aboutItem.innerHTML = 'Home';
  }
  if (window.screen.availWidth < 769) {
    menu.style.display = 'none';
  }
  footer.classList.toggle('darkFooter');
});
mobileMenu.addEventListener('click', () => {
  menu.style.display = 'flex';
});
closeMenu.addEventListener('click', () => {
  menu.style.display = 'none';
});

showAllSpeakers.addEventListener('click', (e) => {
  if (moreSpeakers.style.display === 'none') {
    moreSpeakers.style.display = 'grid';
    e.target.childNodes[0].data = 'Less ';
    e.target.children[0].classList.add('rotateArrow');
  } else {
    moreSpeakers.style.display = 'none';
    e.target.childNodes[0].data = 'More ';
    e.target.children[0].classList.remove('rotateArrow');
  }
});
