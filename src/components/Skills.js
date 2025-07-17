import React from 'react';
import {
  FaPython, FaJava, FaJsSquare, FaReact, FaHtml5, FaCss3Alt,
  FaGitAlt, FaNodeJs, FaLinux, FaFigma, FaBlender, FaRaspberryPi
} from 'react-icons/fa';

import {
  SiCplusplus, SiDjango, SiFlutter, SiMongodb, SiMysql, SiPytorch,
  SiTensorflow, SiOpencv, SiPandas, SiNumpy, SiExpress, SiSqlite, SiWireshark
} from 'react-icons/si';

function Skills() {
  const skillCategories = {
    "Languages": [
      { name: "Python", icon: <FaPython /> },
      { name: "Haskell", icon: "λ" },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Dart", icon: "🎯" },
    ],
    "Frameworks & Libraries": [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "ExpressJS", icon: <SiExpress /> },
      { name: "NodeJS", icon: <FaNodeJs /> },
    ],
    "Web Development": [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
    ],
    "AI & ML": [
      { name: "Pytorch", icon: <SiPytorch /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "Data Handling", icon: "📊" },
    ],
    "Database Management": [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQLite", icon: <SiSqlite /> },
    ],
    "Tools & Platforms": [
      { name: "Linux", icon: <FaLinux /> },
      { name: "Git/GitHub", icon: <FaGitAlt /> },
      { name: "VS Code", icon: "📝" },
      { name: "Google Maps API", icon: "🗺️" },
      { name: "Godot", icon: "🎮" },
    ],
    "Design Tools": [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Blender", icon: <FaBlender /> },
    ],
    "Embedded Systems": [
      { name: "Arduino", icon: "🔌" },
      { name: "Raspberry Pi", icon: <FaRaspberryPi /> },
      { name: "STM32", icon: "🔧" },
      { name: "Sensor Integration", icon: "📟" },
    ],
    "Networking": [
      { name: "Wireshark", icon: <SiWireshark /> },
    ],
    "Penetration Testing": [
      { name: "Metasploit", icon: "🛠️" },
      { name: "BeEF", icon: "🐮" },
    ],
    "Social Networking / OSINT": [
      { name: "OSINTgram", icon: "🕵️‍♂️" },
    ],
    "Digital Marketing": [
      { name: "Content Creation", icon: "📝" },
      { name: "Social Media", icon: "📱" },
      { name: "Design Skills", icon: "🎨" },
      { name: "Data Analysis", icon: "📈" },
    ],
  };

  return (
    <section className="mb-4">
      <h2 className="mb-3">Skills</h2>
      {Object.entries(skillCategories).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h5 className="mb-3">{category}</h5>
          <div className="row">
            {items.map((item, idx) => (
              <div key={idx} className="col-md-4 d-flex align-items-center mb-2">
                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
