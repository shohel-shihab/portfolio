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
      "Online course selling platform with instructor dashboard.",

    description:
      "CourseHub enables instructors to publish courses and students to enroll, watch lessons, and track their learning progress.",

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
      "Hotel booking platform with room management system.",

    description:
      "Users can search hotels, filter by budget, book rooms, and manage reservations while hotel owners manage listings.",

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