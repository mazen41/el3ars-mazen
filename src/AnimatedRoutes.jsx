import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import { AnimatePresence } from "framer-motion";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Design from "./components/Design";
import Projects from "./components/projects/Projects";
import './App.css'
function AnimatedRoutes() {
    const location = useLocation();
    const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
    const [pointPosition, setPointPosition] = useState({ top: 0, left: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({
                top: e.pageY - 30,
                left: e.pageX - 30,
            });

            setPointPosition({
                top: e.pageY - 5,
                left: e.pageX - 5,
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <div className="App">
            <AnimatePresence>

                <Design />
                {/* <div id="cursor" className="cursor" style={{ ...cursorPosition }}></div> */}
                {/* <div id="point" className="point" style={pointPosition}></div> */}
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default AnimatedRoutes;
