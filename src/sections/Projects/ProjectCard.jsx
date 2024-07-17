import styles from './ProjectCardStyles.module.css'

function ProjectCard(props) {
  return (
        <div className={styles.container}>
            <a href={props.link}>
                <img src={props.preview} alt="Project preview gif"></img>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </a>
        </div>
  )
}

export default ProjectCard