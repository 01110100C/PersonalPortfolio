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
    Html: Html, 
    CSS: CSS, 
    JavaScript: Javascript, 
    ReactLogo: ReactLogo, 
    Python: Python, 
    Cplus: Cplus, 
    Java: Java, 
    Git: Git, 
    GitHub: Github, 
    MySQL: Mysql, 
    AWS: AWS, 
    Azure: Azure, 
    Docker: Docker, 
    Redis: Redis, 
};

const SkillBar = ({ level }) => ( 
    <div className="w-full h-3 bg-seconddary/20 rounded-full overflow-hidden"> 
    <motion.div 
    initial = {{ width: 0 }}
    animate = {{ width: `${level}%` }}
    transition = {{ duration: 1.5, delay: 0.2 }}
    className = { `h-full rounded-full ${ level > 75 ? 'bg-gradient-to-r from-green-400 to-emerald-500':
        level > 50 ? 'bg-gradient-to-r from-yellow-400 to-amber-500' : 
        'bg-gradient-to-r from-red-400 to-pink-500'
    }`}
    />
    </div>
);

const InfiniteScrollSkills = ({ skills }) => { 
    const duplicatedSkills = [...skills, ...skills, ...skills]; 

    return ( 
        <div className="overflow-hidden py-8"> 
        <motion.div 
            className="flex gap-8 mb-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {duplicatedSkills.map((skill, index) => ( 
                    <div key={`${skill.name}-${index}`} className="flex-shrink-0 flex flex-col items-center gap-2">
                        <img src={iconImages[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
                  
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                    </div> 
                ))}
            </motion.div>

            <motion.div 
            className="flex gap-8"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ duration: 20, repeat: Infinity, wase: "linear" }}
            >
                {[...duplicatedSkills].reverse().map((skill, index) => (
                    <div key={`${skill.name}-reseverse-${index}`} className="flex-shrink-0 flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <img src={iconImages[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
                        </div>
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}; 

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all"); 
    const filteredSkills = skills.filter(skill => 
        activieCategory === "all" || skill.category === activeCategory
    );

return (
    <section id="skills" className="py-28 px-4 bg-gradient-to-br from-backgrounf via-secondary/5 to-background">
        <div className="container mx-auto max-w-6x1">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView ={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
            >
                <h2 className="text-4x1 md:text-5x1 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                My Skills 
                </h2>
                <p className="text-muted-foreground max-w-2x1 mx-auto text-lg">
                    Technologies I've learned and mastered 
                </p>
            </motion.div>
        </div>
    </section>
)
}