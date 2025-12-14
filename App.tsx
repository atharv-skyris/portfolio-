import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ThreeBackground } from './components/ThreeBackground';
import { ProjectDetail } from './components/ProjectDetail';
import { projects } from './data';

const App: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Refs for cursor elements to use direct DOM manipulation
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  // --- CURSOR LOGIC ---
  useEffect(() => {
    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;

    if (!dot || !outline) return;

    const onMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // Dot follows immediately
      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;

      // Outline follows with a trail animation (WAAPI)
      outline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // --- HOVER LOGIC ---
  useEffect(() => {
    const outline = cursorOutlineRef.current;
    if (!outline) return;

    const handleMouseEnter = () => {
        outline.style.transform = "translate(-50%, -50%) scale(1.5)";
        outline.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        outline.style.borderColor = "white";
    };

    const handleMouseLeave = () => {
        outline.style.transform = "translate(-50%, -50%) scale(1)";
        outline.style.backgroundColor = "transparent";
        outline.style.borderColor = "rgba(255, 255, 255, 0.5)";
    };

    // Re-attach listeners when DOM changes (view switch)
    const attachListeners = () => {
        const elements = document.querySelectorAll('a, button, .interactive');
        elements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });
        return elements;
    };

    // Initial attach
    let elements = attachListeners();

    // Observer to attach listeners to new elements (like when switching to detail view)
    const observer = new MutationObserver(() => {
        elements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
        });
        elements = attachListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
        observer.disconnect();
        elements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
        });
    };
  }, []);

  const activeProject = activeProjectId ? projects.find(p => p.id === activeProjectId) : null;

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#e0e0e0] overflow-x-hidden selection:bg-white selection:text-black">
      
      {/* Custom Cursor Elements */}
      <div ref={cursorDotRef} className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block mix-blend-difference"></div>
      <div ref={cursorOutlineRef} className="fixed w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color,transform] duration-200 hidden lg:block mix-blend-difference"></div>

      <ThreeBackground />
      
      <Navbar 
          onNavigateHome={() => setActiveProjectId(null)} 
          isDetailView={!!activeProjectId} 
      />
      
      <main className="relative z-10">
        {activeProject ? (
            <ProjectDetail 
                project={activeProject} 
                onBack={() => setActiveProjectId(null)} 
            />
        ) : (
            <>
                <Hero />
                <Projects onProjectClick={setActiveProjectId} />
                <Achievements />
                <About />
            </>
        )}
      </main>

      {!activeProjectId && <Footer />}
    </div>
  );
};

export default App;