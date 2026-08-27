import { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 


// import images 
import AWS from "./components/icons/AWSLogo.png";
import Azure from "./components/icons/AzureLogo.png"; 
import Cplus from "./components/icons/cLogo.png"; 
import CSS from "./components/icons/CSSLogo.png"; 
import Docker from "./components/icons/DockerLogo.png"; 
import Github from "./components/icons/githublogo.png"; 
import Html from "./components/icons/HTMLLogo.png"; 
import Java from "./components/icons/JavaLogo.png"; 
import Javascript from "./components/icons/JavaScriptLogo.png"; 
import Mysql from "./components/icons/MysqlLogo.png"; 
import Python from "./components/icons/PythonLogo.png"; 
import ReactLogo from "./components/icons/ReactLogo.png"; 
import Redis from "./components/icons/RedisLogo.png"; 

const skills = [ 

    // frontend skills 
    { name: "HTML5", level: 95, category: "frontend", icon: "Html"}, 
    { name: "CSS", level: 85, category: "frontend", icon: "CSS"}, 
    { name: "JavaScript", level: 90, category: "frontend", icon: "JavaScript"}, 
    { name: "React", level: 90, category: "frontend", icon: "ReactLogo"},

    // backend skills 
    { name: "Python", level: 85, category: "backend", icon: "Python"}, 
    { name: "C++", level: 80, category: "backend", icon: "Cplus"}, 
    { name: "Java", level: 90, category: "backend", icon: "Java"}, 
    
    // Dev tools 

    { name: "Git", level: 95, category: "Tools", icon: "Git"}, 
    { name: "GitHub", level: 95, category: "Tools", icon: "GitHub"}, 
    { name: "MySQL", level: 90, category: "Tools", icon: "MySQL"}, 
    { name: "AWS", level: 90, category: "Tools", icon: "AWS"}, 
    { name: "Azure", level: 85, category: "Tools", icon: "Azure" }, 
    { name: "Docker", level: 80, category: "Tools", icon: "Docker"},
    { name: "Redis", level: 80, category: "Tools", icon: "Redis"},

];


// create sections for each skill display 
const categories = [
    { id: "all", label: "All Skills", color: "bg-gradient-to-r from-blue-500 to-black-500" }, 
    { id: "frontend", label: "Frontend", color:"bg-gradient-to-r from-blue-500 to-black-500" }, 
    { id: "backend", label: "Backend", color: "bg-gradient-to-r from-blue-500 to-black-500" }, 
    { id: "Tools", label: "Tools", color: "bg-gradient-to-r from-blue-500 to-black-500" }, 
];

// link images to variable name 
const iconImages = {
    
}