// Sav sadržaj stranice je ovdje. Komponente ne moraš mijenjati.
export const profile = {
  name: "Muhamed Džafić",
  role: "Software Engineer",
  headline: "Hi, I'm Muhamed Džafić",
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
      "My bachelor thesis at the Faculty of Electrical Engineering Sarajevo. A deterministic model can only say \"this engine fails in 47 cycles\". In safety-critical settings such as aviation and energy, engineers also need to know how much to trust that number, so the framework returns a prediction with a confidence measure, e.g. 50 ± 13 cycles. I implemented and compared four uncertainty methods on the same LSTM base, and calibrated them with Conformal Prediction.",
    features: [
      "Four methods on an identical LSTM base: Baseline, MC Dropout, Deep Ensemble and Hybrid Bayesian NN",
      "Custom DenseVariational layer for the Hybrid BNN",
      "Conformal Prediction as a post-hoc calibration to 95% coverage",
      "Approximate split of uncertainty into aleatoric and epistemic parts",
      "Evaluation with RMSE, MAE, coverage, interval width, NLL, MACE and bootstrap confidence intervals",
    ],
    sections: [
      {
        title: "Dataset and setup",
        items: [
          "NASA CMAPSS FD001: 100 training and 100 test turbofan engines, 21 sensors and 3 operating parameters",
          "7 constant sensors removed after EDA (24 to 17 features); RUL clipped at 125 cycles",
          "Input window of 40 cycles; 96 test engines after filtering",
          "Hyperparameters chosen by one-factor-at-a-time sensitivity analysis on a validation set",
          "Results are mean ± std over 10 independent runs with different random seeds",
        ],
      },
      {
        title: "Results",
        text: "All models reach statistically comparable accuracy (bootstrap intervals for RMSE overlap), but they differ clearly in how well their uncertainty is calibrated.",
        table: {
          head: ["Model", "RMSE", "Coverage (95%)", "NLL", "MACE"],
          rows: [
            ["Baseline LSTM", "14.42 ± 0.28", "-", "-", "-"],
            ["MC Dropout", "14.35 ± 0.18", "0.80 ± 0.03", "4.34 ± 0.20", "0.14 ± 0.03"],
            ["Deep Ensemble", "14.17 ± 0.11", "0.82 ± 0.02", "4.16 ± 0.14", "0.09 ± 0.02"],
            ["Hybrid BNN", "14.46 ± 0.23", "0.85 ± 0.04", "4.19 ± 0.29", "0.09 ± 0.03"],
          ],
        },
      },
      {
        title: "Effect of Conformal Prediction",
        text: "Calibration brings coverage close to the 95% target for every method, but intervals get wider. Deep Ensemble keeps the narrowest calibrated intervals.",
        table: {
          head: ["Model", "Coverage before", "Coverage after", "Width before", "Width after"],
          rows: [
            ["MC Dropout", "0.792", "0.948", "30.12", "63.75"],
            ["Deep Ensemble", "0.818", "0.922", "31.71", "55.57"],
            ["Hybrid BNN", "0.831", "0.961", "38.52", "68.43"],
          ],
        },
      },
      {
        title: "Key findings",
        items: [
          "Accuracy and calibration are independent dimensions of model quality",
          "No method wins on every metric: Deep Ensemble is the most stable and sharpest, Hybrid BNN has the highest coverage, MC Dropout is the simplest to implement",
          "Aleatoric (data noise) uncertainty dominates over epistemic in both MC Dropout and Hybrid BNN, which matches the physics of engine degradation",
        ],
      },
    ],
    stack: ["Python", "TensorFlow/Keras", "NumPy", "SciPy", "scikit-learn", "pandas"],
    repo: "https://github.com/mdzafic/uq-predictive-maintenance-framework",
    demo: "",
    images: [
      { src: "/rul-uncertainty/1.png", caption: "Deterministic Baseline Predictions" },
      { src: "/rul-uncertainty/2.png", caption: "Conformal Prediction Calibration" },
      { src: "/rul-uncertainty/3.png", caption: "Uncertainty Calibration" },
      { src: "/rul-uncertainty/4.png", caption: "Uncertainty Decomposition" },
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
        "SmartLib is a web-based library information system built as a team project (Team 5) for the Software Engineering course at the Faculty of Electrical Engineering Sarajevo. It covers the whole library workflow: cataloguing books, managing members and loans, generating reports, a community forum and email notifications. The REST API and the MVC web app share one infrastructure layer, so data and business logic stay consistent without duplication.",
    meta: [
      { label: "Course", value: "Software Engineering, ETF Sarajevo" },
      { label: "Academic year", value: "2025/26" },
      { label: "Team", value: "Team 5" },
      { label: "My role", value: "Dodaj svoju ulogu" },
    ],
    features: [
      "Catalogue with ISBN, author, categories, and automatic book cover fetching",
      "JWT authentication with Member, Librarian and Administrator roles",
      "Lending with due dates, email reminders, and a reservation queue",
      "Membership plans with status and expiry tracking",
      "Community forum, reviews and ratings, wishlist, and book recommendations",
      "Audit log of all actions and PDF report export",
      "Calendar of library events and purchase requests for new books",
    ],
    sections: [
      {
        title: "Architecture",
        text: "Layered (N-tier) architecture. The API and the web app both depend on the same Core and Infrastructure layers.",
        items: [
          "Core: domain models, interfaces, DTOs",
          "Infrastructure: repositories, services, EF Core data access",
          "API: JWT-protected REST endpoints",
          "Web: MVC application with Razor views and Bootstrap",
        ],
      },
      {
        title: "Technical highlights",
        items: [
          "Distributed Redis cache with an in-memory fallback",
          "Cache versioning and request deduplication (single-flight pattern)",
          "Background services for email notifications and inactive account cleanup",
          "Password hashing, JWT and CSRF protection",
          "Docker Compose for MySQL, Redis, API and web app; CI/CD with GitHub Actions",
        ],
      },
      {
        title: "Testing",
        text: "Unit, integration, end-to-end UI (Playwright), security and user acceptance tests.",
      },
    ],
    stack: ["C#", "ASP.NET Core", "Entity Framework", "MySQL", "Redis", "Docker", "JWT"],
        repo: "https://github.com/mdzafic/SmartLib",
    demo: "",
    images: [
      { src: "/smartlib/1.png", caption: "Catalogue page" },
      { src: "/smartlib/4.png", caption: "Membership Management" },      
      { src: "/smartlib/3.png", caption: "Management Reports" },
      { src: "/smartlib/2.png", caption: "Announcements" },
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
        "Scenario Pro is a full-stack web application for writing and collaboratively editing screenplays, built for the Web Technologies course at the Faculty of Electrical Engineering Sarajevo. Development was split into four iterations (\"spirals\"), starting from a static interface and ending with a fully functional backend backed by a MySQL database.",
    meta: [
        { label: "Course", value: "Web Technologies, ETF Sarajevo" },
        { label: "Academic year", value: "2025/26" },
        { label: "Development", value: "4 iterations (spirals)" },
    ],
    features: [
        "Dedicated screenplay editor with automatic detection of roles and dialogue",
        "Line locking mechanism that prevents conflicts during simultaneous editing",
        "Versioning through checkpoints, so a screenplay can be restored to any previous state",
        "Screenplay analysis: word count, role detection and dialogue grouping",
        "Complete REST API with JSON responses and valid HTTP status codes",
    ],
    sections: [
        {
        title: "Tech stack by layer",
        table: {
            head: ["Layer", "Technology"],
            rows: [
            ["Frontend", "HTML5, CSS3"],
            ["Backend", "Node.js, Express.js"],
            ["Database", "MySQL, Sequelize ORM"],
            ["Communication", "AJAX (Fetch API)"],
            ],
        },
        },
        {
        title: "Project structure",
        items: [
            "html/: static pages (projects, writing and user)",
            "css/: page-specific styles",
            "js/: frontend logic (editor, AJAX calls and connectors)",
            "routes/ and models/: backend architecture (Express routes and Sequelize models)",
        ],
        },
        {
        title: "Development phases",
        items: [
            "Spiral 1: static UI for three key pages with a focus on responsiveness",
            "Spiral 2: JavaScript modules for the editor and text analysis",
            "Spiral 3: Node.js/Express REST API with JSON file storage",
            "Spiral 4: migration to a MySQL database and introduction of the versioning system",
        ],
        },
    ],
    stack: ["Node.js", "Express.js", "MySQL", "Sequelize", "JavaScript", "HTML5", "CSS3"],
    repo: "https://github.com/mdzafic/ScenarijPro",
    demo: "",
    images: [
      { src: "/scenario-pro/1.png", caption: "Projects Dashboard" },
      { src: "/scenario-pro/2.png", caption: "Screenplay Editor" }, 
      { src: "/scenario-pro/3.png", caption: "Account Settings" },
    ],
    tint: "bg-lime-50",
    },
    {
    slug: "real-estate-hub",
    year: "2025",
    type: "Full-stack",
    title: "Real Estate Hub",
    text: "Platform for managing and discovering properties with filtering, map-based visualization, contact forms and automatic email notifications.",
    overview:
  "Real Estate Hub is a web platform for buying, selling and renting apartments, houses and commercial spaces. It was developed as a team project by four students (Group 6, Team 3) for the Object-Oriented Analysis and Design course at the Faculty of Electrical Engineering Sarajevo. Owners and agents publish listings with photos and a location, while visitors search and filter them, view them on a map and contact the owner. Registered users can save their search criteria and get an email as soon as a matching listing appears. The app is built with ASP.NET Core MVC and follows the Model-View-Controller pattern.",
    meta: [
      { label: "Course", value: "Object-Oriented Analysis and Design, ETF Sarajevo" },
      { label: "Academic year", value: "2024/25" },
      { label: "Team", value: "Group 6, Team 3 (4 members)" },
      { label: "My role", value: "Dodaj svoju ulogu" },
    ],
    features: [
      "Registration and login with ASP.NET Core Identity, plus profile management",
      "Listings with title, description, price, area, number of rooms, multiple photos and location",
      "Search and filtering by price range, rooms, area, property type and location, with paging and sorting",
      "Map-based visualization, with the location picked directly on a map when creating a listing",
      "Contact form that sends the buyer's message to the owner or agent",
      "Automatic email notifications for new listings that match a user's saved filters",
      "Listing statistics for owners: number of views and contact clicks",
    ],
    sections: [
      {
        title: "Architecture",
        text: "Classic MVC structure of an ASP.NET Core application, with a service layer for background work.",
        items: [
          "Models: Nekretnina (property), Oglas, Lokacija, FilterNekretnina, SlikeNekretnine, PoslanoObavjestenje and ApplicationUser (extends IdentityUser)",
          "Controllers and Views: Razor views for search, listings, messages, notifications and user profiles",
          "Data: Entity Framework Core DbContext and migrations on a MySQL database",
          "Services: background and email services",
          "Areas/Identity: ASP.NET Core Identity pages for authentication",
        ],
      },
      {
        title: "Email notifications",
        text: "A background service (ObavjestenjeService, built on BackgroundService) runs every 2 minutes and checks for newly added properties. For each one it looks for saved user filters with notifications turned on and sends an HTML email through the Gmail SMTP server using an asynchronous helper. A separate PoslanoObavjestenje table records what was already sent, so a user never gets the same listing twice.",
      },
      {
        title: "Technical highlights",
        items: [
          "Asynchronous background processing with a hosted service, using scoped DbContext instances",
          "Range filters for rooms and area (min/max), instead of exact values",
          "Paged results through a dedicated PagedNekretnineViewModel",
          "Geolocation with required coordinates, so every listing is guaranteed to have a position on the map",
          "View counter per listing for owner statistics",
        ],
      },
      {
        title: "Non-functional requirements",
        items: [
          "Responsive on desktop and mobile and compatible with modern browsers",
          "Designed to be scalable as the number of users and listings grows",
          "User data protected so that only the profile owner has full access",
        ],
      },
    ],
    stack: ["C#", "ASP.NET Core MVC", "Entity Framework", "MySQL", "Razor", "SMTP"],
    repo: "https://github.com/mdzafic/RealEstateHub",
    demo: "",
    images: [
      { src: "/real-estate-hub/1.png", caption: "Home Page" },
      { src: "/real-estate-hub/2.png", caption: "Property Details" },
      { src: "/real-estate-hub/3.png", caption: "Location Map" },
      { src: "/real-estate-hub/4.png", caption: "Property Filter" },
      { src: "/real-estate-hub/5.png", caption: "Active Listings" },
      { src: "/real-estate-hub/6.png", caption: "Search Results" },
      { src: "/real-estate-hub/7.png", caption: "Direct Messaging" },
    ],
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