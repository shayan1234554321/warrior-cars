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
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
  {
    image: './images/mufti-menk.jpeg',
    name: 'Mufti Menk',
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
];

const OtherSpeakers = [
  {
    image: './images/raja.jpg',
    name: 'Raja Zia Ul Haq',
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
  {
    image: './images/shayan.jpeg',
    name: 'Mufti Shayan',
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
  {
    image: './images/khalid-bin-waleed.png',
    name: 'Khalid Bin Waleed (RA)',
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
  {
    image: './images/tuaha.jpg',
    name: 'Tuaha Ibn Al Jaleel',
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
];

window.addEventListener('load', () => {
  let toAdd = '';
  mustSpeakers.forEach((speaker) => {
    toAdd += `<div class="speaker">
                <div class="image">
                    <img src="${speaker.image}" alt="Image of an Islamic speaker">
                </div>
                <span>
                    <h4>${speaker.name}</h4>
                    <p>${speaker.role}</p>
                    <p>${speaker.description}</p>
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
                    <p>${speaker.role}</p>
                    <p>${speaker.description}</p>
                </span>
               </div>`;
  });

  otherSpeakers.innerHTML = toAdd;
});

window.addEventListener('resize', (e) => {
  if (e.target.screen.availWidth > 768) {
    menu.style.display = 'flex';
    closeMenu.style.display = 'none';
    moreSpeakers.style.display = 'grid';
  } else {
    closeMenu.style.display = 'block';
    menu.style.display = 'none';
    moreSpeakers.style.display = 'none';
  }
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
