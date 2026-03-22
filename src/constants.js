// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import propertyImg from "./assets/work_logo/property.png";
import medicareImg from "./assets/work_logo/medicare.png";

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    role: "GATE 2026 Qualified",
    company: "Graduate Aptitude Test in Engineering",
    date: "2026",
    desc: "Successfully qualified GATE 2026, demonstrating strong understanding of core computer science subjects including Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
    ],
  },
  {
    id: 1,
    role: "DSA Problem Solver",
    company: "LeetCode, Codeforces & Other Platforms",
    date: "Ongoing",
    desc: "Solved 200+ Data Structures and Algorithms problems across platforms like LeetCode and Codeforces, strengthening problem-solving skills, logical thinking, and coding efficiency.",
    skills: [
      "C++",
      "Java",
      "Problem Solving",
      "Algorithms",
      "Competitive Programming",
    ],
  },
  {
    id: 2,
    role: "Full-Stack Development Projects",
    company: "Personal & Academic Projects",
    date: "2023 - Present",
    desc: "Built and deployed multiple full-stack web applications using the MERN stack, implementing authentication, REST APIs, and responsive UI to solve real-world problems.",
    skills: [
      "React JS",
      "Node JS",
      "MongoDB",
      "Express JS",
      "Tailwind CSS",
      "JWT / Clerk Auth",
    ],
  },
];
  
  export const education = [
  {
    id: 0,
    img: "", // you can remove or keep empty if not using images
    school: "Lovely Professional University, Punjab",
    date: "August 2023 - Present",
    grade: "7.87 CGPA",
    desc: "Currently pursuing Bachelor of Technology in Computer Science and Engineering. Gaining strong knowledge in software development, data structures, algorithms, and full-stack web technologies. Actively working on real-world projects using MERN stack and improving problem-solving skills.",
    degree: "Bachelor of Technology - Computer Science and Engineering",
  },
  {
    id: 1,
    img: "",
    school: "Alexandra School, Amritsar, Punjab",
    date: "April 2022 - March 2023",
    grade: "84%",
    desc: "Completed intermediate education with a strong focus on core subjects, building a solid academic foundation for higher studies in computer science and engineering.",
    degree: "Intermediate (Class 12)",
  },
  {
    id: 2,
    img: "",
    school: "Alexandra School, Amritsar, Punjab",
    date: "April 2020 - March 2021",
    grade: "91%",
    desc: "Completed matriculation with excellent academic performance, developing strong fundamentals in science and mathematics.",
    degree: "Matriculation (Class 10)",
  },
];
  
  export const projects = [
  {
    id: 0,
    title: "Hospital Management & Appointment System",
    description:
      "Developed a scalable full-stack healthcare platform using the MERN stack, enabling patients to book appointments, access medical services, and manage health records efficiently. Implemented secure authentication using Clerk and integrated online payment functionality for seamless transactions.",
    image: medicareImg, // optional (remove if not using images)
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Clerk Auth",
      "Payment Integration",
      "REST APIs",
    ],
    github: "https://github.com/riadhh-302005/medicare-project", // add if you have
    webapp: "https://medicare-project-ten.vercel.app/", // add your deployed link
  },
  {
    id: 1,
    title: "Property Management System",
    description:
      "Built a full-stack property management platform using MERN stack that allows users to list, browse, and manage property listings. Implemented secure JWT authentication and developed robust backend APIs for handling property data and user accounts.",
    image: propertyImg,
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Auth",
      "REST APIs",
    ],
    github: "https://github.com/riadhh-302005/pizza-website", 
    webapp: "https://property-management-five-silk.vercel.app/",
  },
]; 