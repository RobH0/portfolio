import styles from './ProjectCardStyles.module.css'

// Need to ensure fade in animation only occurs when component is first visible in viewport.
function ProjectCard(props) {
  return (
        <div className={styles.container}>
            <a href={props.link} target="_blank">
                <img src={props.preview} alt="Project preview gif"></img>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </a>
        </div>
  )
}

export default ProjectCard