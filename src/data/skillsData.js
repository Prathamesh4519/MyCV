export const skillsCategories = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code",
    description: "Core languages for algorithmic problem solving and software development",
    skills: [
      {
        name: "C++",
        level: "Proficient",
        levelPercent: 88,
        description: "Primary language for DSA, Competitive Programming & core simulations (STL, OOP, Pointers)",
        highlight: "Core Strength",
        category: "languages",
        color: "#00599C"
      },
      {
        name: "C",
        level: "Strong Foundation",
        levelPercent: 82,
        description: "Low-level understanding of memory allocation, pointers, and systems programming",
        category: "languages",
        color: "#A8B9CC"
      },
      {
        name: "Python",
        level: "Intermediate",
        levelPercent: 78,
        description: "Scripting, rapid prototyping, and foundational libraries for Data Science & ML",
        category: "languages",
        color: "#3776AB"
      },
      {
        name: "JavaScript (ES6+)",
        level: "Intermediate",
        levelPercent: 80,
        description: "Modern asynchronous JS, DOM manipulation, closures, and React application logic",
        category: "languages",
        color: "#F7DF1E"
      }
    ]
  },
  {
    id: "webdev",
    name: "Web Development",
    icon: "Layout",
    description: "Building responsive, modern, and high-performance client applications",
    skills: [
      {
        name: "React.js",
        level: "Intermediate",
        levelPercent: 76,
        description: "Component architecture, hooks, state management, SPA routing, and modular UIs",
        highlight: "Primary Frontend",
        category: "webdev",
        color: "#61DAFB"
      },
      {
        name: "Tailwind CSS",
        level: "Proficient",
        levelPercent: 85,
        description: "Utility-first modern styling, responsive layouts, dark modes, and custom design tokens",
        highlight: "Fast Styling",
        category: "webdev",
        color: "#06B6D4"
      },
      {
        name: "HTML5",
        level: "Proficient",
        levelPercent: 92,
        description: "Semantic web structure, accessibility (a11y), SEO optimization, and metadata",
        category: "webdev",
        color: "#E34F26"
      },
      {
        name: "CSS3",
        level: "Proficient",
        levelPercent: 86,
        description: "Flexbox, Grid, keyframe animations, glassmorphism, responsive media queries",
        category: "webdev",
        color: "#1572B6"
      },
      {
        name: "PHP",
        level: "Basic / Exploring",
        levelPercent: 60,
        description: "Server-side scripting, form handling, and backend integration for dynamic websites",
        category: "webdev",
        color: "#777BB4"
      }
    ]
  },
  {
    id: "backend-db",
    name: "Databases & Backend",
    icon: "Database",
    description: "Data storage, document databases, and backend integration",
    skills: [
      {
        name: "MongoDB",
        level: "Basic / Intermediate",
        levelPercent: 65,
        description: "NoSQL document storage, collections, basic CRUD queries, and schema exploration",
        category: "backend-db",
        color: "#47A248"
      },
      {
        name: "PHP Backend Integration",
        level: "Foundational",
        levelPercent: 58,
        description: "Connecting frontend interfaces to database layers and handling request lifecycles",
        category: "backend-db",
        color: "#8892BF"
      }
    ]
  },
  {
    id: "tools",
    name: "Developer Tools & Design",
    icon: "Wrench",
    description: "Version control, workflow utilities, and digital tooling",
    skills: [
      {
        name: "Git",
        level: "Comfortable",
        levelPercent: 80,
        description: "Branching, committing, staging, rebasing, and clean version control workflow",
        category: "tools",
        color: "#F05032"
      },
      {
        name: "GitHub",
        level: "Comfortable",
        levelPercent: 82,
        description: "Open-source collaboration, pull requests, repository management, and hosting",
        category: "tools",
        color: "#FFFFFF"
      },
      {
        name: "Canva",
        level: "Proficient",
        levelPercent: 85,
        description: "Graphic design, event posters, presentation decks, and visual asset creation",
        category: "tools",
        color: "#00C4CC"
      },
      {
        name: "AutoCAD",
        level: "Foundational",
        levelPercent: 65,
        description: "2D drafting, geometric modeling, and engineering design fundamentals",
        category: "tools",
        color: "#E51027"
      }
    ]
  },
  {
    id: "learning-ml",
    name: "Currently Learning (AI / ML & Data Science)",
    icon: "Sparkles",
    isLearningCategory: true,
    description: "Active self-directed learning journey into Data Science & Machine Learning fundamentals",
    skills: [
      {
        name: "Machine Learning Concepts",
        isLearning: true,
        learningStatus: "Active Study",
        description: "Understanding supervised vs unsupervised learning, regression, classification, cost functions & gradients",
        category: "learning-ml",
        color: "#8B5CF6"
      },
      {
        name: "Data Analysis Fundamentals",
        isLearning: true,
        learningStatus: "Active Study",
        description: "Exploratory Data Analysis (EDA), identifying patterns, handling missing values, statistical summaries",
        category: "learning-ml",
        color: "#EC4899"
      },
      {
        name: "Python for Data Science",
        isLearning: true,
        learningStatus: "In Progress",
        description: "Writing clean, vectorized Python code for data processing and analysis pipelines",
        category: "learning-ml",
        color: "#3776AB"
      },
      {
        name: "NumPy",
        isLearning: true,
        learningStatus: "Hands-on Practice",
        description: "N-dimensional arrays, matrix operations, indexing, slicing, and linear algebra routines",
        category: "learning-ml",
        color: "#013243"
      },
      {
        name: "Pandas",
        isLearning: true,
        learningStatus: "Hands-on Practice",
        description: "DataFrames, Series, filtering, grouping, merging, data cleaning, and CSV/JSON ingestion",
        category: "learning-ml",
        color: "#150458"
      },
      {
        name: "Matplotlib",
        isLearning: true,
        learningStatus: "Hands-on Practice",
        description: "Plotting line graphs, scatter plots, histograms, subplots, and visual data representation",
        category: "learning-ml",
        color: "#11557c"
      },
      {
        name: "Scikit-learn",
        isLearning: true,
        learningStatus: "Beginning Exploration",
        description: "Building basic ML pipelines: Linear Regression, Logistic Regression, Decision Trees, and model evaluation",
        category: "learning-ml",
        color: "#F7931E"
      }
    ]
  }
];
