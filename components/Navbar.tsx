import React, { useState } from 'react';

interface NavbarProps {
    onNavigateHome: () => void;
    isDetailView?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, isDetailView }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (id: string) => {
        setIsOpen(false);
        onNavigateHome(); // Ensure we go back to home view first
        
        // Use timeout to allow state update to render home view before scrolling
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <>
            <nav className="fixed top-0 w-full p-4 sm:p-5 md:p-6 z-50 flex justify-between items-center text-white mix-blend-difference">
                <div className="text-lg sm:text-xl font-bold tracking-tighter display-font relative z-50 interactive cursor-pointer" onClick={() => handleNavClick('home')}>
                    ATHARV_
                </div>
                
                {/* Desktop Menu */}
                <div className={`hidden md:flex gap-6 lg:gap-8 text-[10px] sm:text-xs tracking-widest ${isDetailView ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-300`}>
                    {['home', 'work', 'achievements', 'about'].map((item) => (
                        <button 
                            key={item}
                            onClick={() => handleNavClick(item)}
                            className="nav-link relative uppercase hover:text-gray-300 transition-colors interactive"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden text-lg sm:text-xl z-50 relative focus:outline-none interactive"
                    aria-label="Toggle menu"
                >
                    {isOpen ? 'X' : '///'}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/95 z-40 transform transition-transform duration-500 ease-in-out flex flex-col justify-center items-center gap-6 sm:gap-8 text-xl sm:text-2xl font-bold display-font md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {['home', 'work', 'achievements', 'about'].map((item) => (
                    <button 
                        key={item}
                        onClick={() => handleNavClick(item)}
                        className="uppercase hover:text-gray-500 transition-colors interactive"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </>
    );
};