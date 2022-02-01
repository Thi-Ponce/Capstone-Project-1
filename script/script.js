// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

// Team Obj 
const team = [
    {
      name: "Esugen Kagon",
      description: 'Our house decorating specialist and event planner',
      occupation: 'Layout and decor',
      id: 1,
      imageUrl: '/Images/Au-ra.png',
      imageAlt: 'Esugen character',
    },
    {
      name: 'Anna Storme',
      description: 'Event organizer and resident cook',
      occupation: 'Layout and food',
      id: 2,
      imageUrl: '/Images/Hyur.png',
      imageAlt: 'Anna character',
    },
    {
      name: "Zivanek Ratkasch",
      description: 'Tank extraordinaire and savage content coach',
      occupation: 'Player interaction and leader',
      id: 3,
      imageUrl: '/Images/Hrothgar.png',
      imageAlt: 'Zivanek character',
    },
    {
      name: 'Leih\'li Orbis',
      description: 'Resident photographer and event organizer',
      occupation: 'Player interaction and screenshot contest',
      id: 4,
      imageUrl: '/Images/Miqo-red.png',
      imageAlt: 'Leih character',
    },
    {
      name: 'Lehze\'to Orbis',
      description: 'Azure Dragoon wannabe and resident artist',
      occupation: 'Player interaction and art contest',
      id: 5,
      imageUrl: '/Images/Miqo-blonde.png',
      imageAlt: 'Lehze character',
    },
    {
      name: 'Idern Iryut',
      description: 'Resident healer and event organizer',
      occupation: 'Event planning and finances',
      id: 6,
      imageUrl: '/Images/Viera.png',
      imageAlt: 'Idern character',
    },
  ];
  
  const teamMembers = document.getElementById('team-members');
  
  function generateHTML(details) {
    const card = `
      <div class="card-container">
          <div class="member-card">
              <div class="img-container">
                  <img class="member-image" src="${details.imageUrl}" alt=${details.imageAlt}>
              </div>
              <div class="member-info">
                  <h2>${details.name}</h2>
                  <h3>${details.description}</h3>
                  <hr>
                  <p>${details.occupation}</p>
              </div>
          </div>
      </div>
    `;
    return card;
  }
  
  team.map((member) => {
    const HTMLElement = document.createElement('div');
    HTMLElement.innerHTML = generateHTML(member);
    teamMembers.appendChild(HTMLElement);
  });