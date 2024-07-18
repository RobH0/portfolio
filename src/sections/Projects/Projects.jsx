import styles from './ProjectsStyles.module.css';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard link="https://github.com/RobH0/ottergram" preview="https://github.com/RobH0/ottergram/raw/main/ottergram-preview.gif" title="Ottergram" description="Fullstack social media web app providing users the opportunity to share their favorite GIFs/pictures and interact with other users' posts." />
            <ProjectCard link="https://github.com/RobH0/TrackCVEs" preview="https://github.com/RobH0/project-gifs/blob/main/TrackCVEs-preview.gif?raw=true" title="TrackCVEs" description="Python script that helps maintain user's situational awareness of recently released CVEs."/>

            <ProjectCard link="https://github.com/RobH0/StudyBot" preview="https://github.com/RobH0/project-gifs/raw/main/StudyBot-preview.png" title="StudyBot" description="A note taking assistant that helps you summarize educational YouTube videos into concise study notes." />
            
        </div>
    </section>
  )
}

export default Projects