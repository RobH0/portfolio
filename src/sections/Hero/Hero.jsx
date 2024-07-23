import styles from './HeroStyles.module.css';
import profileImg from '../../assets/profilePic.jpg';
import githubIcon from '../../assets/icons8-github.svg';
import linkedinIcon from '../../assets/icons8-linkedin.svg';
import ArrowComponent from '../../interactive/ArrowComponent.jsx';

function Hero() {
  return (
    <section className={styles.container}>
        
        <div className={styles.profileDiv}>
            <img src={profileImg} alt="Robert's Profile Picture"/>
        </div>
        <div className={styles.heroText}>
            <h1>
                Robert
                <br />
                Holdsworth
            </h1>
            <h2>FullStack Developer</h2>
            <div className={styles.socials}>
                <a className={styles.socialIcon} href="https://github.com/RobH0" target='_blank'>
                    <img src={githubIcon} alt="GitHub Icon" />
                </a>
                <a className={styles.socialIcon} href="https://www.linkedin.com/in/robert-holdsworth/" target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
            </div>
            <p>
                Dedicated and detail-oriented Software Engineer with previous experience in IT and Information Security.
            </p>
        </div>
        
        <ArrowComponent />
    </section>
  )
}

export default Hero