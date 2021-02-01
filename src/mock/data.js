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
  resume: 'https://drive.google.com/file/d/110VP9Tfhm6IL-Vv9ucLqiuYz5JWP7Ltt/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tindog.png',
    title: 'tindog',
    info: 'Meet new and Interesting Dogs nearby.',
    info2: 'A fully Responsive Site Made Using pure HTML , CSS and Bootstrap',
    url: 'https://kpratyush12345.github.io/cv/tindog/index.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'drumkit.png',
    title: 'Drum Kit',
    info: 'Tap on the button and enjoy the Melody . When you tap on Keyboard also it plays the sound.',
    info2: 'Made Using HTML , CSS , Bootstrap and jQuery',
    url: 'https://kpratyush12345.github.io/cv/drumkit/index.html',
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
    img: 'notes.png',
    title: 'Notes App',
    info: 'It Keeps Your Important Notes . Its just a Frontend Site',
    info2: 'Made Using React',
    url: 'https://ed3cv.csb.app/',
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
