/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = { animated: true };

const greeting = {
  username: "Yeshwanth",
  title: "Hi all, I'm Yeshwanth K",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 who loves building robust web applications."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=131pW4gtwF0TjQY2aMzxHL3RfcLYA9Am5", // ✅ Direct download link
  displayGreeting: true
};



// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/YeshwanthK172",
  linkedin: "https://www.linkedin.com/in/yeshwanth-k-ab3038357/",
  gmail: "kyechu2004@gmail.com",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO BUILDS ROBUST WEB APPLICATIONS",
  skills: [
    emoji("⚡ Develop scalable RESTful APIs with Node.js and ASP.NET Core"),
    emoji("⚡ Build responsive frontend using React.js, HTML, CSS, and MVC"),
    emoji("⚡ Integrate payment gateways (Razorpay, Stripe)"),
    emoji("⚡ Database handling: MySQL, PostgreSQL, MSSQL, MongoDB"),
    emoji("⚡ Cloud storage with Cloudinary & file handling"),
    emoji("⚡ SNMP-based device profiling and monitoring")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "ASP.NET Core", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Databases", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Cloudinary", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "College of Engineering, Guindy — Chennai",
      logo: require("./assets/images/ceg.png"),
      subHeader: "M.Sc. (Integrated) - Computer Science",
      duration: "Ongoing (5th Semester)",
      desc: "CGPA: 7.54"
    },
    {
      schoolName: "Shree Niketan Matriculation Hr. Sec. School — Tiruvallur",
      logo: require("./assets/images/snms.jpeg"),
      subHeader: "HSC - Tamil Nadu State Board",
      duration: "2021",
      desc: "Scored 92.5%"
    },
    {
      schoolName: "Shree Niketan Matriculation Hr. Sec. School — Tiruvallur",
      logo: require("./assets/images/snms.jpeg"),
      subHeader: "SSLC - Tamil Nadu State Board",
      duration: "2019",
      desc: "Scored 88.8%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend Development", progressPercentage: "85%" },
    { Stack: "Databases", progressPercentage: "80%" },
    { Stack: "Frontend / Design", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Java Developer Intern",
      company: "Zoho Corporation Pvt. Ltd.",
      companylogo: require("./assets/images/zoho.png"),
      date: "Jun 2025 – Present",
      desc: "Working on Real-Time SNMP-Based Device Profiling: backend development in Java to automate device identification, parsing MIB files, and retrieving OIDs."
    }
  ]
};

// Projects
const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/studentManagement.jpeg"),
      projectName: "Student Management System",
      projectDesc:
        "Built with ASP.NET Core MVC & Web API supporting MySQL, PostgreSQL, and MSSQL. Features include role-based login, attendance & marks management, and logging.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/YeshwanthK172/StudentManagementSystem"
        }
      ]
    },
    {
      image: require("./assets/images/studentMentoring.png"),
      projectName: "Student Mentoring System",
      projectDesc:
        "Node.js + MongoDB system for managing mentor-student interactions with authentication, scheduling, and progress tracking.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/YeshwanthK172/Student_Mentoring_System"
        }
      ]
    },
    {
      image: require("./assets/images/nss.jpeg"),
      projectName: "NSS Management Application",
      projectDesc:
        "React + Node.js + MongoDB application to manage Program Officers, Volunteers, Events, and Announcements for NSS.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/sathishkumar55555/NSS_Website" }
      ]
    }
  ],
  display: true
};

// Contact Info
// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out via email or LinkedIn.",
  number: "+91 8122851295",         
  email_address: "kyechu2004@gmail.com" 
};



// Optional Sections
const openSource = { showGithubProfile: "true", display: true };
// Achievement Section
const achievementSection = {
  title: "Achievements and Certifications 🏆",
  subtitle: "Here are some certifications I have earned",
  achievementsCards: [
    {
      title: "Basics of Python",
      subtitle: "Certified by UniAthena",
      image: require("./assets/images/uni.jpeg"), // replace with a certificate icon/logo
      footerLink: [
        {
          name: "View Certificate",
          url: "https://docs.uniathena.com/prod/course/certificate/323_1726466203_certificate.jpg"
        }
      ]
    },
    {
      title: "Fundamentals of JavaScript",
      subtitle: "Certified by Geekster",
      image: require("./assets/images/geekster.jpeg"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://certifications.geekster.in/EFo0ABN8cZgJc6WxT6TOB-geekster.pdf"
        }
      ]
    },
    {
      title: "Crash Course On Python",
      subtitle: "Certified by Coursera",
      image: require("./assets/images/coursera.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/bb164a1b4055c3ff05ca6fda9d1e391c"
        }
      ]
    },
    {
      title: "Pro Backend Development (JavaScript)",
      subtitle: "Certified by Udemy",
      image: require("./assets/images/udemy.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-ec31ec77-365d-4a34-8b91-ebb878a942e0/"
        }
      ]
    },
    
  ],
  display: true
};
const blogSection = { displayMediumBlogs: "false", display: false }; // Medium disabled
const talkSection = { display: false };
const podcastSection = { display: false };
const resumeSection = { display: true };
const twitterDetails = { userName: "", display: false };
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  techStack
};
