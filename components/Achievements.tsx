import React from 'react';
import { achievements } from '../data';

export const Achievements: React.FC = () => {
    return (
        <section id="achievements" className="py-20 md:py-32 bg-[#e0e0e0] text-[#050505] px-6 md:px-20 relative transition-colors duration-500">
            <div className="mb-16 md:mb-20">
                <h2 className="text-4xl md:text-8xl font-bold display-font tracking-tighter mb-4">NATIONAL<br/>LEVEL</h2>
                <p className="text-gray-600 max-w-md text-sm md:text-base">Competing at the highest level in India's premier institutes.</p>
            </div>

            {achievements.map((achievement, index) => (
                <div key={index} className="interactive border-t-2 border-black py-8 md:py-10 group hover:bg-gray-200 transition-colors cursor-pointer">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="mb-4 md:mb-0 w-full md:w-1/3">
                            <span className="inline-block bg-black text-white text-[10px] px-2 py-1 mb-2 font-mono">{achievement.type}</span>
                            <h3 className="text-3xl md:text-4xl font-bold display-font">{achievement.title}</h3>
                            <p className="text-xs font-mono text-gray-600 mt-1">AT {achievement.organization}</p>
                        </div>
                        <div className="max-w-md text-sm text-gray-800 mt-4 md:mt-0 w-full md:w-1/3">
                            <p>{achievement.description}</p>
                        </div>
                        <div className="hidden md:block text-4xl font-bold group-hover:rotate-45 transition-transform duration-300">↗</div>
                    </div>
                </div>
            ))}
        </section>
    );
};