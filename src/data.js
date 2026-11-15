// Sav sadržaj stranice je ovdje. Komponente ne moraš mijenjati.
export const profile = {
  name: "Muhamed Džafić",
  role: "Software Engineer",
  headline: "Hi, I'm Muhamed Džafić",
  intro:
    "Computer Science and Informatics graduate (BSc) and MSc student at the Faculty of Electrical Engineering Sarajevo. I build full-stack applications in C#/.NET and Node.js, and I also test what I build, with automated UI and API tests and a focus on security. I like problems where engineering, quality and AI come together.",
  location: "Sarajevo, Bosnia and Herzegovina",
  github: "https://github.com/mdzafic",
  linkedin: "https://linkedin.com/in/muhamed-dzafic",
  email: "mdzafic1@etf.unsa.ba",
  available: "Open to software engineering & QA internships and junior roles",
};



export const projects = [
  {
    slug: "rul-uncertainty",
    featured: true,
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
    featured: true,
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
    featured: true,
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
    {
    slug: "music-genre-classification",
    year: "2025",
    type: "AI / ML",
    title: "Music Genre Classification with CNNs on Mel-Spectrograms",
    text: "CNN that classifies music genres from mel-spectrogram images of audio recordings, trained on the GTZAN dataset.",
    overview:
      "A team project for the Digital Signal Processing course at the Faculty of Electrical Engineering Sarajevo. Audio recordings are converted into mel-spectrogram images, which turns genre classification into an image recognition problem solved by a convolutional neural network. The system can predict the genre from a spectrogram image or directly from a .wav file.",
    features: [
      "Conversion of .wav audio into mel-spectrogram images with librosa",
      "CNN with three Conv2D blocks (32, 64, 128 filters), a Dense layer and Dropout",
      "Genre prediction from a spectrogram image or directly from a .wav file",
      "Command-line interface with train, predict and interactive modes",
      "Evaluation with precision, recall and F1-score per genre",
    ],
    sections: [
      {
        title: "Dataset and preprocessing",
        items: [
          "GTZAN: 1000 tracks of 30 s (22050 Hz), 100 per genre, 10 genres",
          "Spectrograms loaded with Pillow, converted to RGB and resized",
          "Pixel values normalized to [0, 1]; labels one-hot encoded",
          "80/20 stratified train/test split, with 10% of training data used for validation",
        ],
      },
      {
        title: "Model and training",
        items: [
          "Three Conv2D + MaxPooling2D blocks, Flatten, Dense(128, ReLU), Dropout(0.3)",
          "Softmax output layer with 10 classes",
          "Adam optimizer, categorical cross-entropy, batch size 32",
        ],
      },
      {
        title: "Results",
        text: "Overall test accuracy was 64% on 300 test samples. Classical, metal and jazz were recognized most reliably, while disco, rock and reggae were the hardest. Training accuracy approached 100% while validation accuracy plateaued around 60 to 65%, which points to overfitting.",
        table: {
          head: ["Genre", "Precision", "Recall", "F1-score"],
          rows: [
            ["Classical", "0.96", "0.90", "0.93"],
            ["Metal", "0.91", "0.67", "0.77"],
            ["Jazz", "0.81", "0.73", "0.77"],
            ["Blues", "0.74", "0.77", "0.75"],
            ["Disco", "0.43", "0.50", "0.46"],
            ["Overall accuracy", "-", "-", "0.64"],
          ],
        },
      },
      {
        title: "Possible improvements",
        items: [
          "More data per genre and data augmentation",
          "Early stopping to reduce overfitting",
          "More advanced architectures such as ResNet or EfficientNet",
        ],
      },
    ],
    stack: ["Python", "TensorFlow/Keras", "librosa", "NumPy", "scikit-learn", "Pillow", "Matplotlib"],
    repo: "https://github.com/mdzafic/Klasifikacija-muzickih-zanrova-pomocu-digitalne-obrade-signala",
    demo: "",
    tint: "bg-rose-50",
  },
  {
    slug: "juice-shop-testing",
    featured: true,
    year: "2026",
    type: "QA / Testing",
    title: "End-to-End Testing of a Web Shop",
    text: "Manual and automated testing of a deliberately vulnerable web shop: Selenium UI tests, Postman API tests, security bug reports and a load test.",
    overview:
      "A team project on OWASP Juice Shop, a web shop built to contain realistic bugs and vulnerabilities. We covered the full QA cycle: designing test cases, automating UI and API tests, reporting bugs, and load testing.",
    features: [
      "8 black-box test cases in Azure DevOps Test Plans, with preconditions, test data, steps, expected results, severity and priority",
      "Selenium WebDriver UI tests in C# with NUnit, using the Page Object Model (9 page classes, 5 test classes)",
      "Tests grouped into Smoke, Regression, E2E, Negative and Security categories for selective runs",
      "21 chained Postman requests covering registration, login, basket, checkout and reviews, run through Postman CLI",
      "3 bugs reported in Azure DevOps, two of them critical security issues",
      "Load test in Loadster, analyzing response time, TTFB, throughput, CPU and memory",
    ],
    sections: [
      {
        title: "Results at a glance",
        table: {
          head: ["Area", "Result"],
          rows: [
            ["Manual test cases", "8 black-box cases documented"],
            ["UI automation", "8 of 8 Selenium tests passing"],
            ["API tests", "21 requests, 35 assertions, 0 failures"],
            ["Bugs reported", "3, including 2 critical security issues"],
            ["Load test", "40 virtual users, 7,784 hits, 0 errors"],
          ],
        },
      },
      {
        title: "Security findings",
        items: [
          "IDOR: access to another user's basket",
          "SQL Injection: authentication bypass",
        ],
      },
    ],
    stack: ["Azure DevOps", "Selenium", "C#", "NUnit", "Postman", "Loadster", "Git"],
    demo: "",
    tint: "bg-rose-50",
  },
    {
    slug: "arnica-ar",
    year: "2025",
    type: "AR / 3D",
    title: "Arnica AR: Augmented Reality Plant Education",
    text: "Mobile AR app about the endangered medicinal plant Arnica montana, with a Blender-made 3D model, interactive points of interest and a quiz. Built in Unity.",
    overview:
      "An augmented reality application developed for the Computer Graphics course at the Faculty of Electrical Engineering Sarajevo. It focuses on interactive education about Arnica montana (moravka), an endangered and protected medicinal plant. The camera of a mobile device recognizes a marker image and shows a 3D model of the plant that can be viewed from all angles. Points of interest on the model open multimedia content, and a quiz tests what the user has learned. The plant model and the surrounding scene were modeled in Blender and brought to life in Unity.",
    meta: [
      { label: "Course", value: "Computer Graphics, ETF Sarajevo" },
      { label: "Academic year", value: "2025/26" },
      { label: "Platform", value: "Android (.apk)" },
      { label: "My role", value: "Dodaj svoju ulogu" },
    ],
    features: [
      "Image recognition through the phone camera that activates the AR content",
      "Interactive 3D model of the plant that can be inspected from every angle",
      "Points of interest with multimedia content: tincture bottle (video on healing properties), microscope (anatomy of petals, leaves and stem) and goat (folk legend about the discovery of the plant's healing power)",
      "Educational quiz about the appearance, structure and characteristics of the plant",
      "Natural mountain habitat with bees, butterflies, rocks and grass",
    ],
    sections: [
      {
        title: "3D modeling in Blender",
        items: [
          "Challenges: detailed pistil, petal texture and leaf veins",
          "Flower symmetry used to model the petals more efficiently",
          "Stem and leaves modeled with clear shapes and the characteristic hairiness",
        ],
      },
      {
        title: "Development in Unity",
        items: [
          "AR implementation: camera handling and marker detection",
          "Interactivity: scripts for the points of interest and the quiz logic",
          "Optimization: Blender models adapted for smooth performance on mobile devices",
        ],
      },
      {
        title: "How to run",
        items: [
          "Install the .apk file on an Android device",
          "Point the camera at the marker image",
          "After recognition, the start scene opens with options for model view, information and the quiz",
        ],
      },
    ],
    stack: ["Unity", "C#", "Blender", "AR image recognition", "Android"],
    repo: "https://github.com/mdzafic/Arnica-montana-AR",
    demo: "",
    images: [
      { src: "/arnica-ar/1.png", caption: "Render 1" },
      { src: "/arnica-ar/2.png", caption: "Render 2" },
      { src: "/arnica-ar/3.png", caption: "Render 3" },
      { src: "/arnica-ar/4.png", caption: "Home page" },
      { src: "/arnica-ar/5.png", caption: "AR scene" },
    ],
    tint: "bg-emerald-50",
  },
];

export const education = [
  { period: "Oct 2026 – Present", title: "MSc Electrical Engineering, Computer Science and Informatics", place: "Faculty of Electrical Engineering Sarajevo" },
  { period: "Oct 2023 – Aug 2026", title: "BSc Electrical Engineering, Computer Science and Informatics", place: "Faculty of Electrical Engineering Sarajevo" },
];

export const skillGroups = [
  { label: "Languages", items: "C, C++, C#, Java, Python, JavaScript, Julia, SQL, HTML5, CSS3, LaTeX" },
  { label: "QA & Testing", items: "Azure DevOps Test Plans, Selenium WebDriver, NUnit, MSTest, Postman / Postman CLI, Loadster, Chrome DevTools" },
  { label: "Web", items: "Node.js, Express.js, ASP.NET Core" },
  { label: "Databases", items: "PostgreSQL, MySQL, Redis" },
  { label: "Tools", items: "Git, Docker, Postman" },
  { label: "AI & Data", items: "TensorFlow/Keras, scikit-learn, NumPy, pandas, SciPy, Matplotlib" },
  { label: "3D & AR", items: "Blender, Unity" },
];