import React, { useState, useEffect } from 'react';
import { Project } from '../types';

interface AdminProps {
    projects: Project[];
    onSave: (updatedProjects: Project[]) => void;
    onClose: () => void;
}

export const Admin: React.FC<AdminProps> = ({ projects, onSave, onClose }) => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [localProjects, setLocalProjects] = useState<Project[]>(projects);
    const [error, setError] = useState('');

    const ADMIN_PASSWORD = '!$hu@mahajan';

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password');
        }
    };

    const handleAddProject = () => {
        const newProject: Project = {
            id: Date.now().toString(),
            title: 'New Project',
            description: '',
            tags: [],
            category: 'standard',
        };
        setEditingProject(newProject);
    };

    const handleEditProject = (project: Project) => {
        setEditingProject({ ...project });
    };

    const handleDeleteProject = (id: string) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            const updated = localProjects.filter(p => p.id !== id);
            setLocalProjects(updated);
            onSave(updated);
        }
    };

    const handleSaveEdit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingProject) return;

        let updated: Project[];
        if (localProjects.find(p => p.id === editingProject.id)) {
            updated = localProjects.map(p => p.id === editingProject.id ? editingProject : p);
        } else {
            updated = [...localProjects, editingProject];
        }

        setLocalProjects(updated);
        onSave(updated);
        setEditingProject(null);
    };

    const handleExport = () => {
        const dataStr = "export const projects: Project[] = " + JSON.stringify(localProjects, null, 2) + ";";
        navigator.clipboard.writeText(dataStr);
        alert('Project data copied to clipboard as code! You can paste this into data.ts');
    };

    if (!isAuthenticated) {
        return (
            <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-[#111] border border-white/10 p-8 rounded-lg shadow-2xl animate-fade-in">
                    <h2 className="text-2xl font-bold display-font mb-6 text-white tracking-widest uppercase">Admin Access</h2>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors font-mono"
                                placeholder="••••••••"
                                autoFocus
                            />
                        </div>
                        {error && <p className="text-red-500 text-xs font-mono">{error}</p>}
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="flex-1 bg-white text-black py-3 font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors"
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 border border-white/10 text-white py-3 font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[100] bg-black overflow-y-auto p-4 sm:p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold display-font text-white uppercase tracking-tighter">Admin Panel</h1>
                        <p className="text-gray-500 text-xs tracking-widest mt-2 uppercase">Manage Portfolio Projects</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handleExport}
                            className="bg-white/5 border border-white/10 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                        >
                            Export Code
                        </button>
                        <button
                            onClick={onClose}
                            className="bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
                        >
                            Exit Admin
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Project List */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Projects ({localProjects.length})</h3>
                            <button
                                onClick={handleAddProject}
                                className="text-white text-xs underline hover:text-gray-400 font-bold"
                            >
                                + ADD NEW
                            </button>
                        </div>
                        <div className="space-y-2">
                            {localProjects.map((p) => (
                                <div
                                    key={p.id}
                                    className={`p-4 border transition-all cursor-pointer group ${editingProject?.id === p.id ? 'bg-white/10 border-white' : 'bg-white/5 border-white/10 hover:border-white/30'
                                        }`}
                                    onClick={() => handleEditProject(p)}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-mono mb-1">{p.id}</p>
                                            <h4 className="text-white font-bold text-sm uppercase">{p.title}</h4>
                                            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{p.category}</p>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteProject(p.id);
                                            }}
                                            className="text-gray-600 hover:text-red-500 transition-colors text-xs"
                                        >
                                            DELETE
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Edit Form */}
                    <div className="lg:col-span-2">
                        {editingProject ? (
                            <div className="bg-[#111] border border-white/10 p-8 animate-fade-in">
                                <h3 className="text-xl font-bold display-font text-white mb-8 uppercase border-l-4 border-white pl-4">
                                    {localProjects.find(p => p.id === editingProject.id) ? 'Edit Project' : 'New Project'}
                                </h3>
                                <form onSubmit={handleSaveEdit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Title</label>
                                            <input
                                                type="text"
                                                value={editingProject.title}
                                                onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                                                className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Category</label>
                                            <select
                                                value={editingProject.category}
                                                onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value as any })}
                                                className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors"
                                            >
                                                <option value="top">TOP</option>
                                                <option value="best">BEST</option>
                                                <option value="standard">STANDARD</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Short Description</label>
                                        <textarea
                                            value={editingProject.description}
                                            onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors h-20 resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Year</label>
                                            <input
                                                type="text"
                                                value={editingProject.year || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, year: e.target.value })}
                                                className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors font-mono"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Role</label>
                                            <input
                                                type="text"
                                                value={editingProject.role || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, role: e.target.value })}
                                                className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">YouTube ID</label>
                                            <input
                                                type="text"
                                                value={editingProject.youtubeVideoId || ''}
                                                onChange={(e) => setEditingProject({ ...editingProject, youtubeVideoId: e.target.value })}
                                                className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors font-mono"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Tags (comma separated)</label>
                                        <input
                                            type="text"
                                            value={editingProject.tags.join(', ')}
                                            onChange={(e) => setEditingProject({ ...editingProject, tags: e.target.value.split(',').map(t => t.trim()) })}
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Github URL</label>
                                        <input
                                            type="text"
                                            value={editingProject.githubUrl || ''}
                                            onChange={(e) => setEditingProject({ ...editingProject, githubUrl: e.target.value })}
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors font-mono"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">About Project</label>
                                        <textarea
                                            value={editingProject.about || ''}
                                            onChange={(e) => setEditingProject({ ...editingProject, about: e.target.value })}
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors h-32 resize-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">The Journey</label>
                                        <textarea
                                            value={editingProject.journey || ''}
                                            onChange={(e) => setEditingProject({ ...editingProject, journey: e.target.value })}
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors h-32 resize-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Contributions</label>
                                        <textarea
                                            value={editingProject.contribution || ''}
                                            onChange={(e) => setEditingProject({ ...editingProject, contribution: e.target.value })}
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-white outline-none transition-colors h-20 resize-none"
                                        />
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-white text-black py-4 font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors"
                                        >
                                            Save Project
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setEditingProject(null)}
                                            className="flex-1 border border-white/10 text-white py-4 font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="h-full min-h-[400px] border border-dashed border-white/10 flex flex-col items-center justify-center text-gray-600">
                                <p className="text-xs uppercase tracking-[0.2em]">Select a project to edit or create a new one</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};
