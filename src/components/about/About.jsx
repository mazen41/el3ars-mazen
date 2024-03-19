import React from 'react';
import { motion } from 'framer-motion';
import './about.css';
import Navbar from '../navbar/Navbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EastIcon from "@mui/icons-material/East";
import { Link } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
import { useTheme } from '../../Them';

const About = () => {
  const { theme, toggleTheme } = useTheme();

    return (
        <motion.div
            className={`about ${theme}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="navbar">
                <Navbar />
            </div>
            <div className="about-container">
                <div className="title">
                    <h2>About Me.</h2>
                </div>
                <div className="article">
                    <ul className='links'>
                        <li>
                            <div className="title">
                                <h2 className="first">
                                    Techonloegy.
                                    <small>
                                        <GitHubIcon  style={{"fontSize":"15px"}}/>
                                    </small>
                                </h2>
                                <a href="">View On Github</a>
                            </div>
                            <p>
                                Since childhood, the world of programming has been my refuge, offering not just a skill but a profound sense of relief and joy. Beyond a mere career choice, my passion encompasses the entirety of technology, from coding to the broader tech landscape. It's a journey that started with fascination and evolved into a lifelong commitment. Join me as I navigate this dynamic realm, where each line of code is a step in a dance with innovation, creativity, and the ever-evolving possibilities of technology.
                            </p>
                        </li>
                        <li>
                            <div className="title">
                                <h2 className="second">
                                    Projects.
                                    <small>
                                        <PublicIcon style={{"fontSize":"15px"}}/>
                                    </small>
                                </h2>
                                <a href="">View Projects</a>
                            </div>
                            <p>
                                Dive into my portfolio featuring an array of projects, from a dynamic social media app and engaging e-commerce online store to a streamlined task management app. Explore the fusion of creativity and functionality in projects like a social media dashboard, an animation landing page, and a captivating restaurant and cafe website. Each project reflects my commitment to crafting diverse, innovative solutions in the world of programming and design.                            </p>
                        </li>
                    </ul>
                    <div className="reads">
                        <div className="sm-title">
                            <h4>My Reads.</h4>
                        </div>
                        <ul className='links'>
                            <li>
                                <div className="title">
                                    <h2 className="first">
                                        Atomic Habits
                                       
                                    </h2>
                                </div>
                                <p>
                                    Unpacking the potency of small habits, this book unveils the science behind behavioral change. Offering practical strategies, it emphasizes the profound impact of minor shifts on personal growth. A guide to harnessing the extraordinary potential within daily routines for lasting transformation.
                                </p>
                            </li>
                            <li>
                                <div className="title">
                                    <h2 className="second">
                                        Algorithms Unlocked
                                      
                                    </h2>
                                    
                                </div>
                                <p>
                                    Algorithms form the backbone of programming, dictating the step-by-step procedures that drive software functionality. From sorting data to searching for information, the efficiency and effectiveness of algorithms are paramount. "Algorithms Unlocked" sheds light on this crucial aspect, emphasizing the indispensable role these systematic procedures play in the world of programming.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="music">
                        <div className="sm-title">
                            <h4>My Playlists.</h4>
                        </div>
                        <ul className='links'>
                            <li>
                                <div className="title">
                                    <h2 className="first">
                                        This Is Eminem
                                        <small>
                                            <a href="">.Spotify</a>
                                        </small>
                                    </h2>
                                    <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4gTUOY?si=0f4cb18dac31404e" target='blank'>Visit PlayList</a>
                                </div>
                                <p>
                                    Some songs from my favorite artist makes me awake.
                                </p>
                            </li>
                            <li>
                                <div className="title">
                                    <h2 className="second">
                                        This Is Billie Eillish
                                        <small>
                                            <a href="">.Spotify</a>
                                        </small>
                                    </h2>
                                    <a href="https://open.spotify.com/playlist/37i9dQZF1DX6cg4h2PoN9y?si=ce06ee73d4c3475a" target='blank'>Visist PlayList</a>
                                </div>
                                <p>
                                    My Favortie Singer And Best Songs To Relax And Hype.
                                </p>
                            </li>
                            <li>
                                <div className="title">
                                    <h2 className="second">
                                        Marwan Moussa Mix
                                        <small>
                                            <a href="">.Spotify</a>
                                        </small>
                                    </h2>
                                    <a href="https://open.anghami.com/yqHffYPUCHb" target='blank'>Visit PlayList</a>
                                </div>
                                <p>
                                    My Favorite Egyption Rapper And The Best Playlist To Hype And Relax And Chill
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="go_back">
                    <Link to={"/projects"}>
                        <p>Continue To Projects</p>
                    </Link>
                    <span>
                        <EastIcon />
                    </span>
                </div>
                <div className="my-links">
                    <ul>
                        <a href="https://twitter.com/mazen_hossny"><XIcon /></a>
                        <a href="https://www.facebook.com/mazen.hossny.7"><FacebookOutlinedIcon /></a>
                        <a href="https://www.linkedin.com/in/mazen-hossny-54a8a02b7/"><LinkedInIcon /></a>
                        <a href="https://www.instagram.com/hossny_mazen/"><InstagramIcon /></a>
                        <a href=""><GitHubIcon /></a>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default About