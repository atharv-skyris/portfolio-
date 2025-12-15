import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
    const roles = ['LEARNER', 'BUILDER'];
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
            <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 relative pt-16 sm:pt-20">
                <div className="w-full mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center">
                    {/* Main Heading */}
                    <div className="w-full max-w-[90vw] mx-auto mb-4 sm:mb-6 flex flex-col items-center">
                        <h1 className="text-[7vw] font-bold uppercase leading-[0.9] display-font tracking-[-0.03em] whitespace-nowrap text-white">
                            ASPIRING{' '}
                            <span className={`inline-block transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                                {roles[currentRoleIndex]}.
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle - Below heading */}
                    <div className="overflow-hidden mb-8 sm:mb-12 md:mb-16 animate-fade-in flex justify-center" style={{ animationDelay: '0.2s' }}>
                        <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm md:text-base tracking-[0.4em] uppercase">
                            Class 12 • Systems Thinker
                        </p>
                    </div>

                    {/* Description with left border - Aligned with heading width */}
                    <div className="w-full max-w-[75vw] mx-auto text-left text-gray-300 leading-relaxed border-l border-white/20 pl-4 sm:pl-5 md:pl-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <p className="mb-4 sm:mb-5 text-[1.5vw] sm:text-[1.2vw] md:text-[1.1vw] lg:text-[1vw] xl:text-[0.9vw] italic leading-relaxed" style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(14px, 1.1vw, 24px)' }}>
                            I'm Atharv. I take things apart to understand how they work, then build something better.
                        </p>
                        <p className="text-[1.2vw] sm:text-[1vw] md:text-[0.9vw] lg:text-[0.8vw] text-gray-500" style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(12px, 0.9vw, 20px)' }}>
                            Interested in AI, systems thinking, and how we interact with information. Currently working on ideas that actually solve problems.
                        </p>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
                    <div className="flex flex-col items-center">
                        <p className="text-[9px] sm:text-[10px] uppercase tracking-widest mb-2 text-gray-600">Scroll Down</p>
                        <svg width="18" height="18" className="sm:w-5 sm:h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
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