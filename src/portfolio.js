
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Yichen Dai",
  title: "Hi all, I'm Yichen",
  subTitle: emoji("A passionate Software Developer 🚀 having experience of building Web applications with JavaScript / Python / Flask / PostgresSQL and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/18Lx027TTzGd8X_xihRPeJMStFHbMJF2t/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/nancydyc",
  linkedin: "https://www.linkedin.com/in/daiyichen/",
  gmail: "msdaiyichen@gmail.com",
  };

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ENTHUSIASTIC FULL STACK DEVELOPER WHO IS HAPPY TO LEARN NEW TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    emoji("⚡ Progressive Web Applications in the Serverless Stacks"),
    emoji("⚡ Third Party API Integration")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "google-apps-script",
      fontAwesomeClassname: "fab fa-google"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python",  //Insert stack or technology you have experience in
      progressPercentage: "85%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Structure & Algorigthms",
      progressPercentage: "70%"
    },
    {
      Stack: "Project Management",
      progressPercentage: "85%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineer Ops and Community Manager",
      company: "Elementl",
      companylogo: require("./assets/images/dagster.png").default,
      date: "September 2020 – March 2021",
      desc: "",
      descBullets: [
        "Designed and implemented a batch data pipeline to process Slack data using Python, stored processed data in the Snowflake database and ingested user data to the HubSpot CRM saving ten minutes of each researcher’s manual work every day.",
        "Wrote the technical documentation to address the frequently asked questions and maintained the tests of generating the screenshots and comparing visual difference.",
        "Designed the process of engaging community members and increased the number of the monthly community meeting participants by 200%."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "DialoggBox",
      companylogo: require("./assets/images/dialoggBox.png").default,
      date: "June 2020 – Present",
      desc: "",
      descBullets: [
        "Developed a customer facing add-on for G Suite integrating DialoggBox API to help the company reach more clients in the marketplace and covered 100% users in the company.",
        "Coordinated and assisted in organizing meetings, demos, webinars, online conferences, and administrative needs related to the product."
      ]
    },
    {
      role: "World Language Department Chiar & Mandarin Teacher",
      company: "San Francisco Unified School District ",
      companylogo: require("./assets/images/sfusd.png").default,
      date: "Aug 2016 – Present",
      descBullets: [
        "Initiated the first bilingual program. Designed the online Chinese language curriculum and the website msdaiyichen.weebly.com.",
        "Planned and executed fun festivities such as Celebrity project and Musical Video contest."
      ]
    },
    {
      role: "Marketing and Sales Management Trainee",
      company: "Longfor Properties Co. Ltd",
      companylogo: require("./assets/images/Longfor20Properties.jpg").default,
      date: "May 2012 – Jun 2014",
      descBullets: [
      "Managed the sales center of Fantastic Garden Apartments. Worked extensively with crossfunctional teams and improved customer satisfaction to over 90%.",
      "Oversaw every sales-related live show for Fantastic Garden Apartments sales project, improving the sales revenue to 130 million RMB to achieve monthly top real estate sales project twice in Shanghai."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "My personal projects and hackathon team projects.",
  projects: [
    {
      image: require("./assets/images/bestNeighbor.png").default,
      projectName: "BestNeighbor",
      projectDesc: "Software solution that drive social impact, with the aim of tackling some of the challenges related to the coronavirus (COVID-19) pandemic.",
      footerLink:[
        {
          name: "More",
          url: "http://github.com/Hackbright-Covid-19-Hackathon"
        }
      ]
    },
    {
      image: require("./assets/images/smartInvestor.png").default,
      projectName: "Smart Investor",
      projectDesc: "A full stack web app allows the users to search stocks, filter stocks by price range, bookmark stocks and visualize price data interactively.",
      footerLink:[
        {
          name: "More",
          url: "http://www.yichendai.com/"
        }
      ]
    },
    {
      image: require("./assets/images/tomtom.png").default,
      projectName: "Happy Happy Hour",
      projectDesc: "A full stack web app aims at preventing food waste by displaying nearby happy hour offers on the map through TOMTOM API.",
      footerLink:[
        {
          name: "More",
          url: "http://github.com/nancydyc/Happy-Happy-Hour"
        }
      ]
    },
    {
      image: require("./assets/images/webScraping.png").default,
      projectName: "Web Scraping",
      projectDesc: "A tech talk on what is web scraping and demonstrating how to do web scraping with BeautifulSoup, requests and Python.",
      footerLink:[
        {
          name: "More",
          url: "https://docs.google.com/presentation/d/15Qm58mESMCjEZIeGQShbILD68rpd22-zKfVnewXdAj8/edit?usp=sharing"
        }
      ]
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://nancydai.medium.com/develop-my-first-gmail-add-on-via-google-apps-script-my-software-engineer-internship-at-dialoggbox-e05d93d3a345",
      title: "Develop My First Gmail Add-on via Google Apps Script: My Software Engineer Internship at dialoggBox",
      description: "An internship opportunity to develop a gmail add-on product at dialoggBox to gain my first industry experience and learn how to work with key stakeholders."
    },
    {
      url: "https://nancydai.medium.com/transferrable-skills-project-management-across-tech-and-non-tech-careers-a2e3f40f5206",
      title: "Transferrable Skill: Project Management across Tech and Non-Tech Careers",
      description: "Discuss the similarity and difference between managing an educational project and an engineering project."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (415)562-7780",
  email_address: "msdaiyichen@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "YichenDai3"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
