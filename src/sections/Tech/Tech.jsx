import styles from './TechStyles.module.css';
import TechIcon from './TechIcon';
////https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg
function Tech() {
  return (
    <section id="tech" className={styles.container}>
        <h1 className='sectionTitle'>Tech</h1>
        <div className={styles.techTypes}>
            <h2>Languages</h2>
            <div className={styles.typeDiv}>
                <TechIcon name="JavaScript" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <TechIcon name="Python" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                <TechIcon name="HTML" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                <TechIcon name="CSS" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
            </div>
            <h2>Libraries & Frameworks & Runtimes</h2>
            <div className={styles.typeDiv}>
                <TechIcon name="React" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <TechIcon name="Express.js" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                <TechIcon name="Node.js" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
            </div>
            
            <h2>Databases</h2>
            <div className={styles.typeDiv}>
                <TechIcon name="MongoDB" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" />
            </div>
            
            <h2>Tools & Other Tech</h2>
            <div className={styles.typeDiv}>
                <TechIcon name="Git" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                <TechIcon name="Nginx" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" />
                <TechIcon name="Jira" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
                <TechIcon name="Ollama" source="https://github.com/RobH0/project-gifs/blob/main/ollama.png?raw=true" />
            </div>
            
            <h2>Operating Systems</h2>
            <div className={styles.typeDiv}>
                <TechIcon name="Linux" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                <TechIcon name="Windows" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" />
            </div>
        </div>
    </section>
  )
}

export default Tech