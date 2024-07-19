import styles from './TechIconStyles.module.css';

function TechIcon(props) {
  return (
    <div className={styles.container}>
        <img className={styles.icon} src={props.source} alt={props.name}></img>
        <span className={styles.techName}>{props.name}</span>
    </div>
  )
}

export default TechIcon