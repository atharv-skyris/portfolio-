import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
    project: Project;
    onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
    
    // Scroll to top when mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 px-6 md:px-20 pb-20 animate-fade-in relative z-20">
            {/* Back Button */}
            <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12 interactive"
            >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO PROJECTS
            </button>

            {/* Header */}
            <div className="mb-12">
                <div className="flex flex-wrap gap-4 mb-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest border border-gray-800 px-2 py-1 text-gray-500">
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-5xl md:text-8xl font-bold display-font uppercase mb-6 leading-[0.9]">
                    {project.title}
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl">{project.description}</p>
            </div>

            {/* Video Section (Placeholder) */}
            <div className="w-full aspect-video bg-[#111] border border-gray-800 mb-12 flex flex-col items-center justify-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {project.youtubeVideoId ? (
                    <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${project.youtubeVideoId}`} 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div className="text-center z-10">
                        <div className="text-4xl mb-4 opacity-50">▶</div>
                        <p className="text-gray-500 font-mono text-sm tracking-widest">VIDEO PREVIEW COMING SOON</p>
                    </div>
                )}
            </div>

            {/* Github Link */}
            <div className="mb-20">
                <a 
                    href={project.githubUrl || "#"} 
                    target="_blank" 
                    rel="noreferrer"
                    className="interactive inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold text-sm hover:bg-gray-200 transition-colors uppercase tracking-wider"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Github Repository
                </a>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-16">
                    <section>
                        <h3 className="text-2xl font-bold display-font mb-6 text-white border-l-4 border-white pl-4">ABOUT THE PROJECT</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            {project.about || project.description}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold display-font mb-6 text-white border-l-4 border-gray-700 pl-4">THE JOURNEY</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            {project.journey || "Data not available for this project."}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold display-font mb-6 text-white border-l-4 border-gray-700 pl-4">CONTRIBUTIONS</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            {project.contribution || "Data not available for this project."}
                        </p>
                    </section>
                </div>

                {/* Sidebar Info */}
                <div className="lg:col-span-1">
                    <div className="bg-white/5 p-8 border border-white/10 sticky top-32">
                        <h4 className="font-bold text-white mb-6 tracking-widest text-xs uppercase">Project Details</h4>
                        
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-500 text-xs mb-1">YEAR</p>
                                <p className="text-white font-mono">{project.year || "2023"}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs mb-1">ROLE</p>
                                <p className="text-white font-mono">{project.role || "Developer"}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs mb-1">CATEGORY</p>
                                <p className="text-white font-mono uppercase">{project.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>{`
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};