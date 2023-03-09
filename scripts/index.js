/* eslint-disable max-len */
const MobileMenuBtn = document.getElementById('breadcrumb-icon');
const MobileMenu = document.getElementById('mobile-menu');
const CloseMenuBtn = document.getElementById('close-menu-btn');
const MenuLinks = document.getElementsByClassName('menu-items');

// others
const workSection = document.getElementById('project-section');

for (let i = 0; i < MenuLinks.length; i += 1) {
  MenuLinks[i].addEventListener('click', () => {
    MobileMenu.classList.remove('visible');
  });
}
MobileMenuBtn.addEventListener('click', () => {
  MobileMenu.classList.add('visible');
});

CloseMenuBtn.addEventListener('click', () => {
  MobileMenu.classList.remove('visible');
});

const MultiPostStories = {
  id: 77,
  title: 'Multi-Post',
  imageLink: './static/work/Snapshoot Portfolio.png',
  descriptionDefault:
    "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  descriptionPopup:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  techUsed: ['html', 'css', 'bootstrap'],
  LiveLink: 'https://google.com',
  CodeLink: '#',
};

const FirstProject = `
<div class="main-project" id="main-project">
<div class="main-project-image">
  <img src="./static/work/multi-post-stories.png" alt="Main Project Image">
</div>
<div class="main-project-details">
  <h3 class="title">${MultiPostStories.title}</h3>
  <p class="description">${MultiPostStories.descriptionDefault}</p>
  <div>
    <ul class="tech-used">
      <li> <a href="#">${MultiPostStories.techUsed[0]}</a> </li>
      <li> <a href="#">${MultiPostStories.techUsed[1]}</a> </li>
      <li> <a href="#">${MultiPostStories.techUsed[2]}</a> </li>
      <li> <a href="#">${MultiPostStories.techUsed[3]}</a> </li>
    </ul>
    <button class="view-project-btn" id="first-project">
      See Project
    </button>
  </div>
</div>
</div>
`;

workSection.innerHTML = FirstProject;

// insert rest of the projects
const MainProject = document.getElementById('main-project');

// projects list array
const projectList = [
  {
    id: 1,
    title: 'Multi-Post App',
    imageLink: './static/work/Snapshoot Portfolio.png',
    descriptionDefault:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionPopup:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techUsed: ['html', 'css', 'bootstrap'],
    LiveLink: '#',
    CodeLink: '#',
  },
  {
    id: 2,
    title: 'Social media app',
    imageLink: './static/work/Snapshoot Portfolio.png',
    descriptionDefault:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionPopup:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techUsed: ['html', 'css', 'bootstrap'],
    LiveLink: '#',
    CodeLink: '#',
  },
  {
    id: 3,
    title: 'Game App',
    imageLink: './static/work/Snapshoot Portfolio.png',
    descriptionDefault:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionPopup:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techUsed: ['html', 'css', 'bootstrap'],
    LiveLink: '#',
    CodeLink: '#',
  },
  {
    id: 4,
    title: 'Whatsapp',
    imageLink: './static/work/Snapshoot Portfolio.png',
    descriptionDefault:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionPopup:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techUsed: ['html', 'css', 'bootstrap'],
    LiveLink: '#',
    CodeLink: '#',
  },
  {
    id: 5,
    title: 'Tinker',
    imageLink: './static/work/Snapshoot Portfolio.png',
    descriptionDefault:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionPopup:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techUsed: ['html', 'css', 'bootstrap'],
    LiveLink: '#',
    CodeLink: '#',
  },
  {
    id: 6,
    title: 'Twilio',
    imageLink: './static/work/Snapshoot Portfolio.png',
    descriptionDefault:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    descriptionPopup:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techUsed: ['html', 'css', 'bootstrap'],
    LiveLink: '#',
    CodeLink: '#',
  },
];

projectList.reverse();

const ProjectView = (
  id,
  title,
  techUsed,
  LiveLink,
  CodeLink,
  descriptionDefault,
) => `<div class="sub-projects">
<div class="sub-project-container">
  <h3 class="title hideonhover">${title}</h3>
  <p class="description hideonhover">${descriptionDefault}</p>
  <div>
    <ul class="tech-used hideonhover">
      <li> <a href="#">${techUsed[0]}</a> </li>
      <li> <a href="#">${techUsed[1]}</a> </li>
      <li> <a href="#">${techUsed[2]}</a> </li>
    </ul>
  </div>
</div>
<div class="btn-container">
  <button class="view-project-btn" id="project-${id}">
    <span>See Project</span>
  </button>
</div>
</div>`;

projectList.forEach((project) => {
  const htmlToInsert = ProjectView(
    project.id,
    project.title,
    project.techUsed,
    project.LiveLink,
    project.CodeLink,
    project.descriptionDefault,
  );
  MainProject.insertAdjacentHTML('afterend', htmlToInsert);
});

// pop-up

