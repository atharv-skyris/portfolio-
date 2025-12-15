import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
    const roles = ['Builder', 'Learner'];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                setIsAnimating(false);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <>
            <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 relative pt-16 sm:pt-20">
                <div className="overflow-hidden mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
                    <p className="text-gray-500 text-[9px] xs:text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">
                        Class 12 • Systems Thinker
                    </p>
                </div>
                
                <div className="overflow-hidden mb-6 sm:mb-8 md:mb-10">
                    <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bold uppercase leading-[0.9] display-font animate-slide-up">
                        <div className="text-white">Aspiring</div>
                        <div className={`text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                            {roles[currentRoleIndex]}.
                        </div>
                    </h1>
                </div>
                
                <div className="max-w-2xl mt-4 sm:mt-6 md:mt-8 text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed border-l border-white/20 pl-3 sm:pl-4 md:pl-6 animate-fade-in">
                    <p className="mb-3 sm:mb-4">I'm Atharv. I take things apart to understand how they work, then build something better.</p>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500">Interested in AI, systems thinking, and how we interact with information. Currently working on ideas that actually solve problems.</p>
                </div>

                <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-4 sm:right-6 md:right-20 animate-bounce hidden sm:block">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest mb-2">Scroll Down</p>
                    <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                </div>
            </section>

            {/* Marquee */}
            <div className="py-3 sm:py-4 md:py-6 border-y border-gray-800 bg-black overflow-hidden relative z-10">
                <div className="whitespace-nowrap inline-block animate-[marquee_20s_linear_infinite] text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 display-font opacity-50">
                    THERAPY AI • MIRRORS • AIRDRIVE • HACKSAGON FINALIST • VIGYANSRAM • RUST • C++ • NODEJS • 
                    THERAPY AI • MIRRORS • AIRDRIVE • HACKSAGON FINALIST • VIGYANSRAM • RUST • C++ • NODEJS • 
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-slide-up {
                    animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0;
                    transform: translateY(50px);
                }
                .animate-fade-in {
                    animation: fadeIn 1s ease-out 0.4s forwards;
                    opacity: 0;
                }
                @keyframes slideUp {
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
            `}</style>
        </>
    );
};