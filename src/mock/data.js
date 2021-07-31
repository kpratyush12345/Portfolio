import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Pratyush Kumar - WEB Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Pratyush Kumar',
  subtitle: 'I am a WEB Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: ' I am Computer Science and Engineering Student at SJB Institute of Technology , Bangalore. I am fascinated about programming and exploring new CS fields. I enjoy solving problems with use of programming. I am always energetic and eager to learn new skills. I have good leadership skills as well as I can work as a team member. I am currently looking for internship and job opportunities that match my skills.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1CozxyxV5KLvdSb8anI0Quj6f9oWzPUYq/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tour.png',
    title: 'DJP Tourism',
    info: 'Contains over 15 Cities Data with 360 deg videos and Google Maps of it.',
    info2: 'A fully Responsive Site Made Using ReactJs',
    url: 'https://djp-tourism-3c36d.web.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'game.png',
    title: 'The BreakOut Game',
    info: 'You need to break all the bricks using a ball, you need to prevent the ball from touching the bottom surface using a paddle.',
    info2: 'Made Using JavaScript',
    url: 'https://kpratyush12345.github.io/Brick-Game/',
    repo: '', 
  },
  {
    id: nanoid(),
    img: 'to.png',
    title: 'To Do List',
    info: 'To Keep Track of any sort of Work . To remember things you might forget then this place is for you. You just need to go and after the url add your name and Press Enter and Now your ready to go!',
    info2: 'Made Using Bootstrap , Javascript , MongoDB - Mongoose To store data',
    url: 'https://afternoon-depths-96125.herokuapp.com/',
    repo: '', 
  },
  {
    id: nanoid(),
    img: 'mov.png',
    title: 'Movieflix',
    info: 'Used a MovieDB API that will be update the Movie Database whenever a new Movie releases.',
    info2: 'Made Using JavaScript and API',
    url: 'https://kpratyush12345.github.io/Movie-using-JS/',
    repo: '',
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'You can also give me Feedback and can Contact Me',
  btn: 'Contact Me',
  email: 'kpratyush12345@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/kpratyush12345',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/_pratyush__pk_12__/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pratyush-kumar-b5b968189/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kpratyush12345',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
