import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-center relative overflow-hidden bg-[#050505]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            
            <h2 className="text-[20vw] sm:text-[18vw] md:text-[15vw] font-bold display-font leading-none text-gray-800 hover:text-white transition-colors duration-500 cursor-pointer interactive">
                SAY HELLO
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 text-xs sm:text-sm font-mono">
                <a href="mailto:atharv@example.com" className="hover:text-white hover:underline underline-offset-4 text-gray-500 interactive">EMAIL</a>
                <a href="#" className="hover:text-white hover:underline underline-offset-4 text-gray-500 interactive">GITHUB</a>
                <a href="#" className="hover:text-white hover:underline underline-offset-4 text-gray-500 interactive">LINKEDIN</a>
            </div>

            <p className="mt-8 sm:mt-10 md:mt-12 text-[9px] sm:text-[10px] text-gray-700">
                © 2024 ATHARV • DESIGNED WITH CHAOS & CODE
            </p>
        </footer>
    );
};