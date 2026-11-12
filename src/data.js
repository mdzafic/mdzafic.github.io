// Sav sadržaj stranice je ovdje. Komponente ne moraš mijenjati.
export const profile = {
  name: "Muhamed Džafić",
  role: "Software Engineer",
  headline: "I build full-stack apps and probabilistic deep learning models.",
  intro:
    "Computer Science student at the Faculty of Electrical Engineering Sarajevo. I like problems where software engineering and AI come together, and I'm looking for an internship or junior role.",
  location: "Sarajevo, Bosnia and Herzegovina",
  github: "https://github.com/mdzafic",
  linkedin: "https://linkedin.com/in/muhamed-dzafic",
  email: "mdzafic1@etf.unsa.ba",
  available: "Open to internships & junior roles",
};

// Traka ispod hero sekcije
export const highlights = ["C#", "ASP.NET Core", "Node.js", "Python", "TensorFlow", "MySQL", "Docker"];

export const projects = [
  {
    slug: "rul-uncertainty",
    year: "2026",
    type: "AI / Research",
    title: "Remaining Useful Life Prediction with Uncertainty Estimation",
    text: "Uncertainty quantification framework for predictive maintenance. Implemented and compared MC Dropout, Deep Ensembles, Hybrid Bayesian Neural Networks and Conformal Prediction. This was my bachelor thesis.",
    overview:
      "Predictive maintenance needs more than a point estimate: it needs to know how much to trust it. This framework estimates Remaining Useful Life together with prediction uncertainty, so maintenance decisions can account for risk. (Dodaj ovdje 2-3 rečenice o datasetu i rezultatima.)",
    features: [
      "MC Dropout, Deep Ensembles and Hybrid Bayesian Neural Networks",
      "Conformal Prediction for calibrated prediction intervals",
      "Evaluation and comparison of all methods",
    ],
    stack: ["Python", "TensorFlow/Keras", "NumPy", "SciPy", "scikit-learn"],
    repo: "https://github.com/mdzafic",
    demo: "",
    // Slike stavi u public/projects/rul-uncertainty/
    images: [
      { src: "/projects/rul-uncertainty/1.png", caption: "Predictions with uncertainty bands" },
      { src: "/projects/rul-uncertainty/2.png", caption: "Method comparison" },
    ],
    tint: "bg-sky-50",
  },
  {
    slug: "smartlib",
    year: "2026",
    type: "Full-stack",
    title: "SmartLib: Library Information System",
    text: "Library management with authentication, book lending, reservations, reviews, reporting and role-based access control.",
    overview:
      "A full-stack library management system. Members can borrow and reserve books and leave reviews, while staff manage the catalogue and generate reports. (Dodaj svoju ulogu i izazove.)",
    features: [
      "Authentication and role-based access control",
      "Book lending and reservations",
      "Reviews and reporting",
      "Redis caching and Docker deployment",
    ],
    stack: ["C#", "ASP.NET Core", "Entity Framework", "MySQL", "Redis", "Docker"],
    repo: "https://github.com/mdzafic/SmartLib",
    demo: "",
    images: [
      { src: "/projects/smartlib/1.png", caption: "Catalogue page" },
      { src: "/projects/smartlib/2.png", caption: "Announcements" },
    ],
    tint: "bg-violet-50",
  },
  {
    slug: "scenario-pro",
    year: "2025",
    type: "Full-stack",
    title: "Scenario Pro: Collaborative Screenwriting",
    text: "Collaborative editing platform with text versioning, conflict prevention and a REST API.",
    overview:
      "A web platform where writers edit screenplays together. It keeps a version history and prevents conflicting edits. (Dodaj detalje.)",
    features: ["Collaborative editing", "Text versioning", "Conflict prevention", "REST API"],
    stack: ["Node.js", "Express.js", "MySQL", "Sequelize", "JavaScript"],
    repo: "https://github.com/mdzafic",
    demo: "",
    images: [{ src: "/projects/scenario-pro/1.png", caption: "Editor view" }],
    tint: "bg-lime-50",
  },
  {
    slug: "real-estate-hub",
    year: "2025",
    type: "Full-stack",
    title: "Real Estate Hub",
    text: "Platform for managing and discovering properties with filtering, map-based visualization, messaging and notifications.",
    overview:
      "A platform for listing and finding real estate. Users filter properties, see them on a map and contact owners. (Dodaj detalje.)",
    features: ["Property filtering", "Map-based property visualization", "Messaging", "Notifications"],
    stack: ["C#", "ASP.NET Core", "Entity Framework", "MySQL"],
    repo: "https://github.com/mdzafic",
    demo: "",
    images: [{ src: "/projects/real-estate-hub/1.png", caption: "Map view" }],
    tint: "bg-amber-50",
  },
];

export const education = [
  { period: "Oct 2026 – Present", title: "MSc Electrical Engineering, Computer Science and Informatics", place: "Faculty of Electrical Engineering Sarajevo" },
  { period: "Oct 2023 – Aug 2026", title: "BSc Electrical Engineering, Computer Science and Informatics", place: "Faculty of Electrical Engineering Sarajevo" },
];

export const skillGroups = [
  { label: "Languages", items: "C, C++, C#, Java, Python, JavaScript, Julia, SQL, HTML5, CSS3, LaTeX" },
  { label: "Web", items: "Node.js, Express.js, ASP.NET Core" },
  { label: "Databases", items: "PostgreSQL, MySQL, Redis" },
  { label: "Tools", items: "Git, Docker, Postman" },
  { label: "AI & Data", items: "TensorFlow/Keras, scikit-learn, NumPy, pandas, SciPy, Matplotlib" },
  { label: "3D & AR", items: "Blender, Augmented Reality" },
];