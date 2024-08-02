import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Portfolio",
        src: "Portfolio.jpg"
    },
    {
        title: "JWT Library",
        src: "JWT_Library.jpg"
    },
    {
        title: "Wireless Greenhouse",
        src: "Wireless_Greenhouse.jpg"
    },
    {
        title: "Outfit Generator",
        src: "Outfit_generator.jpg"
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Developed a portfolio website using HTML, CSS, and JavaScript to showcase technical skills and projects.The site includes sections on projects, skills, extracurricular activities, and contact information, reflecting a clean design.</p>
                </div>
                <div className={styles.column}>
                    <p>Engineered a JSON Web Token (JWT) library supporting HS256, RS256, and ES256 algorithms to enhance web application security.<br></br> Developed an IoT-based Wireless Controlled GreenHouse to monitor soil humidity and regulate airflow, resulting in better management of plants and resource savings.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
