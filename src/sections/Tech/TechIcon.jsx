import styles from './TechIconStyles.module.css';
import React, {useState, useRef, useEffect} from 'react';

function TechIcon(props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    console.log(`ref.current: ${ref.current}`);
    console.log(ref.current);
    let options = { threshold: 0.75}
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
        <img className={styles.icon} src={props.source} alt={props.name}></img>
        <span className={styles.techName}>{props.name}</span>
    </div>
  )
}

export default TechIcon