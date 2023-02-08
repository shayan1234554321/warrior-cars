const aboutItem = document.getElementById('aboutItem');
const aboutItemMB = document.getElementById('aboutItemMB');
const about = document.getElementById('about');
const home = document.getElementById('home');
const footer = document.getElementById('footer');
const mobileItems = document.getElementById('mobileItems');
const mobileMenu = document.getElementById('mobileMenu');
const showAllSpeakers = document.getElementById('showAllSpeakers');
const moreSpeakers = document.getElementById('moreSpeakers');
const closeMenu = document.getElementById('closeMenu');

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
  footer.classList.toggle('darkFooter');
});
aboutItemMB.addEventListener('click', () => {
  if (home.style.display === 'none') {
    home.style.display = 'block';
    about.style.display = 'none';
    aboutItemMB.innerHTML = 'About';
  } else {
    home.style.display = 'none';
    about.style.display = 'block';
    aboutItemMB.innerHTML = 'Home';
  }
  footer.classList.toggle('darkFooter');
  mobileItems.style.display = 'none';
});
mobileMenu.addEventListener('click', () => {
  mobileItems.style.display = 'flex';
});
closeMenu.addEventListener('click', () => {
  mobileItems.style.display = 'none';
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
