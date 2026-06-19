export const navLinks = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/tutorials', label: 'Tutorials', key: 'tutorials' },
  { href: '/notes', label: 'Notes & PDFs', key: 'notes' },
  { href: '/roadmaps', label: 'Roadmaps', key: 'roadmaps' },
];

export const categories = [
  {
    id: 'java',
    label: 'Java',
    title: 'Java Programming',
    icon: 'J',
    accent: 'text-[#f89820]',
    desc: 'Master enterprise Java programming, OOP principles, collections, multithreading and performance tuning.',
    topics: ['Installation', 'Variables', 'OOP', 'Collections', 'Multithreading'],
  },
  {
    id: 'sql',
    label: 'SQL',
    title: 'SQL & Databases',
    icon: 'DB',
    accent: 'text-[#00D4FF]',
    desc: 'Learn database design, normalization, joins, subqueries, indexing and interview questions.',
    topics: ['Installation', 'CRUD Operations', 'Joins', 'Subqueries', 'Interview Qs'],
  },
  {
    id: 'dsa',
    label: 'DSA',
    title: 'Data Structures & Algorithms',
    icon: 'DS',
    accent: 'text-[#00D4FF]',
    desc: 'Crack coding interviews with arrays, strings, linked lists, trees, recursion and graphs.',
    topics: ['Arrays', 'Strings', 'Linked Lists', 'Trees', 'Graphs'],
  },
  {
    id: 'development',
    label: 'Development',
    title: 'Web Development',
    icon: '</>',
    accent: 'text-[#7B61FF]',
    desc: 'Build interactive apps using HTML, CSS, JavaScript, React, Node.js and API designs.',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
  },
  {
    id: 'devops',
    label: 'DevOps',
    title: 'DevOps & Cloud',
    icon: 'Ops',
    accent: 'text-[#00b4d8]',
    desc: 'Automate pipelines with Git, GitHub, Docker, CI/CD and deployment workflows.',
    topics: ['Git', 'GitHub', 'Docker', 'CI/CD'],
  },
];

export const roadmapData = [
  {
    title: 'Java Developer Roadmap',
    icon: 'J',
    level: 'Beginner to Advanced',
    duration: '6 months',
    modules: '12 modules',
    desc: 'Complete path to becoming a professional Java developer, from syntax to scalable enterprise services.',
    steps: [
      'Java basics, variables, conditionals, arrays and loops.',
      'Abstractions, interfaces, streams, lambdas and collections.',
      'SQL, schema design, JDBC and Hibernate setup.',
      'Dependency injection, Spring MVC, REST APIs and security.',
      'Docker, Git workflows, CI/CD and mock interviews.',
    ],
  },
  {
    title: 'Backend Developer Roadmap',
    icon: 'API',
    level: 'Intermediate to Expert',
    duration: '8 months',
    modules: '16 modules',
    desc: 'Build resilient systems, databases, REST/GraphQL APIs, security layers and cloud deployments.',
    steps: [
      'Choose Java, Python or Node.js and master core structures.',
      'Use SQL, MongoDB and Redis for storage and caching.',
      'Design REST, GraphQL, JWT and OAuth2 flows.',
      'Use Git, Docker, CI/CD and cloud hosting foundations.',
      'Learn microservices, queues and scalability patterns.',
    ],
  },
  {
    title: 'Full Stack Developer Roadmap',
    icon: 'FS',
    level: 'Beginner to Expert',
    duration: '10 months',
    modules: '20 modules',
    desc: 'Master frontend interfaces, backend API processing, databases, testing and deployment.',
    steps: [
      'Semantic HTML, CSS layouts and JavaScript ES6.',
      'React, state management and styling systems.',
      'Node/Express or Spring Boot API development.',
      'Schemas, API connectors and request processing.',
      'Git, Docker, deployments and automated testing.',
    ],
  },
  {
    title: 'Software Engineer Roadmap',
    icon: 'SE',
    level: 'Rigorous Path',
    duration: '12 months',
    modules: '24 modules',
    desc: 'A complete computer science guide across algorithms, networking, systems and design patterns.',
    steps: [
      'DSA, memory, operating systems and networking.',
      'Concurrency, memory management and programming paradigms.',
      'SOLID, design patterns and clean architecture.',
      'Unit, integration, TDD, load testing and telemetry.',
      'System design, OOP rounds and complexity analysis.',
    ],
  },
];

export const seeded = {
  tutorials: [
    { _id: 't1', title: 'Java Foundations Masterclass', category: 'java', description: 'Start Java with syntax, OOP and clean coding habits.', duration: '42 min', level: 'Beginner', status: 'published' },
    { _id: 't2', title: 'React Components From Scratch', category: 'development', description: 'Build reusable components and stateful UI patterns.', duration: '55 min', level: 'Intermediate', status: 'published' },
  ],
  notes: [
    { _id: 'n1', title: 'Java OOP Notes', category: 'java', description: 'Compact guide for classes, interfaces and inheritance.', resourceType: 'PDF', pages: 28, status: 'published' },
    { _id: 'n2', title: 'SQL Joins Cheat Sheet', category: 'sql', description: 'Inner, outer, self and cross joins with examples.', resourceType: 'Cheat Sheet', pages: 12, status: 'published' },
  ],
  resources: [
    { _id: 'r1', title: 'Developer Setup Checklist', category: 'development', description: 'Essential tools and configs for a productive coding setup.', resourceType: 'Guide', status: 'published' },
  ],
};
