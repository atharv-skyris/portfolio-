import React from 'react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 px-6 md:px-20 border-b border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <div>
                    <p className="text-xs tracking-[0.2em] text-gray-500 mb-6">TECH STACK</p>
                    <h3 className="text-3xl font-bold mb-8 display-font">TOOLKIT.</h3>
                    
                    <div className="space-y-6">
                        <div className="group interactive">
                            <p className="text-white font-bold mb-2 text-sm group-hover:text-blue-400 transition-colors">CORE</p>
                            <p className="text-gray-400 font-mono text-xs md:text-sm">HTML, CSS, JavaScript, Node.js, Express</p>
                        </div>
                        <div className="group interactive">
                            <p className="text-white font-bold mb-2 text-sm group-hover:text-purple-400 transition-colors">DATABASE & AI</p>
                            <p className="text-gray-400 font-mono text-xs md:text-sm">MongoDB, Redis, Qdrant (Vector DB), Simple JSON DB</p>
                        </div>
                        <div className="group interactive">
                            <p className="text-white font-bold mb-2 text-sm group-hover:text-green-400 transition-colors">EXPLORING</p>
                            <p className="text-gray-400 font-mono text-xs md:text-sm">Python, Rust, C, C++, Figma</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-xs tracking-[0.2em] text-gray-500 mb-6">PERSONAL</p>
                    <h3 className="text-3xl font-bold mb-8 display-font">OFFLINE.</h3>
                    <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                        "I don't just code. I analyze systems."
                    </p>
                    <p className="text-sm text-gray-400 mb-6">
                        When I'm not debugging, I'm playing <strong>Chess</strong> (strategic thinking), <strong>Skating</strong> (balance & risk), or just coding for the pure joy of creation.
                    </p>
                    <div className="interactive p-4 border border-gray-800 rounded bg-gray-900/50 hover:bg-gray-900 transition-colors">
                        <p className="text-[10px] text-gray-500 mb-2">STATUS</p>
                        <p className="text-white text-sm">Grade 12 Student • Building "Brainstorm"</p>
                    </div>
                </div>
            </div>
        </section>
    );
};