export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    category: 'top' | 'best' | 'standard';
    link?: string;
    year?: string;
    role?: string;
    
    // Detail Page Fields
    githubUrl?: string;
    youtubeVideoId?: string;
    about?: string;
    journey?: string;
    contribution?: string;
}

export interface Achievement {
    title: string;
    organization: string;
    description: string;
    type: string;
    year: string;
}