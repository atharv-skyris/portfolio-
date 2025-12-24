import React, { useEffect, useState, useRef } from "react";
import { Project } from "../types";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBack,
}) => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const aboutModalRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const MAX_JOURNEY_LENGTH = 200;
  const MAX_ABOUT_LENGTH = 350; // Slightly longer than journey

  const journeyText = project.journey || "Data not available for this project.";
  const aboutText = project.about || project.description;

  const isLongJourney = journeyText.length > MAX_JOURNEY_LENGTH;
  const isLongAbout = aboutText.length > MAX_ABOUT_LENGTH;

  useEffect(() => {
    if (isJourneyModalOpen) {
      journeyRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
        modalRef.current.focus();
      }
    }
  }, [isJourneyModalOpen]);

  useEffect(() => {
    if (isAboutModalOpen) {
      aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      if (aboutModalRef.current) {
        aboutModalRef.current.scrollTop = 0;
        aboutModalRef.current.focus();
      }
    }
  }, [isAboutModalOpen]);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20 animate-fade-in relative z-20">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-white transition-colors mb-8 sm:mb-12 interactive"
      >
        <span className="group-hover:-translate-x-1 transition-transform">
          ←
        </span>{" "}
        BACK TO PROJECTS
      </button>

      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[9px] sm:text-[10px] uppercase tracking-widest border border-gray-800 px-2 py-1 text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold display-font uppercase mb-4 sm:mb-6 leading-[0.9]">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Video Section (Placeholder) */}
      <div className="w-full aspect-video bg-[#111] border border-gray-800 mb-8 sm:mb-12 flex flex-col items-center justify-center group relative overflow-hidden">
        {project.youtubeVideoId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="text-center z-10">
              <div className="text-3xl sm:text-4xl mb-4 opacity-50">▶</div>
              <p className="text-gray-500 font-mono text-xs sm:text-sm tracking-widest">
                VIDEO PREVIEW COMING SOON
              </p>
            </div>
          </>
        )}
      </div>

      {/* Github Link */}
      <div className="mb-12 sm:mb-16 md:mb-20">
        <a
          href={project.githubUrl || "#"}
          target="_blank"
          rel="noreferrer"
          className="interactive inline-flex items-center gap-2 sm:gap-3 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-bold text-xs sm:text-sm hover:bg-gray-200 transition-colors uppercase tracking-wider"
        >
          <svg
            width="18"
            height="18"
            className="sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span className="hidden sm:inline">Github Repository</span>
          <span className="sm:hidden">GITHUB</span>
        </a>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
        <div className="lg:col-span-2 space-y-10 sm:space-y-12 md:space-y-16">
          <section ref={aboutRef}>
            <h3 className="text-xl sm:text-2xl font-bold display-font mb-4 sm:mb-6 text-white border-l-4 border-white pl-3 sm:pl-4">
              ABOUT THE PROJECT
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
              {isLongAbout ? (
                <>
                  {aboutText.slice(0, MAX_ABOUT_LENGTH)}...
                  <button
                    onClick={() => setIsAboutModalOpen(true)}
                    className="ml-2 text-white underline hover:text-gray-300 text-sm font-bold"
                  >
                    SEE MORE
                  </button>
                </>
              ) : (
                aboutText
              )}
            </p>
          </section>

          <section ref={journeyRef}>
            <h3 className="text-xl sm:text-2xl font-bold display-font mb-4 sm:mb-6 text-white border-l-4 border-gray-700 pl-3 sm:pl-4">
              THE JOURNEY
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
              {isLongJourney ? (
                <>
                  {journeyText.slice(0, MAX_JOURNEY_LENGTH)}...
                  <button
                    onClick={() => setIsJourneyModalOpen(true)}
                    className="ml-2 text-white underline hover:text-gray-300 text-sm font-bold"
                  >
                    SEE MORE
                  </button>
                </>
              ) : (
                journeyText
              )}
            </p>
          </section>

          <section>
            <h3 className="text-xl sm:text-2xl font-bold display-font mb-4 sm:mb-6 text-white border-l-4 border-gray-700 pl-3 sm:pl-4">
              CONTRIBUTIONS
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
              {project.contribution || "Data not available for this project."}
            </p>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1">
          <div className="bg-white/5 p-6 sm:p-8 border border-white/10 sticky top-20 sm:top-24 md:top-32">
            <h4 className="font-bold text-white mb-4 sm:mb-6 tracking-widest text-[10px] sm:text-xs uppercase">
              Project Details
            </h4>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-gray-500 text-[10px] sm:text-xs mb-1">
                  YEAR
                </p>
                <p className="text-white font-mono text-sm sm:text-base">
                  {project.year || "2025"}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] sm:text-xs mb-1">
                  ROLE
                </p>
                <p className="text-white font-mono text-sm sm:text-base">
                  {project.role || "Developer"}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] sm:text-xs mb-1">
                  CATEGORY
                </p>
                <p className="text-white font-mono text-sm sm:text-base uppercase">
                  {project.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Modal */}
      {isJourneyModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsJourneyModalOpen(false)}
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            className="bg-[#111] border border-gray-800 p-6 sm:p-8 md:p-10 max-w-4xl w-full max-h-[80vh] overflow-y-auto relative animate-fade-in outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsJourneyModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold display-font mb-6 text-white border-l-4 border-gray-700 pl-4">
              THE JOURNEY
            </h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg whitespace-pre-wrap">
              {journeyText}
            </p>
          </div>
        </div>
      )}

      {/* About Modal */}
      {isAboutModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsAboutModalOpen(false)}
        >
          <div
            ref={aboutModalRef}
            tabIndex={-1}
            className="bg-[#111] border border-gray-800 p-6 sm:p-8 md:p-10 max-w-4xl w-full max-h-[80vh] overflow-y-auto relative animate-fade-in outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsAboutModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold display-font mb-6 text-white border-l-4 border-white pl-4">
              ABOUT THE PROJECT
            </h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg whitespace-pre-wrap">
              {aboutText}
            </p>
          </div>
        </div>
      )}

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
