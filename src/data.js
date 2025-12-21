import React from 'react';
import {
  FaPython, FaJava, FaJsSquare, FaReact, FaHtml5, FaCss3Alt,
  FaGitAlt, FaNodeJs, FaLinux, FaFigma, FaBlender, FaRaspberryPi,
  FaAward, FaTrophy, FaGithub, FaLinkedin, FaEnvelope
} from 'react-icons/fa';
import {
  SiCplusplus, SiFlutter, SiMongodb, SiMysql, SiPytorch,
  SiTensorflow, SiOpencv, SiPandas, SiNumpy, SiExpress, SiSqlite, SiWireshark,
  SiFirebase, SiScikitlearn, SiAndroidstudio, SiCisco
} from 'react-icons/si';

export const personalData = {
  name: "Sanjjiiev S",
  role: "Web Developer",
  education: [
    {
      school: "Amrita Vishwa Vidyapeetham",
      degree: "B.Tech in Computer Science Engineering (Core)",
      timeline: "Aug 2023 – May 2027",
      location: "Coimbatore, India",
      cgpa: "Current CGPA: 7.57"
    }
  ],
  contact: {
    email: "sanjjiiev005@gmail.com",
    phone: "+91 9843065552",
    address: "Coimbatore, Tamil Nadu, India",
    languages: "English, Tamil, German (Learning)"
  },
  socials: [
    { name: "GitHub", url: "https://github.com/sanjjiiev", icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sanjjiiev-s-a20757287/", icon: <FaLinkedin /> },
    { name: "Email", url: "mailto:sanjjiiev005@gmail.com", icon: <FaEnvelope /> }
  ],
  resumeUrl: "/Resume.pdf"
};

export const about = {
  title: "Profile",
  description: "Motivated and detail-oriented Computer Science Engineering student with practical experience in AI, networking, web/semantic development. Strong problem-solving skills and hands-on approach to learning. Eager to build reliable, efficient, user-focused solutions."
};

export const projects = [
  { name: "Smart-Sheild", link: "https://github.com/sanjjiiev/Smart-Sheild" },
  { name: "Dynamic Route Optimization System", link: "https://github.com/sanjjiiev/Dynamic-Route-Optimization-System" },
  { name: "Campus-Connect", link: "https://github.com/sanjjiiev/Campus-Connect" },
  { name: "Knowva", link: "https://github.com/sanjjiiev/Knowva" },
  { name: "Semantic Mapping of JSON to OWL via NLP", link: "https://github.com/sanjjiiev/NLP-Enhanced-Semantic-Mapping-of-JSON-Data-to-OWL-Ontologies" },
  { name: "Ayul", link: "https://github.com/sanjjiiev/Ayul" },
  { name: "GoQuest", link: "https://github.com/SanjaiPG/GoQuest" },
];

export const skills = {
  "Languages": [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C/C++", icon: <SiCplusplus /> },
  ],
  "Web & Mobile Development": [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "ExpressJS", icon: <SiExpress /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Dart", icon: "🎯" },
  ],
  "AI & ML": [
    { name: "Pytorch", icon: <SiPytorch /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Scikit-learn", icon: <SiScikitlearn /> },
    { name: "OpenCV", icon: <SiOpencv /> },
    { name: "Data Handling", icon: "📊" },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "Hugging Face", icon: "🤗" },
  ],
  "Database Management": [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  "Tools & Platforms": [
    { name: "Linux", icon: <FaLinux /> },
    { name: "Git/GitHub", icon: <FaGitAlt /> },
    { name: "Google Maps API", icon: "🗺️" },
    { name: "VS Code", icon: "📝" },
    { name: "Godot", icon: "🎮" },
    { name: "Android Studios", icon: <SiAndroidstudio /> },
  ],
  "Embedded Systems": [
    { name: "Arduino", icon: "🔌" },
    { name: "Raspberry Pi", icon: <FaRaspberryPi /> },
    { name: "STM32", icon: "🔧" },
    { name: "Sensor Integration", icon: "📟" },
    { name: "Microcontrollers", icon: "⚙️" },
  ],
  "Security & Networking": [
    { name: "OSI layers", icon: "📶" },
    { name: "IP addressing", icon: "🌐" },
    { name: "Wireshark", icon: <SiWireshark /> },
    { name: "Cisco-packet tracer", icon: <SiCisco /> },
    { name: "OSINTgram", icon: "🕵️‍♂️" },
    { name: "Metasploit", icon: "🛠️" },
    { name: "BeEF", icon: "🐮" },
  ],
  "Design": [
    { name: "Blender", icon: <FaBlender /> },
    { name: "Figma", icon: <FaFigma /> },
  ],
  "Digital Marketing": [
    { name: "Content Creation", icon: "📝" },
    { name: "Social Media", icon: "📱" },
    { name: "Design Skills", icon: "🎨" },
    { name: "Data Analysis", icon: "📈" },
  ],
};

export const awards = [
  {
    title: 'Uyir Hackathon Finalist',
    desc: 'Developed an AI-powered SOS system for autonomous vehicles, competing in the final round.',
    year: '2024',
    icon: <FaTrophy />,
    link: 'https://github.com/sanjjiiev/Smart-Sheild'
  },
  {
    title: "Bootstrap '25 Defang.io Hackathon",
    desc: 'Developed an AI-powered Personalized Learning Management System, earning third place in the competition.',
    year: '2025',
    icon: <FaTrophy />,
    link: 'https://github.com/sanjjiiev/Knowva'
  },
  {
    title: 'Swachhata Hi Seva Campaign - NSS Certification',
    desc: 'Recognized for active participation in the National Service Scheme (NSS) camp.',
    year: '2023',
    icon: <FaAward />,
    link: 'https://github.com/sanjjiiev/Awards/blob/main/swachhata_hi_seva.pdf'
  },
  {
    title: 'Bharatiya Antariksh Hackathon 2025',
    desc: 'Successfully submitted an idea for the Bharatiya Antariksh Hackathon 2025.',
    year: '2025',
    icon: <FaAward />,
    link: ''
  }
];