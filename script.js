const profile = document.getElementById('speakers');
const body = document.getElementsByTagName('body');

// display speakers

const menuIcon = document.querySelector('#icM');
const HTML = document.getElementById('html');
const menuItem = document.querySelector('#navL');
const presentationSection = document.querySelector('#presentation');

menuIcon.addEventListener('click', () => {
  menuItem.classList.toggle('showMenu');
  menuIcon.classList.toggle('changeIcon');
  HTML.classList.toggle('unscroll');
  presentationSection.classList.toggle('present-js');
});

presentationSection.addEventListener('click', () => {
  menuItem.classList.remove('showMenu');
  menuIcon.classList.remove('changeIcon');
  HTML.classList.remove('unscroll');
});

const speakers = [{
  name: 'Yochai Benkler',
  image: './images/speaker_01 1.svg',
  function: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  profileDescription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},

{
  name: 'Mariane Jean',
  image: './images/speaker_01 2.svg',
  function: 'Mariane Professor of Entrepreneurial Legal Studies at Harvard Law School',
  profileDescription: 'Mariane studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},

{
  name: 'Mariane Jean',
  image: './images/speaker_01 2.svg',
  function: 'Mariane Professor of Entrepreneurial Legal Studies at Harvard Law School',
  profileDescription: 'Mariane studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
}];

let html = '';

const bodyLoad = () => {
  speakers.forEach((element, index) => {
    element = index;
    html += `
<div id="profile">
  <div class="profile-picture">
  <img src="${speakers[index].image}" alt="speaker image">
</div>
<div profile-about>
<p class="profile-nom">${speakers[index].name}</p>
<p class="profile-function">${speakers[index].function}</p>
<div class="t-buttom t-profile"></div>
<p class="profile-d">${speakers[index].profileDescription}</p>
</div>
</div>`;
    profile.innerHTML = html;
  });
};

const btnShow = document.getElementById('showPlus');
const speakersBlock = document.getElementById('speakers');
btnShow.addEventListener('click', () => {
  speakersBlock.classList.toggle('showMoreExpand');
});

body.addEventListener('load', bodyLoad());
