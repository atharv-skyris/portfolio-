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
    // BEST (Rank 3 & 4)
    {
        id: "02",
        title: "THERAPY AI",
        description: "An AI dedicated to mental health. Users interact via speech or text. Features include session summaries and context-aware journaling where the AI retains full context of history.",
        tags: ["Nodejs", "Express", "MongoDB" ,  "Redis" , "Qdrant"  , "Gemini API" ,"Vector Embeddings" ,  "EJS"],
        category: "best",
        year: "2023",
        role: "Hackathon Lead",
        githubUrl: "https://github.com/atharv-skyris/therapyAi-Official.git",
        about: "Therapy AI is a dedicated mental health companion that provides a safe, non-judgmental space where users can freely express their emotions and receive compassionate support. The AI remembers users' past conversations through a dual-memory system, allowing it to offer personalized responses tailored to their unique journey. With voice integration for natural interaction, secure note-taking capabilities, and authentication protecting user privacy, Therapy AI creates a confidential environment where users can explore their thoughts and feelings with a supportive, understanding companion available whenever they need it.",
        journey: "Built during a 36-hour hackathon. The main challenge was maintaining context over long conversations, which we solved using a vector database for long-term memory retrieval.",
        contribution: `Backend & AI Logic: Developed by Atharv Mahajan. I leveraged AI tools to deepen my understanding and learning of complex backend patterns and AI integrations.
        Frontend: Crafted by a talented collaborator/friend.
        `
    },
    {
        id: "03",
        title: "MIRRORS",
        description: "Mirrors is a web application that helps users search and retrieve media files such as PDFs, images, videos, and audio through natural language prompting.",
        tags: ["Qdrant", "Vector Embeddings", "Nodejs" , "Express" , "EJS" , "MULTER" , "JSON File(DB)" , "Gemini API"],
        category: "best",
        year: "2025",
        role: "Developer",
        githubUrl: "https://github.com/atharv-skyris/Mirrors-official.git",
        about: "Sometimes it becomes very difficult to find the right file among lots of videos and images. Searching for the right file can be time-consuming and frustrating. Mirrors solves this problem by allowing users to upload their media files to respective folders. When they need a file, they can simply search in natural language.",
        journey: "Whenever I work on any kind of project, I plan everything on a whiteboard, and once I'm done with the planning, I take a picture of it and save it in my gallery. The problem is that later, when I need to look up those images, it takes so much time to find them, which is frustrating and feels like a complete waste of time. That's when I decided to solve this problem myself, and that's how I got the idea for Mirrors. Since I was building this project just 4 or 5 days before my exams, I had to complete it as quickly as possible. I started by sketching the UI of the app on paper, then fed it to Stitch (Google's AI for UI design) to generate a polished design. From there, I grabbed the frontend code, made it responsive, and converted the Tailwind CSS to vanilla CSS using DeepSeek—that's how I completed the frontend. For the backend, I first broke down every component, like login, signup, image search, image upload, and creating folders for images. After breaking them down, I dove deep into understanding how each component should work and how I could code them in a way that made them compatible with every other component. Through this project, I learned about Qdrant vector embeddings and how to code in a much more structured manner compared to my previous projects. Despite the tight deadline, this experience not only solved a real problem I faced but also significantly improved my development approach and technical skills.",
        contribution: "Backend, Product design, and Planning: Atharv Mahajan Frontend developed by AI",
        youtubeVideoId:"ChHxEk9KhFc"
    },
    // STANDARD (Rank 5-9)
    {
        id: "04",
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
        id: "05",
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
        id: "06",
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
        id: "07",
        title: "BOOKSHELF",
        description: "Digital library management redefined. Tracks reading habits, generates insights, and creates a social ecosystem for knowledge sharing.",
        tags: ["Full Stack", "Analytics", "Social"],
        category: "standard",
        year: "2024",
        role: "Architect",
        githubUrl: "https://github.com",
        about: "Bookshelf goes beyond simple tracking. It analyzes reading speed, genre preferences, and suggests books based on complex user compatibility algorithms.",
        journey: JOURNEY_TEXT,
        contribution: CONTRIBUTION_TEXT
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