import styles from './TechStyles.module.css';
import TechIcon from './TechIcon';

function Tech() {
  return (
    <section id="tech" className={styles.container}>
        <h1 className='sectionTitle'>Tech</h1>
        <div>
            <TechIcon name="JavaScript" source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        </div>
    </section>
  )
}

export default Tech