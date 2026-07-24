const projects = [
  {
    slug: "bibliodrop",

    title: "BiblioDrop",

    image: "/projects/bibliodrop.png",

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

    live: "https://your-live-site.com",

    github: "https://github.com/yourusername/bibliodrop-client",

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
    slug: "coursehub",

    title: "CourseHub",

    image: "/projects/coursehub.png",

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

    live: "https://your-coursehub.com",

    github: "https://github.com/yourusername/coursehub-client",

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
    slug: "travel-booking",

    title: "Travel Booking",

    image: "/projects/travel-booking.png",

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

    live: "https://travel-booking.com",

    github: "https://github.com/yourusername/travel-client",

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