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
  name: 'Nedgine Paul Deroly',
  image: 'https://haititechsummit.com/wp-content/uploads/2022/12/6258d5e91d7e4d318be0075a_nedgine-paul-deroly_2-qi2qz-500x500.jpeg',
  function: 'Co-founder & CEO, Anseye Pou Ayiti',
  profileDescription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},

{
  name: 'Einstein Ntim',
  image: 'https://haititechsummit.com/wp-content/uploads/2022/12/Einstein-Ntim-500x500.png',
  function: 'Chairman, Global Startup Ecosystem',
  profileDescription: 'Mariane studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},

{
  name: 'Leticia Boateng',
  image: 'https://haititechsummit.com/wp-content/uploads/2022/12/DSC0416-Edit-5-500x500.jpg',
  function: 'CEO, ALPHANET| HITPAY.Com',
  profileDescription: 'Mariane studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},

{
  name: 'Staniel Tetteh',
  image: 'https://haititechsummit.com/wp-content/uploads/2022/12/GSE-1-500x500.jpg',
  function: 'Startup Programs and Projects Manager, Global Startup Ecosystem',
  profileDescription: 'Mariane studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},

{
  name: 'Ryan Foland',
  image: 'https://haititechsummit.com/wp-content/uploads/2022/11/ryan-foland-gallery_2-500x500-1-500x500.jpg',
  function: 'Author, Ditch The Act| Brand consultant',
  profileDescription: 'Mariane studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},

{
  name: 'Jaagriti Sharma',
  image: 'https://haititechsummit.com/wp-content/uploads/2022/12/6080ae6d844390aea9f48aaf_RCC-Headshot-4-500x500.png',
  function: 'Caribbean Tourism Accelerator: Haiti Cohort',
  profileDescription: 'Mariane studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
},

];

let html = '';

const bodyLoad = () => {
  speakers.forEach((element, index) => {
    element = index;
    html += `
<div id="profile">
  <div class="profile-picture">
  <img src="${speakers[index].image}" alt="speaker image" class ="speakerImg">
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
