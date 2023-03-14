// display speakers

const speakers = [{
  name: ['Fredo st fleur', 'Jean Marie', 'Jean Pierre', 'Marie claude'],
  infoproject: ['Back end Dev', '2015'],
  image: './images/project_1.svg',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  proTech: ['html', 'javascript', 'css'],
  liveUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',
  repoUrl: 'https://github.com/fredo509/Portfolio_setup_mobile_first',
}];

const bodyLoad = () => {
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('dataContainer');
  document.body.appendChild(dataContainer);

  dataContainer.innerHTML = `<section class="speakers">
            <div class ="profile-card">
                <div class="main-program ft-speakers">
                    <p>Featured speakers </p>
                    <div class="t-buttom"></div>
                </div>
                <div class="profile">
                    <div class="profile-picture">
                        <img src="./images/speaker_01 1.svg" alt="">
                    </div>
                    <div profile-about>
                        <p class="profile-nom">Yochai Benkler</p>
                        <p class="profile-fuction">Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</p>
                        <div class="t-buttom t-profile"></div>
                        <p class="profile-d">Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006</p>
                    </div>
                </div>
                <div class="profile">
                    <div class="profile-picture">
                        <img src="./images/speaker_01 2.svg" alt="">
                    </div>
                    <div profile-about>
                        <p class="profile-nom">SohYeong Noh</p>
                        <p class="profile-fuction">Director of Art Centre Nabi and a board member of CC Korea</p>
                        <div class="t-buttom t-profile"></div>
                        <p class="profile-d">As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and
                        understanding among science technology, humanities, and the arts.</p>
                    </div>
                </div>
            </div>
            <button class="showMore"> Show More  </button>
        </section>`;
};