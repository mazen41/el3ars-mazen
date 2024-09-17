import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Navbar from '../navbar/Navbar';
import './projects.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useTheme } from '../../Them';

const projectsData = [
    {
        id: 1,
        image: './Social_Media_App_Picture.png',
        name: 'Social Media App',
        smallDescription: 'Connect, share, Network.',
        description: 'Designed and developed a social media platform enabling user connection and content engagement. Features include user authentication, post creation (text, images), content discovery through personalized feeds, commenting and discussion functionalities, Profile settings post delete and edit',
        explanation: 'This is the frontend part only you could the code of the backend part in github at the link below :)',
        
        liveLink: 'https://social-media-app-tau-jet.vercel.app/',
        gitFrontendLink: 'https://github.com/mazen41/social-media-app.git',
        gitBackendLink: 'https://github.com/mazen41/social-media-app-api.git',
        technology: ['React', 'Laravel', 'PHP', 'Mysql'],
    },
    {
        id: 3,
        image: './E-commrece_website.png',
        name: 'E-commerce Online Store',
        smallDescription: 'Sip, savor, repeat.',
        description: 'Developed an e-commerce platform for a coffee online store. The platform facilitates online ordering, secure payment processing, and customer account management for a seamless coffee-buying experience.',
        explanation: 'This is the frontend part only you could the code of the backend part in github at the link below :)',
        liveLink: '',
        gitFrontendLink: 'https://github.com/mazen41/e-commerce-online-store.git',
        gitBackendLink: 'https://github.com/mazen41/online-store-api.git',
        technology: ['React', 'Typescript'],
    },
    {
        id: 4,
        image: './Landing_Page.png',
        name: 'Animation Landing Page',
        smallDescription: 'The Animation',
        description: 'Designed and developed an interactive landing page utilizing animation to engage and inform users.        ',
        explanation: 'This is the frontend part only you could the code of the backend part in github at the link below :)',
        explanation: 'This is the frontend part only you could the code of the backend part in github at the link below :)',
        
        liveLink: 'https://animation-landing-page-theta.vercel.app',
        github: 'https://github.com/mazen41/Animation-Landing-Page.git',
        technology: ['HTML', 'SCSS', 'Javascript'],
    },
    {
        id: 5,
        image: './Dashboard.png',
        name: 'Shopify Simple Dashboard',
        smallDescription: 'The Animation',
        description: '',
        explanation: 'This is the frontend part only you could the code of the backend part in github at the link below :)',
        
        liveLink: 'https://dashboard-iota-eosin.vercel.app/',
        github: 'https://github.com/mazen41/Dashboard.git',
        technology: ['React', 'SCSS'],
    },

];

const Projects = () => {
    const { theme, toggleTheme } = useTheme();

    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedProjectClassName, setSelectedProjectClassName] = useState('selected-project');
    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setSelectedProjectClassName('selected-project active');
        document.body.style.overflow = "hidden";
    };
    const handleCloseProject = () => {
        setSelectedProjectClassName('selected-project');
        setSelectedProject(null)
        document.body.style.overflow = "";

    }
    console.log(selectedProject);
    return (
        <motion.div className={`projects ${theme}`}>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="projects-container">
                <div className="title">
                    <h2>Projects.</h2>
                </div>
                <div className="projects">
                    {projectsData.map((project) => (
                        <Project key={project.id} project={project} onProjectClick={handleProjectClick} />
                    ))}
                </div>
                {/* { */}
                {
                    selectedProject && (
                        <div className="overlay"></div>
                    )
                }
                <div className={selectedProjectClassName}>
                    <div className="back">
                        <span onClick={handleCloseProject}><ArrowBackIosNewIcon /></span>
                        <p onClick={handleCloseProject}>Back To Projects</p>
                    </div>
                    <div className="info">
                        <div className="first">
                            <div className="name">
                                <h3>{selectedProject ? selectedProject.name : null}</h3>
                                <p>{selectedProject ? selectedProject.smallDescription : null}</p>
                            </div>
                            <div className="image">
                                <img src={selectedProject ? selectedProject.image : null} alt="" />
                            </div>
                        </div>
                        <div className="second">
                            <div className="about">
                                <h4>About</h4>
                                <p>{selectedProject ? selectedProject.description : null}</p>
                            </div>
                            <div className="tech">
                                <p>Technologies</p>
                                {selectedProject && (
                                    <ul>
                                        {selectedProject.technology.map((item) => (
                                            <li key={item.id}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="links">
                            <div className="web">
                                <h2>Website</h2>
                                <p></p>
                                <a href={selectedProject ? (selectedProject.liveLink ? selectedProject.liveLink : null) : null}>{selectedProject ? (selectedProject.liveLink ? selectedProject.liveLink : null) : null}</a>
                            </div>
                            <div className="git">
                                <h2>Github</h2>
                                <div className="front">
                                    <p>Frontend</p>
                                    <a href="">https://twitter.com/mazen_hossny</a>
                                </div>
                                <div className="backend">
                                    <p>backedn</p>
                                    <a href="">https://twitter.com/mazen_hossny</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Projects


const Project = ({ project, onProjectClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`project`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onProjectClick(project)}
        >
            <div className="image">
                <img src={project.image} alt="" />

            </div>
            <div className={`${isHovered ? 'popup active' : 'popup'}`}
            >
                <div className="name"><h4>{project.name}</h4></div>
                <div className="description"><p>{project.smallDescription}</p></div>
                <div className="technologies">
                    <ul>
                        {
                            project.technology ? (
                                project.technology.map((tech) => {
                                    return <li key={tech}>{tech}</li>;
                                })
                            ) : null
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

