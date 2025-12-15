import React from 'react';
import { projects } from '../data';

interface ProjectsProps {
    onProjectClick: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
    // Separation of concerns based on rank logic
    const topProjects = projects.filter(p => p.category === 'top');
    const bestProjects = projects.filter(p => p.category === 'best');
    const standardProjects = projects.filter(p => p.category === 'standard');

    return (
        <section id="work" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                <p className="text-[10px] sm:text-xs tracking-[0.2em] text-gray-500 mb-3 sm:mb-4">THE VAULT</p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold display-font mb-4 sm:mb-6">CODED PERSONALITY.</h2>
                <p className="text-gray-400 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
                    "Hold your breath. These projects are the ones I'm most proud of. I didn't just code the backend; I shaped my dreams and aspirations into them."
                </p>
            </div>

            {/* RANK 1 & 2: TOP PROJECTS (Brainstorm, Bookshelf) */}
            <div className="mb-12 sm:mb-16 md:mb-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white border-b border-white/20 pb-2 inline-block">01. CURRENT FOCUS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {topProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            onClick={() => onProjectClick(project.id)}
                            className="interactive p-6 sm:p-8 md:p-10 lg:p-12 relative group cursor-pointer rounded-sm overflow-hidden bg-gradient-to-br from-white/10 to-transparent border border-white/20 hover:border-white transition-all duration-500"
                        >
                            <div className="flex justify-between items-start mb-4 sm:mb-6 flex-wrap gap-2">
                                <div className="text-gray-400 font-mono text-[10px] sm:text-xs">0{index + 1} / {project.role?.toUpperCase()}</div>
                                <div className="bg-white text-black text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 uppercase tracking-wider">Top Pick</div>
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 group-hover:text-white transition-colors display-font">{project.title}</h3>
                            <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[9px] sm:text-[10px] border border-gray-600 px-2 sm:px-3 py-1 text-gray-400 rounded-full">{tag}</span>
                                ))}
                            </div>
                            {/* Decorative blur */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RANK 3 & 4: BEST PROJECTS (Therapy AI, Mirrors) */}
            <div className="mb-12 sm:mb-16 md:mb-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white border-b border-white/20 pb-2 inline-block">02. FLAGSHIP</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {bestProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            onClick={() => onProjectClick(project.id)}
                            className="interactive p-6 sm:p-8 md:p-10 lg:p-12 relative group cursor-pointer rounded-sm overflow-hidden bg-white/5 border border-white/10 hover:border-white/50 transition-all duration-300"
                        >
                             <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                <div className="text-gray-500 font-mono text-[9px] sm:text-[10px] md:text-xs">{project.year} / {project.role?.toUpperCase()}</div>
                                <div className="bg-transparent border border-gray-700 text-gray-300 text-[9px] sm:text-[10px] font-bold px-2 py-1 uppercase">Best of Class</div>
                            </div>
                            
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 group-hover:text-white transition-colors display-font">{project.title}</h3>
                            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 md:mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[9px] sm:text-[10px] border border-gray-800 px-2 py-1 text-gray-500">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RANK 5+: STANDARD PROJECTS */}
            <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white border-b border-white/20 pb-2 inline-block">03. ARCHIVE</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {standardProjects.map((project) => (
                        <div 
                            key={project.id} 
                            onClick={() => onProjectClick(project.id)}
                            className="interactive project-card p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[250px] relative group bg-white/5 border border-white/5 hover:border-white/30 transition-all duration-300 cursor-pointer"
                        >
                            <div>
                                <div className="text-gray-600 font-mono text-[9px] sm:text-[10px] mb-3 sm:mb-4">PROJECT / {project.id}</div>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gray-300 transition-colors display-font">{project.title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed mb-4 sm:mb-6">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[9px] sm:text-[10px] border border-gray-800 px-2 py-1 text-gray-600 mr-2 mb-2 inline-block">{tag}</span>
                                ))}
                            </div>
                            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-2xl sm:text-3xl md:text-4xl text-gray-800 font-bold opacity-20 group-hover:opacity-100 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 pointer-events-none">
                                {project.id}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};