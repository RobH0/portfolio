import arrow from '../assets/down-arrow-5-svgrepo-com.svg'
import styles from './ArrowStyles.module.css'

export default function ArrowComponent() {
  return (
    <div className={styles.container}>
      <button className={styles.btn}><img src={arrow} alt="Arrow symbol pointing downwards" onClick={() => {
        let projectsElem = document.getElementById('projects');
        projectsElem.scrollIntoView({ behavior: 'smooth'});
      }} /></button>
    </div>
  )
}
