import styles from './ProjectCardStyles.module.css'
import React, {useState, useRef, useEffect} from 'react';

function ProjectCard(props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    console.log(`ref.current: ${ref.current}`);
    console.log(ref.current);
    let options = { threshold: 1}
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // Ensures fade-in animation only runs once.
      if (!isVisible){
        setIsVisible(entry.isIntersecting); 
      }      
    }, options);
    observer.observe(ref.current);

    
    return () =>{
      if (ref.current){
        observer.unobserve(ref.current);
      }      
    }
  }, [ref.current]);

  return (
    <div ref={ref} className={isVisible ? `${styles.container} ${styles.startAnimation}` : `${styles.container}`}>
      <a href={props.link} target="_blank">
          <img src={props.preview} alt="Project preview gif"></img>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
      </a>
    </div>
  )
}

export default ProjectCard