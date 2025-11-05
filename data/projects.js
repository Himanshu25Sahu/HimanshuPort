export const projects = [
  {
    slug: "townsquare",
    title: "Townsquare – The Neighborhood's Digital Pulse",
    category: "Full Stack",
    tagline: "Hyperlocal community platform with real-time interactions",
    images: [
      "/HimanshuSahu/phome.png",
      "/HimanshuSahu/townsqaurepostpage.png",
      "/HimanshuSahu/townsquarediscussion.png",
      "/HimanshuSahu/townsqauremyprof1.png",
      {type:"video",url:"/HimanshuSahu/townsqaurevid.mp4"}
    ],
    problem:
      "Most neighborhood communication still happens through scattered WhatsApp groups and offline channels, making it hard for residents to report issues, buy/sell locally, or stay updated on community alerts.",
    solution:
      "Developed a hyperlocal networking app enabling residents to discuss civic issues, trade locally, and get real-time updates. Integrated WebSockets for instant communication and Redis caching to improve scalability and speed.",
    buildProcess: [
      "Interviewed local residents to understand how community coordination typically happens",
      "Designed database schema for posts, polls, and marketplace listings",
      "Built REST APIs with Node.js and MongoDB; optimized with Redis caching",
      "Used Socket.io for real-time communication and notifications",
      "Deployed the app on Render and tested concurrency with simulated 30+ users"
    ],
    features: [
      "Post and discuss local issues",
      "Community chat and emergency alerts",
      "Local marketplace and announcements section",
      "Polls and surveys with instant results",
      "User authentication and role-based access control"
    ],
    challenges: [
      {
        title: "Real-Time Synchronization",
        description:
          "Integrated Socket.io with Redis pub/sub to maintain chat and feed consistency across multiple clients."
      },
      {
        title: "Performance Optimization",
        description:
          "Implemented lazy loading and caching that improved client performance by 28% under load."
      },
      {
        title: "Data Privacy and Role Management",
        description:
          "Designed secure role-based APIs to protect user data and limit unauthorized access to community posts."
      }
    ],
    learnings: [
      "Deepened understanding of Redis caching and WebSocket-based architectures",
      "Improved API design for scalable community-driven applications",
      "Learned how to benchmark concurrent performance and handle data consistency"
    ],
    impact: [
      { metric: "30+", description: "Simulated concurrent users during testing" },
      { metric: "28%", description: "Improvement in client-side performance" },
      { metric: "5+", description: "Integrated community features enhancing engagement" }
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redis", "Jest"],
    role:
      "Full Stack Developer – Led design and development of both client and backend, integrated real-time systems, and handled deployment.",
    teamSize: "2",
    githubUrl: "https://github.com/Himanshu25Sahu/TownSquare",
    demoUrl: "https://townsquareclient.onrender.com/",
    blogUrl: "/blogs/townsquare"
  },
  {
    slug: "devsphere",
    title: "Devsphere – Where Developers Connect, Code & Collaborate",
    category: "Full Stack",
    tagline: "All-in-one platform for developer collaboration and coding",
    images: [
      "/HimanshuSahu/devsphome.png",
      "/HimanshuSahu/devspchat.png",
      "/HimanshuSahu/devspcommu.png",
      "/HimanshuSahu/devspsearch.png",
      {type:"video",url:"/HimanshuSahu/devspvid.mp4"}
    ],
    problem:
      "Developers often juggle multiple tools for code sharing, chatting, and idea discussions, leading to fragmented workflows and poor collaboration.",
    solution:
      "Built a unified platform for developers to connect, chat, share code in real-time, and collaborate seamlessly. Integrated a web-based compiler, dynamic feed, and 1-on-1/group messaging features.",
    buildProcess: [
      "Planned the architecture for feed, chat, and compiler services",
      "Implemented backend using Express.js and MongoDB with efficient data indexing",
      "Added WebSocket communication for real-time messaging",
      "Integrated CodeMirror-based editor for multi-language support",
      "Optimized UI and API flow to enhance responsiveness by 20%"
    ],
    features: [
      "1:1 and group chats with WebSocket updates",
      "Dynamic developer feed and user profiles",
      "Built-in web compiler supporting multiple languages",
      "Community groups and code sharing",
      "Follow and search functionality for networking"
    ],
    challenges: [
      {
        title: "Low-Latency Communication",
        description:
          "Optimized Socket.io connections to handle parallel chat and feed events efficiently."
      },
      {
        title: "Compiler Integration",
        description:
          "Used CodeMirror and sandboxed execution environments to safely compile and display output."
      },
      {
        title: "Scalability",
        description:
          "Optimized database queries and added pagination to support large chat and feed data."
      }
    ],
    learnings: [
      "Learned to integrate multi-language editors with real-time communication",
      "Improved knowledge of concurrency and WebSocket performance tuning",
      "Strengthened full-stack API optimization skills"
    ],
    impact: [
      { metric: "20%", description: "Boosted UI responsiveness" },
      { metric: "100+", description: "Concurrent messages handled smoothly" },
      { metric: "3", description: "Core modules (Feed, Chat, Compiler) built and deployed" }
    ],
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "CodeMirror", "Express", "Jest"],
    role:
      "Full Stack Developer – Built and optimized entire product flow, from backend APIs to real-time compiler integration.",
    teamSize: "2",
    githubUrl: "https://github.com/Himanshu25Sahu/DevSphere",
    demoUrl: "https://dev-sphere-gilt.vercel.app/",
    blogUrl: "/blogs/devsphere"
  },
  {
    slug: "think-twice",
    title: "Think-Twice – Decision Making & Analytics Platform",
    category: "DevOps",
    tagline: "Data-backed decision tracking and analysis tool",
    images: [
      "/HimanshuSahu/tthome.png",
      "/HimanshuSahu/ttabout.png"
    ],
    problem:
      "People make hundreds of decisions daily but rarely have a structured way to record, analyze, or learn from their outcomes.",
    solution:
      "Developed a web platform where users can log decisions, assign confidence scores, gather community feedback, and analyze outcomes using visual analytics.",
    buildProcess: [
      "Outlined data model for decisions, metrics, and confidence tracking",
      "Built REST API with Node.js and MongoDB using efficient schema design",
      "Containerized app with Docker and automated CI/CD using GitHub Actions",
      "Implemented caching and load balancing to achieve 2–13ms response times",
      "Added Jest-based unit tests for reliability and performance assurance"
    ],
    features: [
      "Decision logging with confidence levels and outcome tracking",
      "Community feedback and discussion threads",
      "Analytics dashboard with performance charts",
      "CI/CD pipeline integration with Docker and GitHub Actions",
      "Highly optimized backend (2–13ms response)"
    ],
    challenges: [
      {
        title: "High Performance at Scale",
        description:
          "Designed caching and indexing strategies for 300+ concurrent users with minimal latency."
      },
      {
        title: "Automated Deployment",
        description:
          "Set up Docker-based CI/CD pipeline with automated tests and deployment triggers."
      },
      {
        title: "Data Visualization",
        description:
          "Implemented dynamic analytics with custom chart components using Chart.js."
      }
    ],
    learnings: [
      "Learned end-to-end CI/CD automation using Docker and GitHub Actions",
      "Improved understanding of load balancing, caching, and request optimization",
      "Gained insights into product analytics and feedback systems"
    ],
    impact: [
      { metric: "300+", description: "Concurrent users handled locally" },
      { metric: "2–13ms", description: "Average API response time" },
      { metric: "100%", description: "Automated deployment success rate" }
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "Docker", "GitHub Actions", "Jest", "Tailwind CSS"],
    role:
      "Full Stack Developer – Built core product, implemented caching and DevOps pipelines, and managed analytics layer.",
    teamSize: "Solo Project",
    githubUrl: "https://github.com/Himanshu25Sahu/Think-Twice",
    demoUrl: "https://thinktwice.onrender.com/",
    blogUrl: "/blogs/think-twice"
  },
  {
    slug: "novascript",
    title: "NovaScript – A Human-Friendly Interpreted Programming Language",
    category: "Systems Programming",
    tagline: "English-like interpreted language for beginner programmers",
    images: [
      "/HimanshuSahu/novahome.png",
      "/HimanshuSahu/novadocs.png",
      "/HimanshuSahu/novaex.png"
    ],
    problem:
      "Most programming languages have steep learning curves due to complex syntax and abstract concepts, intimidating beginners.",
    solution:
      "Designed NovaScript — an English-like interpreted language built with C++, enabling beginners to code intuitively without deep syntax knowledge. Documented the entire language architecture through an interactive web-based documentation site.",
    buildProcess: [
      "Developed lexer, parser, and evaluator in C++ implementing AST-based interpretation",
      "Designed syntax inspired by natural English statements",
      "Created Next.js documentation site to visualize the language grammar and execution flow",
      "Structured guides, examples, and syntax references for users"
    ],
    features: [
      "English-like syntax for simplicity",
      "Support for variables, loops, and functions",
      "C++ core interpreter and AST evaluation",
      "Interactive web documentation with examples"
    ],
    challenges: [
      {
        title: "Interpreter Architecture",
        description:
          "Built an AST-driven execution model and handled expression parsing with recursive descent parsing."
      },
      {
        title: "Language Documentation",
        description:
          "Created structured documentation explaining tokenization, parsing, and evaluation phases."
      }
    ],
    learnings: [
      "Gained practical experience in compiler/interpreter design",
      "Learned how to construct and traverse ASTs in C++",
      "Improved ability to communicate technical design through documentation"
    ],
    impact: [
      { metric: "4", description: "Core language features implemented" },
      { metric: "3", description: "Phases explained (Lexing, Parsing, Evaluation)" }
    ],
    tech: ["C++", "Next.js", "AST", "Tailwind CSS", "Web APIs"],
    role:
      "Language Designer & Developer – Designed interpreter logic, implemented AST traversal, and authored documentation.",
    teamSize: "2",
    githubUrl: "https://github.com/Himanshu25Sahu/Novascript",
    demoUrl: "https://novascript-docs.vercel.app/",
    blogUrl: "/blogs/novascript"
  },
  {
  slug: "algoviz",
  title: "AlgoViz – Interactive Algorithm Visualizer",
  category: "Full stack",
  tagline: "Step-by-step visualization of classic algorithms for better learning",
  images: [
    "/HimanshuSahu/algoclass.png",
    "/HimanshuSahu/algochat.png",
    "/HimanshuSahu/algoreg.png",
    "/HimanshuSahu/algoreg2.png",
    {type:"video",url:"/HimanshuSahu/algovizvid.mp4"}
  ],
  problem:
    "Beginners often find it challenging to understand how algorithms operate internally due to abstract textbook explanations and lack of visualization tools.",
  solution:
    "Developed an interactive visualization platform to help learners see sorting, searching, and graph algorithms in real time, with speed control and step-by-step execution.",
  buildProcess: [
    "Designed modular visualization components in React.",
    "Used D3.js to animate algorithm steps with transitions.",
    "Implemented adjustable speed, pause, and step features for better control.",
    "Optimized rendering to handle large data arrays efficiently."
  ],
  features: [
    "Visualize algorithms like QuickSort, MergeSort, BFS, and DFS.",
    "Adjustable speed and step-through controls.",
    "Clean, minimal, and responsive design.",
    "Reusable architecture for adding new algorithms easily."
  ],
  challenges: [
    {
      title: "Synchronizing Animations with Logic",
      description:
        "Handled precise synchronization between recursive algorithm calls and animation frames."
    },
    {
      title: "Performance Optimization",
      description:
        "Reduced DOM re-renders by using React memoization and controlled state updates."
    }
  ],
  learnings: [
    "Improved understanding of data structures and recursive visualization design.",
    "Learned to integrate D3 animations with React components efficiently.",
    "Enhanced problem-solving skills for algorithmic UX representation."
  ],
  impact: [
    { metric: "10+", description: "Algorithms visualized with dynamic animations" },
    { metric: "2x", description: "Rendering performance improvement after optimization" }
  ],
  tech: ["React", "D3.js","Python", "JavaScript", "CSS", "Flask"],
  role:
    "Full stack Developer – Designed and implemented visualization logic, UI, and performance optimizations.",
  teamSize: "Solo Project",
  githubUrl: "https://github.com/Himanshu25Sahu/AlgoViz",
  demoUrl: "https://algoviz-ichv.onrender.com/",
  blogUrl: "/blogs/algoviz"
},
{
  slug: "gemicook",
  title: "GemiCook – AI-Powered Recipe & Meal Planner",
  category: "Full Stack",
  tagline: "Smart recipe generator using Gemini API and real-time ingredient matching",
  images: [
    "/HimanshuSahu/gemicook.jpg",
    "/HimanshuSahu/gemi2.jpg",
    "/HimanshuSahu/gemi3.jpg"
  ],
  problem:
    "Users struggle to decide what to cook with limited ingredients, often wasting time searching for suitable recipes manually.",
  solution:
    "Developed an AI-driven meal planner that suggests recipes instantly based on user-input ingredients using Google's Gemini API.",
  buildProcess: [
    "Integrated Google Gemini API for dynamic recipe generation.",
    "Designed clean UI for fast ingredient input and recipe display.",
    "Implemented text-to-speech support for hands-free cooking.",
    "Added calorie estimation and recipe summary card generator."
  ],
  features: [
    "AI-generated recipes from given ingredients.",
    "Text-to-speech narration for cooking instructions.",
    "Nutritional value estimation for each dish.",
    "Bookmark and share favorite recipes."
  ],
  challenges: [
    {
      title: "Prompt Engineering for Accuracy",
      description:
        "Refined AI prompts to return consistent and diverse recipe suggestions."
    },
    {
      title: "API Optimization",
      description:
        "Handled multiple concurrent API calls with controlled request batching."
    }
  ],
  learnings: [
    "Learned to integrate and optimize Gemini API responses.",
    "Improved UX skills by designing for conversational and AI-based interactions.",
    "Enhanced understanding of AI prompt control and caching."
  ],

  tech: ["React", "Gemini API", "CSS"],
  role:
    "Full Stack Developer – Designed AI integration, built frontend, and optimized Gemini responses.",
  teamSize: "Solo Project",
  githubUrl: "https://github.com/Himanshu25Sahu/gemiCook",
  demoUrl: "https://himanshu25sahu.github.io/gemiCook/",
  blogUrl: "/blogs/gemicook"
},
{
  slug: "coride",
  title: "Coride – Community Carpool & Ride-Sharing Platform",
  category: "Full Stack",
  tagline: "Affordable and eco-friendly carpooling with real-time route matching",
  images: [
    {type:"video",url:"/HimanshuSahu/coridevid.mp4"},
    "/HimanshuSahu/corideimg.png"
  ],
  problem:
    "Commuters often face high transportation costs and lack efficient tools to find reliable ride-sharing options with nearby users.",
  solution:
    "Built a MERN-based platform that connects users traveling on similar routes, enabling carpooling and reducing daily commute costs.",
  buildProcess: [
    "Developed backend with Express.js and MongoDB for ride management.",
    "Integrated Google Maps API for location-based ride search.",
    "Implemented secure authentication and ride confirmation flow.",
    "Designed a responsive frontend for smooth booking experience."
  ],
  features: [
    "Search and offer rides by route and location.",
    "Google Maps-based visualization and path preview.",
    "Ride confirmation, history tracking, and notifications.",
    "User authentication and trust-based profiles."
  ],
  challenges: [
    {
      title: "Accurate Location Matching",
      description:
        "Handled geolocation precision errors by normalizing coordinates and filtering by distance."
    },
    {
      title: "Security and Trust",
      description:
        "Added verification steps and safety prompts to encourage secure sharing."
    }
  ],
  learnings: [
    "Improved understanding of geolocation APIs and route optimization.",
    "Learned backend data structuring for location-based search.",
    "Enhanced skills in UX for map-based web applications."
  ],
  impact: [
    { metric: "100+", description: "Test users during pilot phase" },
    { metric: "40%", description: "Reduction in average commute cost" },
    { metric: "5", description: "Core ride features integrated successfully" }
  ],
  tech: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
  role:
    "Full Stack Developer – Implemented map-based ride matching, backend APIs, and user flow logic.",
  teamSize: "Solo Project",
  githubUrl: "https://github.com/Himanshu25Sahu/Coride",
  blogUrl: "/blogs/coride"
}

];
