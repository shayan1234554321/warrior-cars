const aboutItem = document.getElementById('aboutItem');
const about = document.getElementById('about');
const home = document.getElementById('home');
const footer = document.getElementById('footer');
const mobileMenu = document.getElementById('mobileMenu');
const showAllSpeakers = document.getElementById('showAllSpeakers');
const moreSpeakers = document.getElementById('moreSpeakers');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const speakers = document.getElementById('speakers');
const otherSpeakers = document.getElementById('otherSpeakers');

const mustSpeakers = [
  {
    image: './images/nouman.jpg',
    name: 'Nouman Ali Khan',
  },
  {
    image: './images/mufti-menk.jpeg',
    name: 'Mufti Menk',
  },
];

const OtherSpeakers = [
  {
    image: './images/raja.jpg',
    name: 'Raja Zia Ul Haq',
  },
  {
    image: './images/shayan.jpeg',
    name: 'Mufti Shayan',
  },
  {
    image: './images/khalid-bin-waleed.png',
    name: 'Khalid Bin Waleed (RA)',
  },
  {
    image: './images/tuaha.jpg',
    name: 'Tuaha Ibn Al Jaleel',
  },
];

window.addEventListener('load', (() => {
  let toAdd = '';
  mustSpeakers.forEach((speaker) => {
    toAdd += `<div class="speaker">
                <div class="image">
                    <img src="${speaker.image}" alt="Image of an Islamic speaker">
                </div>
                <span>
                    <h4>${speaker.name}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Possimus voluptatum, tempora cum cumque natus ad!</p>
                </span>
               </div>`;
  });
  speakers.innerHTML = toAdd;

  toAdd = '';
  OtherSpeakers.forEach((speaker) => {
    toAdd += `<div class="speaker">
                <div class="image">
                    <img src="${speaker.image}" alt="Image of an Islamic speaker">
                </div>
                <span>
                    <h4>${speaker.name}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Possimus voluptatum, tempora cum cumque natus ad!</p>
                </span>
               </div>`;
  });

  otherSpeakers.innerHTML = toAdd;
}));

window.addEventListener('resize', ((e) => {
  if (e.target.screen.availWidth > 768) {
    menu.style.display = 'flex';
    closeMenu.style.display = 'none';
    moreSpeakers.style.display = 'grid';
  } else {
    closeMenu.style.display = 'block';
    menu.style.display = 'none';
    moreSpeakers.style.display = 'none';
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
