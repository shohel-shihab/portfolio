const projects = [
  {
    slug: "bibliodrop",
    title: "BiblioDrop",
    image: "/projects/bibliodrop.png",
    live: "https://bibliodrop.vercel.app",
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],

    shortDescription:
      "A modern library management platform where users can browse, borrow, and manage books.",

    description:
      "BiblioDrop is a full-stack library management application that allows users to browse books, borrow books, and manage their personal reading history. Administrators can manage books, categories, and users through a secure dashboard.",
    live: "https://bibliodrop-client-tau.vercel.app",
    github: "https://github.com/shohel-shihab/bibliodrop-client",
    challenges: [
      "Designing a scalable database structure.",
      "Implementing secure JWT authentication.",
      "Managing real-time book availability.",
    ],

    future: [
      "Email notifications.",
      "Payment integration.",
      "Book recommendation using AI.",
    ],
  },

  {
    slug: "studynook",
    title: "Study Nook",
    image: "/study.png",
     live: "https://studynook-app-one.vercel.app",

    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Tailwind",
    ],

    shortDescription:
      "Study Nook is a responsive online learning platform built to provide a seamless educational experience with course browsing, authentication, and an intuitive dashboard for learners.",

    description:
      "Study Nook is a modern full-stack e-learning platform designed to provide a seamless online learning experience. It allows users to browse and enroll in courses, manage their learning journey through an intuitive dashboard, and access educational content on any device. Built with a responsive and user-friendly interface, the platform focuses on delivering an engaging and efficient learning environment while showcasing scalable web development practices.",

    live: "https://studynook-app-one.vercel.app",
    github: "https://github.com/shohel-shihab/studynook-app",

    challenges: [
      "Role-based authentication.",
      "Course purchase flow.",
      "Dashboard state management.",
    ],

    future: [
      "Video streaming.",
      "Certificate generation.",
      "Live classes.",
    ],
  },

  {
    slug: "skills",
    title: "SkillSphere",
    image: "/skills.png",
    tech: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
    ],

    shortDescription:
      "SkillSphere is a modern full-stack learning platform that helps users discover, enroll in, and manage skill-based courses through a responsive and intuitive user interface.",

    description:
      "SkillSphere is a full-stack online learning platform built to make skill development more accessible and engaging. The application allows users to explore a wide range of courses, enroll in programs, and manage their learning progress through a clean and responsive dashboard. It features secure authentication, an intuitive user experience, and a scalable architecture, demonstrating best practices in modern web development while delivering a seamless learning experience across all devices.",

    live: "https://skillsphere-app-sooty.vercel.app",

    github: "https://github.com/shohel-shihab/skillsphere-app",

    challenges: [
      "Booking conflict handling.",
      "Filtering large datasets.",
      "Responsive UI.",
    ],

    future: [
      "Online payment.",
      "Google Maps.",
      "Reviews & Ratings.",
    ],
  },
];

export default projects;