const ProjectPopup = (
  id,
  title,
  techUsed,
  LiveLink,
  CodeLink,
  descriptionDefault,
  descriptionPopup,
  imageLink,
) => `

<section class="project-popup" id="popup-${id}">
      <div class="popup-container">
       <h2 class="project-title">${title}</h2>
       <span class="close-popup" id="close-popup-${id}">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#67798E"/>
          </svg>
      </span>
      <ul class="tech-used">
        <li> <a href="#">${techUsed[0]}</a> </li>
        <li> <a href="#">${techUsed[1]}</a> </li>
        <li> <a href="#">${techUsed[2]}</a> </li>
      </ul>
      <div class="project-wrapper">
        <div class="main-project-image">
          <img src="${imageLink}" alt="Main Project Image">
        </div>
        <div class="project-wraper-p-btn"> 
          <p class="description">${descriptionPopup}</p>
        
          <div class="btn-container-pop">
            <button class="">
            <a href="${LiveLink}">See Live</a>
            
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="white"/>
                </svg>
            </button>
            <button class="">
            <a href="${CodeLink}">See Source</a>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_48_833)">
                <g clip-path="url(#clip1_48_833)">
                <path d="M20.9989 9.46114C20.9989 8.32124 20.6329 7.25043 19.9342 6.31779C20.2004 5.41969 20.2669 4.27979 20.2004 2.96718C20.1671 2.41451 19.7345 2 19.2022 2C18.9028 2 16.3741 2.03454 14.9101 3.38169C13.6458 3.1399 12.315 3.1399 11.0174 3.38169C9.58667 2.03454 7.05802 2 6.7253 2C6.19296 2 5.76042 2.41451 5.72715 2.96718C5.62734 4.27979 5.72715 5.41969 5.99333 6.31779C5.29462 7.28497 4.92863 8.35579 4.92863 9.46114C4.92863 11.8791 6.7253 14.0553 9.45358 15.0915C9.35377 15.2988 9.28723 15.5406 9.22068 15.7824C6.32604 15.4715 4.9619 12.7427 4.89536 12.639C4.66246 12.1209 4.06357 11.9136 3.56449 12.19C3.06541 12.4318 2.86578 13.0535 3.13196 13.5717C3.1985 13.7444 5.02845 17.4404 9.05432 17.8549V20.9637C9.05432 21.5509 9.48686 22 10.0525 22H15.875C16.4406 22 16.8732 21.5509 16.8732 20.9637V16.8532C16.8732 16.2314 16.7401 15.6442 16.5072 15.1261C19.2022 14.0553 20.9989 11.9136 20.9989 9.46114Z" fill="white"/>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_48_833">
                <rect width="18" height="20" fill="white" transform="translate(3 2)"/>
                </clipPath>
                <clipPath id="clip1_48_833">
                <rect width="18" height="20" fill="white" transform="translate(3 2)"/>
                </clipPath>
                </defs>
                </svg>
            </button>
          </div>
        </div>
       
      </div>


      </div>
    </section>
`;

const WorkHead = document.getElementById('work-heading');

projectList.forEach((project) => {
  const htmlToInsert = ProjectPopup(
    project.id,
    project.title,
    project.techUsed,
    project.LiveLink,
    project.CodeLink,
    project.descriptionDefault,
    project.descriptionPopup,
    project.imageLink,
  );
  WorkHead.insertAdjacentHTML('afterend', htmlToInsert);
});

// add event listeners to the see buttons

projectList.forEach((project) => {
  const SeeProjectBtn = document.getElementById(`project-${project.id}`);
  SeeProjectBtn.addEventListener('click', () => {
    // display popup to id same
    const PopUp = document.getElementById(`popup-${project.id}`);
    PopUp.style.display = 'flex';
    // console.log(project.id);
  });

  // close event listeners
  const ClosePopupBtn = document.getElementById(`close-popup-${project.id}`);
  ClosePopupBtn.addEventListener('click', () => {
    const PopUp = document.getElementById(`popup-${project.id}`);
    PopUp.style.display = 'none';
  });
});

const htmlToInsert = ProjectPopup(
  MultiPostStories.id,
  MultiPostStories.title,
  MultiPostStories.techUsed,
  MultiPostStories.LiveLink,
  MultiPostStories.CodeLink,
  MultiPostStories.descriptionDefault,
  MultiPostStories.descriptionPopup,
  MultiPostStories.imageLink,
);
WorkHead.insertAdjacentHTML('afterend', htmlToInsert);

const FirstProjectBtn = document.getElementById('first-project');

FirstProjectBtn.addEventListener('click', () => {
  const PopUp = document.getElementById(`popup-${77}`);
  PopUp.style.display = 'flex';
});

const ClosePopupBtnFirst = document.getElementById(`close-popup-${77}`);
ClosePopupBtnFirst.addEventListener('click', () => {
  const PopUp = document.getElementById(`popup-${77}`);
  PopUp.style.display = 'none';
});

// form validation
const EmailInput = document.getElementById('email-address');
const Form = document.getElementById('contact-form');
const ErrorMessage = document.getElementById('error-message');

Form.addEventListener('submit', (e) => {
  if (EmailInput.value !== EmailInput.value.toLowerCase()) {
    e.preventDefault();
    ErrorMessage.textContent = 'Please make sure your email is in lower case';
  }
});

// preserve data in the browser

const name = document.getElementById('user-name');
const email = document.getElementById('email-address');
const message = document.getElementById('msg');

const inputField = [name, email, message];

inputField.forEach((item) => {
  item.addEventListener('input', () => {
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    localStorage.setItem('client-data', JSON.stringify(data));
  });
});

const dataSaved = JSON.parse(localStorage.getItem('client-data'));
name.value = dataSaved.name;
email.value = dataSaved.email;
message.value = dataSaved.message;
