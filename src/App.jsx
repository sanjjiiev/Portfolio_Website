import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Layers, ChevronRight, Cpu, Globe, ExternalLink, Briefcase, Zap, Star, Home, FileText, Calendar } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaJava, FaReact, FaNodeJs, FaLinux, FaGitAlt, FaRaspberryPi, FaFigma, FaAward, FaTrophy, FaHtml5, FaCss3Alt, FaJs, FaServer, FaShieldAlt } from 'react-icons/fa';
import { SiExpress, SiFlutter, SiPytorch, SiPandas, SiOpencv, SiTensorflow, SiMysql, SiMongodb, SiFirebase, SiCplusplus, SiDart, SiNumpy, SiScikitlearn, SiHuggingface, SiSqlite, SiAndroidstudio, SiArduino, SiWireshark, SiCisco, SiMetasploit, SiBlender, SiDocker, SiNginx, SiRedis } from 'react-icons/si';
import Blog, { blogPosts } from './Blog';

const Portfolio = () => {
  const [activePage, setActivePage] = useState('home');
  const [activePost, setActivePost] = useState(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    '> SYSTEM INITIALIZED...',
    '> TYPE "HELP" FOR COMMANDS.'
  ]);

  const terminalBodyRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

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
    { name: "mofscreen", link: "https://pypi.org/project/mofscreen/", desc: "Published PyPI package automating DFT screening of MOFs for multi-ion battery anode properties utilizing CP2K.", type: "Python/PyPI" },
    { name: "ResearchVault", link: "https://github.com/sanjjiiev/ResearchVault", desc: "NIST-compliant secure web application with multi-factor authentication and hybrid cryptography.", type: "Security" },
    { name: "Dark Money Tracker", link: "https://github.com/sanjjiiev/DarkMoney-Tracker", desc: "Financial intelligence tool automating entity extraction from 10,000+ DOJ documents via custom NLP pipelines.", type: "Data/AI" },
    { name: "FacialNet", link: "https://github.com/sanjjiiev/FacialNet", desc: "Advanced facial emotion recognition utilizing ResNet and DenseNet trained on the 30,000+ FER2013 dataset.", type: "Deep Learning" },
    { name: "Knowva", link: "https://github.com/sanjjiiev/Knowva", desc: "Personalized AI learning platform with dynamic practice problems.", type: "Web" },
    { name: "AmritaFind", link: "https://github.com/SarvanthiSivaraj/AmritaFind", desc: "Lost & Found app leveraging Google Gemini API and Firebase.", type: "Mobile" },
    { name: "Smart-Sheild", link: "https://github.com/sanjjiiev/Smart-Sheild", desc: "AI-powered SOS system detecting accidents for rapid emergency response.", type: "AI/IoT" },
    { name: "Ayul", link: "https://github.com/sanjjiiev/Ayul", desc: "Bilingual application catering to traditional Indian medical systems.", type: "Flutter" },
    { name: "OptiMile", link: "https://github.com/sanjjiiev/Dynamic-Route-Optimization-System", desc: "Real-time algorithmic pathfinding visualization (Dijkstra/A*).", type: "DSA" }
  ];

  const awards = [
    { title: "3rd Place - Tensor Club", year: "2026", desc: "Optimized AI models for Large Language Model (LLM) performance prediction." },
    { title: "3rd Place - Bootstrap '25", year: "2025", desc: "Developed a scalable AI-powered Personalized Learning Management System." },
    { title: "Uyir Hackathon Finalist", year: "2024", desc: "Engineered an AI-powered SOS emergency system for autonomous vehicles." },
    { title: "Bharatiya Antariksh '25", year: "2025", desc: "Successfully submitted space-tech proposition for the national hackathon." }
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-slate-300 font-sans relative overflow-x-hidden selection:bg-emerald-500/30 pb-12">

      {/* SCANLINES & RETRO GRID */}
      <div className="scanlines"></div>
      <div className="retro-grid"></div>

      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/10 blur-[150px] mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-emerald-600/5 blur-[100px] mix-blend-screen"></div>
      </div>

      {/* PARTICLES */}
      <div className="particles">
        {[...Array(40)].map((_, i) => {
          const isGreen = Math.random() > 0.5;
          return (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                backgroundColor: isGreen ? '#10b981' : '#8b5cf6',
                boxShadow: `0 0 10px ${isGreen ? 'rgba(16,185,129,0.5)' : 'rgba(139,92,246,0.5)'}`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          );
        })}
      </div>

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
            <button onClick={() => { setActivePage('home'); setActivePost(null); }} className={`flex items-center gap-1.5 transition-colors hover:text-white ${activePage === 'home' ? 'text-white' : 'opacity-70'}`}>
              <Home size={14} /> HOME
            </button>
            <button onClick={() => { setActivePage('blog'); setActivePost(null); }} className={`flex items-center gap-1.5 transition-colors hover:text-white ${activePage === 'blog' && !activePost ? 'text-white' : 'opacity-70'}`}>
              <FileText size={14} /> BLOG
            </button>
          </div>
        </div>
        <div className="hidden md:flex gap-6 items-center opacity-80">
          <span>{time}</span>
          <span className="flex items-center gap-2"><Zap size={14} className="text-violet-400" /> ONLINE</span>
        </div>
      </div>

      <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto mt-20">

        {activePage === 'home' ? (
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
              <div className="w-10"></div> {/* Spacer for center alignment */}
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalBodyRef}
              className="flex-grow overflow-y-auto p-4 space-y-2 font-mono text-xs md:text-sm custom-scrollbar scroll-smooth"
            >
              {output.map((line, i) => (
                <div key={i} className={`${line.startsWith('>') ? 'text-emerald-400' : 'text-slate-300'} break-words`}>
                  {line}
                </div>
              ))}
            </div>

            {/* Terminal Input */}
            <div className="flex items-center gap-3 p-4 bg-black/40 border-t border-white/5 shrink-0 font-mono text-sm">
              <span className="text-violet-400 font-bold">~ $</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent outline-none flex-grow text-white placeholder-slate-700"
                placeholder="Type 'help'..."
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>

        {/* --- EXPERIENCE --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-emerald-400" size={28} />
            <h2 className="text-2xl font-bold text-white tracking-tight">Experience</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 md:p-8 hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <div>
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
                  {/* Subtle Glow inside card */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>

                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:scale-110 transition-all duration-300">
                      <Terminal size={20} />
                    </div>
                    <ExternalLink size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors relative z-10">{proj.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow relative z-10">
                    {proj.desc}
                  </p>

                  <div className="mt-auto pt-4 border-t border-white/5 relative z-10">
                    <span className="inline-block text-[10px] uppercase tracking-wider font-bold text-violet-400 bg-violet-400/10 px-3 py-1.5 rounded-md">
                      {proj.type}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* --- RECENT LOGS / BLOG PREVIEW --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-emerald-400" size={28} />
            <h2 className="text-2xl font-bold text-white tracking-tight">Recent Logs</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
              <button key={post.id} onClick={() => { setActivePost(post.id); setActivePage('blog'); }} className="block group text-left w-full">
                <div className="h-full rounded-xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden backdrop-blur-sm flex flex-col shadow-lg">
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-500"></div>
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors relative z-10">{post.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow relative z-10">{post.snippet}</p>
                  <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono relative z-10">
                    <div className="flex items-center gap-4"><span className="flex items-center gap-1.5"><Calendar size={14} className="text-violet-400/70" /> {post.date}</span></div>
                    <div className="flex items-center gap-1 text-emerald-500 group-hover:translate-x-1 transition-transform">
                      Read Log <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </button>
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
        ) : (
          <Blog activePost={activePost} setActivePost={setActivePost} setActivePage={setActivePage} />
        )}

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

export default Portfolio;