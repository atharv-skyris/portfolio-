import { Project, Achievement } from './types';

const LOREM_IPSUM = "This project represents a significant milestone in my development journey. I started by analyzing the core problem: how to efficiently manage data in a chaotic environment. The solution involved designing a custom architecture that prioritizes speed and reliability.";

const JOURNEY_TEXT = "The development process was iterative. Initial prototypes focused solely on functionality, but as the system grew, I had to refactor the core logic to handle scale. Overcoming concurrency issues in the backend was a major challenge that taught me valuable lessons about distributed systems.";

const CONTRIBUTION_TEXT = "I was responsible for the entire backend architecture, database schema design, and API integration. I also collaborated on the frontend interface to ensure seamless data flow.";

export const projects: Project[] = [
    // TOP (Rank 1 & 2)
    {
        id: "01",
        title: "BRAINSTORM",
        description: "A revolutionary new way to organize thoughts using non-linear association. Currently in active development with a focus on graph-based knowledge mapping.",
        tags: ["System Design", "Graph DB", "React"],
        category: "top",
        year: "2024",
        role: "Lead Developer",
        githubUrl: "https://github.com",
        about: "Brainstorm is an attempt to map the human thought process digitally. Unlike linear note-taking apps, it uses a graph database to link concepts dynamically, mimicking how neurons fire in the brain.",
        journey: "Started as a simple React experiment, Brainstorm evolved into a complex system using Neo4j and WebGL for visualization. The biggest hurdle was optimizing the graph rendering for large datasets.",
        contribution: "Sole developer. Built the graph rendering engine, backend API, and authentication system."
    },
    {
        id: "02",
        title: "BOOKSHELF",
        description: "Digital library management redefined. Tracks reading habits, generates insights, and creates a social ecosystem for knowledge sharing.",
        tags: ["Full Stack", "Analytics", "Social"],
        category: "top",
        year: "2024",
        role: "Architect",
        githubUrl: "https://github.com",
        about: "Bookshelf goes beyond simple tracking. It analyzes reading speed, genre preferences, and suggests books based on complex user compatibility algorithms.",
        journey: JOURNEY_TEXT,
        contribution: CONTRIBUTION_TEXT
    },
    // BEST (Rank 3 & 4)
    {
        id: "03",
        title: "THERAPY AI",
        description: "An AI dedicated to mental health. Users interact via speech or text. Features include session summaries and context-aware journaling where the AI retains full context of history.",
        tags: ["Speech API", "Sentiment Analysis", "Journaling"],
        category: "best",
        year: "2023",
        role: "Hackathon Lead",
        githubUrl: "https://github.com",
        about: "Therapy AI leverages large language models to provide accessible mental health support. It uses Speech-to-Text for natural interaction and sentiment analysis to track user mood over time.",
        journey: "Built during a 36-hour hackathon. The main challenge was maintaining context over long conversations, which we solved using a vector database for long-term memory retrieval.",
        contribution: "Lead backend developer. Integrated OpenAI API, Google Speech API, and built the context retention system."
    },
    {
        id: "04",
        title: "MIRRORS",
        description: "Solving the 'lost file' problem. Upload media to folders and search using natural language. Built using Qdrant for vector embeddings and Node.js.",
        tags: ["Qdrant", "Vector Embeddings", "Node.js"],
        category: "best",
        year: "2023",
        role: "Backend Engineer",
        githubUrl: "https://github.com",
        about: "Mirrors allows users to search their local files using semantic meaning rather than just keywords. For example, searching 'sunset at beach' will find relevant photos even if they aren't named that way.",
        journey: "I wanted to learn about Vector Databases. I spent weeks understanding embeddings and how to index images efficiently. Qdrant proved to be the perfect tool for this.",
        contribution: "Designed the indexing pipeline and search API. Handled the integration between the file system and the vector store."
    },
    // STANDARD (Rank 5-9)
    {
        id: "05",
        title: "PROJECT NAYAN",
        description: "E-commerce website for a local shop. Built the backend architecture to manage orders and inventory efficiently.",
        tags: ["E-commerce", "Backend", "Real World"],
        category: "standard",
        year: "2023",
        githubUrl: "https://github.com",
        about: "A robust e-commerce platform built for high reliability. Handles order processing, inventory tracking, and payment gateway integration.",
        journey: JOURNEY_TEXT,
        contribution: CONTRIBUTION_TEXT
    },
    {
        id: "06",
        title: "AIRDRIVE",
        description: "Combines chat interface and cloud storage. Originally Flask, migrated to Node.js & Express for better performance.",
        tags: ["Node.js", "Express", "Cloud"],
        category: "standard",
        year: "2022",
        githubUrl: "https://github.com",
        about: "AirDrive reimagines file storage as a conversation. You 'send' files to the cloud and retrieve them by asking for them.",
        journey: "Originally built in Python (Flask), I rewrote the entire codebase in Node.js to handle asynchronous file uploads better and learn the ecosystem.",
        contribution: "Full stack developer. Handled the migration and implemented the chat-based file retrieval logic."
    },
    {
        id: "07",
        title: "AUTO ATTENDANCE",
        description: "Science fair project. AI detects faces and marks attendance in a database automatically to save teacher time.",
        tags: ["AI / CV", "Face Detection", "Python"],
        category: "standard",
        year: "2022",
        githubUrl: "https://github.com",
        about: "Uses OpenCV and face_recognition libraries to identify students from a classroom camera feed and update a SQL database in real-time.",
        journey: "My first foray into Computer Vision. Tuning the model to recognize faces in poor lighting was the biggest challenge.",
        contribution: "Built the Python recognition script and database connection."
    },
    {
        id: "08",
        title: "PASSWORD MGR",
        description: "Secure password storage. My first dive into backend using Node.js, Express, and JSON files as a database.",
        tags: ["Security", "JSON DB", "First Project"],
        category: "standard",
        year: "2021",
        githubUrl: "https://github.com",
        about: "A simple, locally hosted password manager that encrypts data before saving it to disk.",
        journey: "This was where I learned the basics of hashing, encryption, and REST APIs.",
        contribution: "Solo project. Wrote every line of code."
    },
    {
        id: "09",
        title: "CHAT APP",
        description: "Real-time messaging application created using Flask. Learned about websockets and state management.",
        tags: ["Flask", "Python", "WebSockets"],
        category: "standard",
        year: "2021",
        githubUrl: "https://github.com",
        about: "A websocket-based chat room that allows multiple users to communicate instantly.",
        journey: "Learned about the difference between HTTP and WebSockets, and how to manage state on the server.",
        contribution: "Solo project."
    }
];

export const achievements: Achievement[] = [
    {
        title: "HACKSAGON",
        organization: "IIIT GWALIOR",
        description: "Finalist. Competed against top teams to build a mental health solution (Therapy AI). Demonstrated real-time speech processing.",
        type: "FINALIST",
        year: "2023"
    },
    {
        title: "VIGYANSRAM",
        organization: "IIT BOMBAY",
        description: "National Competition. Presented innovative solutions focusing on systems thinking and practical code application.",
        type: "SHOWCASE",
        year: "2023"
    }
];