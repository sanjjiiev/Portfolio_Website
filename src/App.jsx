import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Layers, ChevronRight, Command, ExternalLink, Cpu, Database, Wifi, Code, PenTool, Globe } from 'lucide-react';
// Importing Brand Icons
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaLinux, FaGitAlt, FaRaspberryPi, FaFigma, FaBlender, FaTrophy, FaAward } from 'react-icons/fa';
import { SiCplusplus, SiExpress, SiFlutter, SiPytorch, SiPandas, SiNumpy, SiScikitlearn, SiOpencv, SiTensorflow, SiMysql, SiMongodb, SiSqlite, SiFirebase, SiAndroidstudio, SiWireshark, SiCisco } from 'react-icons/si';

const Portfolio = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['> SYSTEM READY...', '> USER: SANJJIIEV DETECTED.']);
  const bottomRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';
      switch(cmd) {
        case 'help': response = 'COMMANDS: [about] [skills] [projects] [clear]'; break;
        case 'about': response = 'Sanjjiiev S | Web Developer | B.Tech CSE | CGPA: 7.57'; break;
        case 'skills': response = 'LOADING MODULES... Python, Java, React, Flutter, AI/ML...'; break;
        case 'projects': response = 'FETCHING REPOS... Smart-Shield, Knowva, Ayul...'; break;
        case 'clear': setOutput(['> SYSTEM CLEARED.']); setInput(''); return;
        default: response = `ERR: Command "${cmd}" not recognized.`;
      }
      setOutput([...output, `> ${input}`, response]);
      setInput('');
    }
  };

  // --- USER DATA ---
  const profile = {
    name: "Sanjjiiev S",
    role: "Web Developer",
    desc: "Motivated Computer Science Engineering student with practical experience in AI, networking, and web development. Eager to build reliable, efficient, user-focused solutions.",
    location: "Coimbatore, India",
    email: "sanjjiiev005@gmail.com",
    phone: "+91 9843065552",
    education: { degree: "B.Tech CSE (Core)", school: "Amrita Vishwa Vidyapeetham", year: "2023-2027", cgpa: "7.57" }
  };

  const skillCategories = {
    "Languages": [
      { name: "Python", icon: <FaPython /> }, { name: "Java", icon: <FaJava /> }, { name: "C/C++", icon: <SiCplusplus /> }
    ],
    "Web & Mobile": [
      { name: "ReactJS", icon: <FaReact /> }, { name: "NodeJS", icon: <FaNodeJs /> }, { name: "Express", icon: <SiExpress /> },
      { name: "Flutter", icon: <SiFlutter /> }, { name: "Dart", icon: "🎯" }, { name: "JS", icon: <FaJsSquare /> }
    ],
    "AI & Data": [
      { name: "Pytorch", icon: <SiPytorch /> }, { name: "TensorFlow", icon: <SiTensorflow /> }, { name: "OpenCV", icon: <SiOpencv /> },
      { name: "Pandas", icon: <SiPandas /> }
    ],
    "Database": [
      { name: "MySQL", icon: <SiMysql /> }, { name: "MongoDB", icon: <SiMongodb /> }, { name: "Firebase", icon: <SiFirebase /> }
    ],
    "Embedded/IoT": [
      { name: "Arduino", icon: "🔌" }, { name: "Raspberry Pi", icon: <FaRaspberryPi /> }, { name: "Sensors", icon: "📟" }
    ],
    "Tools": [
      { name: "Linux", icon: <FaLinux /> }, { name: "Git", icon: <FaGitAlt /> }, { name: "Figma", icon: <FaFigma /> }
    ]
  };

  const projects = [
    { name: "Smart-Sheild", link: "https://github.com/sanjjiiev/Smart-Sheild", desc: "AI SOS system for autonomous vehicles.", type: "AI/IoT" },
    { name: "Knowva", link: "https://github.com/sanjjiiev/Knowva", desc: "Personalized Learning Management System.", type: "Web" },
    { name: "AmritaFinde", link: "#", desc: "Lost & Found app with Gemini AI Chatbot.", type: "Mobile" },
    { name: "GoQuest", link: "https://github.com/SanjaiPG/GoQuest", desc: "Next-gen travel planning with on-device AI.", type: "Android" },
    { name: "Ayul", link: "https://github.com/sanjjiiev/Ayul", desc: "Traditional medical system app (Siddha/Ayurveda).", type: "Flutter" },
    { name: "Dynamic Route", link: "https://github.com/sanjjiiev/Dynamic-Route-Optimization-System", desc: "Real-time pathfinding visualization.", type: "Algo" },
  ];

  const awards = [
    { title: "Uyir Hackathon Finalist", year: "2024", desc: "AI SOS System for Autonomous Vehicles" },
    { title: "3rd Place - Bootstrap '25", year: "2025", desc: "Defang.io Hackathon (Knowva)" },
    { title: "Bharatiya Antariksh '25", year: "2025", desc: "Idea Submission for Space Tech" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-mono relative overflow-x-hidden selection:bg-emerald-500/30 pb-12">
      
      {/* BACKGROUND EFFECTS */}
      <div className="retro-grid"></div>
      <div className="scanlines"></div>

      {/* TOP BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur border-b border-gray-800 px-4 py-2 flex justify-between items-center text-[10px] md:text-xs text-emerald-500 tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          SANJJIIEV_PORTFOLIO_V2.0
        </div>
        <div className="hidden md:block">{time}</div>
        <div>MEM: OK</div>
      </div>

      <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto mt-12">

        {/* --- ROW 1: PROFILE & TERMINAL --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Identity Card */}
          <div className="lg:col-span-8 border border-gray-800 bg-[#0a0a0a]/90 p-6 md:p-8 relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu size={120} className="text-emerald-500" />
             </div>
             
             <h1 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter glow-text">
               {profile.name}<span className="text-emerald-500 animate-pulse">_</span>
             </h1>
             <p className="text-lg text-emerald-500 mb-4 font-bold flex items-center gap-2">
               <ChevronRight size={20} /> {profile.role}
             </p>
             <p className="max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed mb-6 border-l-2 border-gray-700 pl-4">
               {profile.desc}
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-6">
                <div className="bg-gray-900/50 p-3 border border-gray-800">
                   <span className="text-gray-500 block mb-1">EDUCATION</span>
                   <span className="text-white font-bold">{profile.education.degree}</span>
                   <div className="flex justify-between mt-1 text-gray-400">
                      <span>{profile.education.school}</span>
                      <span className="text-emerald-500">{profile.education.cgpa}</span>
                   </div>
                </div>
                <div className="bg-gray-900/50 p-3 border border-gray-800 flex flex-col justify-center gap-2">
                   <div className="flex items-center gap-2">
                      <FaEnvelope className="text-emerald-600"/> {profile.email}
                   </div>
                   <div className="flex items-center gap-2">
                      <Globe className="text-emerald-600"/> {profile.location}
                   </div>
                </div>
             </div>

             <div className="flex gap-3">
               <a href="https://github.com/sanjjiiev" target="_blank" className="flex items-center gap-2 bg-emerald-900/20 border border-emerald-500/50 text-emerald-400 px-4 py-2 text-sm hover:bg-emerald-500 hover:text-black transition-all font-bold">
                 <FaGithub /> GITHUB
               </a>
               <a href="https://www.linkedin.com/in/sanjjiiev-s-a20757287/" target="_blank" className="flex items-center gap-2 bg-gray-800 border border-gray-700 text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-all font-bold">
                 <FaLinkedin /> LINKEDIN
               </a>
             </div>
          </div>

          {/* Terminal */}
          <div className="lg:col-span-4 border border-emerald-500/30 bg-black p-4 flex flex-col h-[300px] lg:h-auto font-mono text-xs shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <div className="flex justify-between text-gray-600 mb-2 border-b border-gray-800 pb-1">
              <span>BASH // ROOT</span>
              <span>v1.0.4</span>
            </div>
            <div className="flex-grow overflow-y-auto mb-2 space-y-1 scrollbar-thin font-bold">
              {output.map((line, i) => (
                <div key={i} className={`${line.startsWith('>') ? 'text-emerald-500' : 'text-gray-400'}`}>
                  {line}
                </div>
              ))}
              <div ref={bottomRef}></div>
            </div>
            <div className="flex items-center gap-2 text-emerald-500">
              <span className="animate-pulse">█</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent outline-none flex-grow text-white placeholder-gray-800"
                placeholder="Type 'help'..."
              />
            </div>
          </div>
        </div>

        {/* --- ROW 2: SKILLS CHIPSET (The "Visible" UI Update) --- */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Cpu className="text-emerald-500" /> SYSTEM_MODULES (SKILLS)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skillCategories).map(([category, items]) => (
              <div key={category} className="border border-gray-800 bg-[#0a0a0a] p-4 hover:border-emerald-500/30 transition-colors">
                 <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                    <span className="w-1 h-1 bg-emerald-500"></span> {category}
                 </h3>
                 <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => (
                       <div key={idx} className="flex items-center gap-2 bg-[#111] border border-gray-700 px-3 py-1.5 text-xs text-gray-300 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 transition-all cursor-default group">
                          <span className="text-emerald-500 group-hover:text-black text-sm">{skill.icon}</span>
                          <span className="font-bold">{skill.name}</span>
                       </div>
                    ))}
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- ROW 3: PROJECTS --- */}
        <div className="mb-10">
           <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-2">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="text-emerald-500" /> REPOSITORY_INDEX
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((proj, idx) => (
                 <a key={idx} href={proj.link} target="_blank" rel="noreferrer" className="block group">
                    <div className="h-full border border-gray-800 bg-[#0a0a0a] p-5 hover:bg-[#111] hover:border-emerald-500/50 transition-all relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-all group-hover:from-emerald-500/20"></div>
                       
                       <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-2">
                             <Terminal size={16} className="text-emerald-600" />
                             <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors">{proj.name}</h3>
                          </div>
                          <ExternalLink size={14} className="text-gray-600 group-hover:text-emerald-500" />
                       </div>
                       
                       <p className="text-xs text-gray-400 leading-relaxed mb-4 h-10 line-clamp-2">
                          {proj.desc}
                       </p>
                       
                       <span className="text-[10px] uppercase tracking-wider font-bold text-gray-600 border border-gray-800 px-2 py-1 rounded group-hover:border-emerald-500/30 group-hover:text-emerald-500 transition-colors">
                          {proj.type}
                       </span>
                    </div>
                 </a>
              ))}
           </div>
        </div>

        {/* --- ROW 4: AWARDS --- */}
        <div className="border border-emerald-900/30 bg-emerald-900/5 p-6 md:p-8">
           <h2 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <FaTrophy /> ACHIEVEMENT_LOG
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                       <FaAward className="text-emerald-600 text-xl" />
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-sm">{award.title}</h4>
                       <p className="text-xs text-emerald-500/80 mb-1">{award.year}</p>
                       <p className="text-xs text-gray-400">{award.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* FOOTER */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
           <p>© 2026 SANJJIIEV S // SYSTEM OPTIMIZED</p>
           <p>BUILT_WITH_REACT_&_TAILWIND</p>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;