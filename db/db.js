export const bio = [
  "Hello there &#128075;",
  "I'm Nadia Phaneuf. I am a Respiratory Therapist by trade with six years of active duty US Army. I am currently a transitioning service member. I have a passion for all things healthcare data analytics and process improvement.",
  "As a lifelong learner, I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "PI",
    skillName: "Process Improvement",
    color: "1",
    percentage: "80",
  },
  {
    title: "SQL",
    skillName: "SQL",
    color: "6",
    percentage: "40",
  },
  {
    title: "Visualization",
    skillName: "Tableau, Power BI",
    color: "4",
    percentage: "30",
  },
  {
    title: "Data Analytics",
    skillName: "Data Analytics",
    color: "7",
    percentage: "70",
  },
  {
    title: "Soft Skills",
    skillName: "Cross-functional collaboration",
    color: "3",
    percentage: "80",
  },
  {
    title: "Analytics",
    skillName: "CleverTap, Countly",
    color: "5",
    percentage: "50",
  },
];

export const projects = {
  disclaimer:
    "*** All the projects I listed were completed during my college-level development journey. As for my work at the industry level, those projects are confidential and cannot be disclosed.",
  webProjects: [
    {
      projectName: "Programming Diaries",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    },
    {
      projectName: "Find Your Bank",
      image: "images/findyourbank.png",
      summary:
        "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
      preview: "https://github.com/vinaysomawat/Travographer-Portal",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
    {
      projectName: "Resume Builder",
      image: "images/resume-builder.png",
      summary:
        "Browser based editor to build and download Resumes in a customizable templates.",
      preview: "https://vinaysomawat.github.io/Resume-Builder",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "WellMed Medical Management",
    duration: "June 2023 - Present",
    subtitle: "Clinical Operations Fellowship",
    details: [
      "Clinical operations military fellow, providing comprehensive support to clinic staff and providers to deliver high-quality patient care.",
      "Cooperated with senior leadership to recognize the imperative for process implementation aimed at curbing patient readmissions, leading to the formation and guidance of an 8-member workgroup responsible for establishing comprehensive protocols impacting the entire clinic.Spearheaded the design of innovative strategies to identify high-risk patients and develop an effective protocol.",
    ],
    tags: ["Process Improvement", "Management By Objectives", "Business Strategy"],
    icon: "heartbeat",
  },
  {
    title: "US Army",
    duration: "June 2020 - Present",
    subtitle: "Respiratory Therapist",
    details: [
      "Collaborated with multidisciplinary teams in a Level 1 trauma center with 45+ Intensive Care Unit beds and 450+ inpatient beds to develop and implement evidence-based treatment plans to reduce unnecessary treatments and shortened the timeline of needed respiratory treatments, contributing to improved patient care, operational efficiency, and cost-effectiveness within the organization.",
      "Led the design and implementation of a supply tracking system, resulting in a remarkable 50% reduction in supply spending and effectively managing and maintaining the flow of resources to ensure their responsible and efficient use.",
      "Developed and implemented a comprehensive Standard Operating Procedure (SOP) for onboarding respiratory therapists, ensuring adherence to training requirements and competencies, and promoting a consistent and streamlined onboarding process for all new personnel joining the team.",
    ],
    tags: ["Critical Care", "Content Development", "Education & Training Content Writing"],
    icon: "heartbeat",
  },
  {
    title: "US Army",
    duration: "July 2017 - June 2019",
    subtitle: "CBRN Specialist",
    details: [
      "Mentored and guided a group of six Soldiers through targeted professional development, successfully preparing them for promotion by conducting performance evaluations, delivering constructive feedback, and providing tailored developmental advice ultimately leading to their successful promotions.",
      "Collaborated closely with senior leadership to conceptualize and implement comprehensive CBRNE (Chemical, Biological, Radiological, Nuclear, and Explosive) training program, encompassing the creation of detailed training plans and successful execution, resulting in alignment with leadership objectives and ensuring full staff compliance.",
    ],
    tags: ["Project Management",],
    icon: "group",
  },
];

export const education = [
  {
    title: "Bachelors in Biomedical Science, Minor in Data Science",
    duration: "January 2023 - Present",
    subtitle: "Arizona State University",
    details: [
      "GPA 3.7",
      "Genomics Research Experience using command line programming skills as applied to DNA sequences to study sex chromosomes and cancer.",
    ],
    tags: [
      "Data Structures & Algorithms",
      "R",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Associate of Science, Respiratory Care",
    duration: "",
    subtitle: "Uniformed Service University",
    details: [,
    ],
    tags: ["Certified Respiratory Therapist"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/nvphaneuf",
      },
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
      {
        text: "Clone this page",
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/nphaneuf/",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];

const gitUserName = "vinaysomawat";
const mediumUserName = "vinaysomawat";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
