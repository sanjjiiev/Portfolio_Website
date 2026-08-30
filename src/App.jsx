import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Terminal, Layers, ChevronRight, Cpu, Globe, ExternalLink, Briefcase, Zap, Star, Home, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaJava, FaReact, FaNodeJs, FaLinux, FaGitAlt, FaRaspberryPi, FaFigma, FaAward, FaTrophy, FaHtml5, FaCss3Alt, FaJs, FaServer, FaShieldAlt } from 'react-icons/fa';
import { SiExpress, SiFlutter, SiPytorch, SiPandas, SiOpencv, SiTensorflow, SiMysql, SiMongodb, SiFirebase, SiCplusplus, SiDart, SiNumpy, SiScikitlearn, SiHuggingface, SiSqlite, SiAndroidstudio, SiArduino, SiWireshark, SiCisco, SiMetasploit, SiBlender, SiDocker, SiNginx, SiRedis } from 'react-icons/si';
import Blog from './Blog';
import { blogPosts } from './blogPosts';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    '> SYSTEM INITIALIZED...',
    '> TYPE "HELP" FOR COMMANDS.'
  ]);

  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';

      switch (cmd) {
        case 'help': response = 'COMMANDS: [about] [experience] [skills] [projects] [clear]'; break;
        case 'about': response = 'Sanjjiiev S | Software Engineer | B.Tech CSE | CGPA: 7.6'; break;
        case 'experience': response = 'Cybervault | Cyber Security Intern | Apr 2026 - Present'; break;
        case 'skills': response = 'LOADING... C++, Python, React, Docker, Pytorch, Splunk...'; break;
        case 'projects': response = 'FETCHING... BlockDrive, VideoDash 2.0, mofscreen...'; break;
        case 'clear': setOutput(['> SYSTEM CLEARED.']); setInput(''); return;
        default: response = `ERR: Command "${cmd}" not recognized. Type "help".`;
      }

      setOutput(prev => [...prev.slice(-50), `> ${input}`, response]);
      setInput('');
    }
  };

  // --- DATA ---
  const profile = {
    name: "Sanjjiiev S",
    role: "Software Engineer & Security Analyst",
    desc: "Versatile B.Tech CSE student (2027 passout) with a CGPA of 7.6. Experienced in building scalable distributed systems, complex security frameworks, and AI-driven data platforms.",
    location: "Coimbatore, India",
    email: "sanjjiiev005@gmail.com",
    education: { degree: "B.Tech CSE (Core)", school: "Amrita Vishwa Vidyapeetham", year: "2023-2027" }
  };

  const experience = [
    {
      role: "Cyber Security Intern",
      company: "Cybervault",
      date: "Apr 2026 - Present",
      desc: "Auditing network infrastructure and conducting defensive operations utilizing Nmap and Wireshark. Analyzing large-scale server logs using Splunk for advanced threat detection and fortifying enterprise frameworks."
    }
  ];

  const skillCategories = {
    "Languages & Core": [
      { name: "C/C++", icon: <SiCplusplus /> }, { name: "Java", icon: <FaJava /> }, { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> }, { name: "Dart", icon: <SiDart /> }, { name: "Distributed Sys", icon: <FaServer /> }
    ],
    "Databases & Cloud": [
      { name: "MySQL", icon: <SiMysql /> }, { name: "MongoDB", icon: <SiMongodb /> }, { name: "PostgreSQL", icon: "" },
      { name: "Firebase", icon: <SiFirebase /> }, { name: "Supabase", icon: "" }, { name: "Docker", icon: <SiDocker /> },
      { name: "Nginx", icon: <SiNginx /> }, { name: "Redis", icon: <SiRedis /> }, { name: "Linux", icon: <FaLinux /> }, { name: "MinIO", icon: "" }
    ],
    "Web & Mobile": [
      { name: "React.js", icon: <FaReact /> }, { name: "Node.js", icon: <FaNodeJs /> }, { name: "Express.js", icon: <SiExpress /> },
      { name: "Flutter", icon: <SiFlutter /> }, { name: "HTML/CSS", icon: <FaHtml5 /> }
    ],
    "Security & Net": [
      { name: "Wireshark", icon: <SiWireshark /> }, { name: "Nmap", icon: <FaShieldAlt /> }, { name: "Splunk", icon: "" },
      { name: "Cisco Pkt Tracer", icon: <SiCisco /> }, { name: "Metasploit", icon: <SiMetasploit /> }, { name: "Cryptography", icon: "" }
    ],
    "AI & Engineering": [
      { name: "PyTorch", icon: <SiPytorch /> }, { name: "TensorFlow", icon: <SiTensorflow /> }, { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> }, { name: "OpenCV", icon: <SiOpencv /> }, { name: "NLP", icon: "" },
      { name: "FFmpeg/HLS", icon: "" }, { name: "CP2K/DFT", icon: "" }
    ],
    "Embedded & Design": [
      { name: "Arduino", icon: <SiArduino /> }, { name: "Raspberry Pi", icon: <FaRaspberryPi /> }, { name: "Blender", icon: <SiBlender /> },
      { name: "Figma", icon: <FaFigma /> }
    ]
  };

  const projects = [
    { name: "BlockDrive", link: "https://github.com/sanjjiiev/secure-storage", desc: "Highly scalable, zero-knowledge decentralized file storage platform utilizing AES-128 encryption and a custom PoW blockchain.", type: "Dist. Systems" },
    { name: "VideoDash 2.0", link: "https://github.com/sanjjiiev/video_dash_2.0", desc: "Enterprise ABR video streaming utilizing HLS, secure FFmpeg containerized transcoding, and AES-128 chunk encryption.", type: "Web/Media" },
    { name: "mofscreen", link: "https://github.com/sanjjiiev/mofscreen", desc: "Sophisticated screen recording and real-time interaction platform for Linux systems with optimized memory management.", type: "Systems" },
    { name: "Network+ Scanner", link: "https://github.com/sanjjiiev/NetworkPlus", desc: "Automated network vulnerability scanner performing port scanning and service detection with custom Nmap scripting.", type: "Security" }
  ];

  const awards = [
    { title: "Smart India Hackathon 2025", year: "2025", desc: "Advanced to final round with blockchain-based digital voting system prototype." },
    { title: "Amrita IoT Challenge", year: "2024", desc: "Designed a smart agriculture monitoring system using LoRa and edge computing." },
    { title: "ACM Code Sprint", year: "2024", desc: "Won first place for optimizing distributed sorting algorithms in C++." },
    { title: "Open Source Contributor", year: "2023-2026", desc: "Contributed to multiple open-source projects including FFmpeg and TensorFlow." }
  ];

  return (
    <>
      {/* --- HERO SECTION: PROFILE & TERMINAL --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

        {/* Identity Card */}
        <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 relative group overflow-hidden shadow-2xl transition-all duration-500 hover:bg-white/[0.04] hover:border-emerald-500/20">
          {/* Geometric Accent */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-emerald-500/20 to-violet-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>

          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4 tracking-tight">
            {profile.name}
            <span className="text-emerald-500 animate-pulse ml-1 inline-block">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-400 mb-6 font-medium flex items-center gap-3">
            <span className="w-8 h-[2px] bg-emerald-500/50 rounded-full"></span>
            {profile.role}
          </p>
          
          <p className="max-w-xl text-slate-400 text-base md:text-lg leading-relaxed mb-8">
            {profile.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl bg-black/40 border border-white/5 p-4 flex flex-col gap-1 transition-all duration-300 hover:border-emerald-500/30">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Education Protocol</span>
              <span className="text-slate-200 font-semibold">{profile.education.degree}</span>
              <span className="text-emerald-500/90 text-sm font-medium">{profile.education.school}</span>
            </div>
            <div className="rounded-xl bg-black/40 border border-white/5 p-4 flex flex-col justify-center gap-3 transition-all duration-300 hover:border-violet-500/30">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors w-fit">
                <FaEnvelope className="text-violet-400 text-lg" /> {profile.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Globe className="text-violet-400 text-lg" /> {profile.location}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/sanjjiiev" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 group">
              <FaGithub className="text-lg group-hover:scale-110 transition-transform" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sanjjiiev-s-043183290" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 border border-white/10 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white/20 hover:border-white/30 transition-all duration-300 group">
              <FaLinkedin className="text-lg text-[#0A66C2] group-hover:scale-110 transition-transform" /> LinkedIn
            </a>
          </div>
        </div>

        {/* --- TERMINAL --- */}
        <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0a0a0f]/90 backdrop-blur-2xl flex flex-col h-[450px] md:h-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          {/* Terminal Header */}
          <div className="flex justify-between items-center bg-black/60 px-4 py-3 border-b border-white/10 shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-[10px] font-mono text-slate-500">bash — 80x24</span>
            <div className="w-10"></div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            className="flex-1 overflow-y-auto p-4 font-mono text-sm text-slate-300 space-y-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
          >
            {output.map((line, idx) => (
              <div key={idx} className={`${line.startsWith('>') ? 'text-emerald-400' : 'text-slate-400'}`}>
                {line}
              </div>
            ))}
            <div className="flex items-center gap-2 text-emerald-400">
              <span>$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent border-none outline-none text-slate-200 font-mono text-sm caret-emerald-400"
                placeholder="Enter command..."
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- EXPERIENCE --- */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-emerald-400" size={28} />
          <h2 className="text-2xl font-bold text-white tracking-tight">Experience Log</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-violet-400 font-medium">{exp.company}</span>
                </div>
                <span className="text-sm font-mono text-slate-500 bg-black/40 px-3 py-1 rounded-full border border-white/10 mt-3 md:mt-0">{exp.date}</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-4xl">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- SKILLS --- */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <Cpu className="text-violet-400" size={28} />
          <h2 className="text-2xl font-bold text-white tracking-tight">Technical Arsenal</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div key={category} className="rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-violet-500/30 transition-all duration-300 backdrop-blur-sm group">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-500 group-hover:animate-ping"></span> 
                {category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-violet-500/10 hover:text-white hover:border-violet-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-default shadow-sm">
                    {skill.icon && <span className="text-emerald-400">{skill.icon}</span>}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PROJECTS --- */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <Layers className="text-emerald-400" size={28} />
          <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <a key={idx} href={proj.link} target="_blank" rel="noreferrer" className="block group">
              <div className="h-full rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden backdrop-blur-sm flex flex-col shadow-lg">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:scale-110 transition-all duration-300">
                    <ExternalLink size={18} />
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-black/30 px-2 py-1 rounded border border-white/5">{proj.type}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors relative z-10">{proj.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-grow relative z-10">{proj.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* --- BLOG PREVIEW --- */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="text-emerald-400" size={28} />
          <h2 className="text-2xl font-bold text-white tracking-tight">Latest Terminal Logs</h2>
          <Link to="/blog" className="ml-auto text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-mono">
            View All <ChevronRight size={16} />
          </Link>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(0, 2).map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block group">
              <div className="h-full rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden backdrop-blur-sm flex flex-col shadow-lg">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-500"></div>
                <div className="flex flex-wrap gap-2 mb-3 relative z-10">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors relative z-10">{post.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-grow relative z-10">{post.snippet.substring(0, 150)}...</p>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono relative z-10">
                  <span>{post.date}</span>
                  <span className="text-emerald-500 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Log <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* --- AWARDS --- */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/20 to-black p-8 md:p-10 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex items-center gap-3 mb-8 relative z-10">
          <FaTrophy className="text-yellow-500 text-2xl" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Achievements</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {awards.map((award, idx) => (
            <div key={idx} className="flex flex-col gap-2 group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-yellow-500/70 mb-2 border border-white/10 group-hover:border-yellow-500/50 group-hover:text-yellow-400 transition-colors">
                <Star size={14} />
              </div>
              <h4 className="text-white font-bold text-base leading-snug">{award.title}</h4>
              <p className="text-xs font-mono text-emerald-500/80">{award.year}</p>
              <p className="text-sm text-slate-400 leading-relaxed mt-1">{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const App = () => {
  const location = useLocation();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b12] text-white font-sans antialiased relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-900/5 via-violet-900/5 to-transparent pointer-events-none"></div>
      <div className="fixed top-1/4 -left-48 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-48 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* TOP NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 px-6 py-3 flex justify-between items-center text-xs font-mono text-emerald-400 shadow-2xl">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 bg-red-500/80 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500/80 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500/80 rounded-full"></span>
            </div>
            <span className="tracking-widest font-bold opacity-80 ml-2 hidden sm:inline-block">SYS.CORE.v3</span>
          </div>
          
          <div className="flex gap-4 items-center ml-2 md:ml-4">
            <Link to="/" className={`flex items-center gap-1.5 transition-colors hover:text-white ${location.pathname === '/' ? 'text-white' : 'opacity-70'}`}>
              <Home size={14} /> HOME
            </Link>
            <Link to="/blog" className={`flex items-center gap-1.5 transition-colors hover:text-white ${location.pathname.startsWith('/blog') ? 'text-white' : 'opacity-70'}`}>
              <FileText size={14} /> BLOG
            </Link>
          </div>
        </div>
        <div className="hidden md:flex gap-6 items-center opacity-80">
          <span>{time}</span>
          <span className="flex items-center gap-2"><Zap size={14} className="text-violet-400" /> ONLINE</span>
        </div>
      </div>

      <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto mt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<Blog />} />
        </Routes>

        {/* FOOTER */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p className="flex items-center gap-2">
            © 2026 Sanjjiiev S <span className="hidden md:inline">•</span> <span className="opacity-70">Crafted with React & Tailwind</span>
          </p>
          <div className="flex gap-4">
             <a href="https://github.com/sanjjiiev" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a>
             <a href="https://www.linkedin.com/in/sanjjiiev-s-043183290" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
