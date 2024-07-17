import styles from './ProjectsStyles.module.css';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard link="https://github.com/RobH0/ottergram" preview="https://github.com/RobH0/ottergram/raw/main/ottergram-preview.gif" title="Ottergram" description="Fullstack social media web app providing users the opportunity to share their favorite GIFs/pictures and interact with other users' posts." />
            
        </div>
    </section>

  )
}

export default Projects