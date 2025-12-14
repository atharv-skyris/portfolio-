import React from 'react';

export const Hero: React.FC = () => {
    return (
        <>
            <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative pt-20">
                <div className="overflow-hidden mb-2 md:mb-4 animate-fade-in-up">
                    <p className="text-gray-500 text-[10px] md:text-sm tracking-[0.2em] uppercase">
                        Class 12 • Systems Thinker
                    </p>
                </div>
                
                <div className="overflow-hidden">
                    <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-bold uppercase leading-[0.9] mb-6 display-font break-words animate-slide-up">
                        Aspiring<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Technologist</span>.
                    </h1>
                </div>
                
                <div className="max-w-2xl mt-4 md:mt-6 text-gray-400 text-sm md:text-xl leading-relaxed border-l border-white/20 pl-4 md:pl-6 animate-fade-in">
                    <p className="mb-4">I'm Atharv. I take things apart to understand how they work, then build something better.</p>
                    <p className="text-xs md:text-sm text-gray-500">Interested in AI, systems thinking, and how we interact with information. Currently working on ideas that actually solve problems.</p>
                </div>

                <div className="absolute bottom-10 right-6 md:right-20 animate-bounce hidden md:block">
                    <p className="text-[10px] uppercase tracking-widest mb-2">Scroll Down</p>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                </div>
            </section>

            {/* Marquee */}
            <div className="py-4 md:py-6 border-y border-gray-800 bg-black overflow-hidden relative z-10">
                <div className="whitespace-nowrap inline-block animate-[marquee_20s_linear_infinite] text-2xl md:text-6xl font-bold text-gray-800 display-font opacity-50">
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