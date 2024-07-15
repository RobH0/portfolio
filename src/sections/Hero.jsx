import styles from './HeroStyles.module.css';
import profileImg from '../assets/profilePic.jpg'
import githubIcon from '../assets/icons8-github.svg'
import linkedinIcon from '../assets/icons8-linkedin.svg'
import arrow from '../assets/down-arrow-5-svgrepo-com.svg'

function Hero() {
  return (
    <section className='hero-section'>
        <div className=''>
            <img src={profileImg} alt="Robert's Profile Picture"/>
        </div>
        <div className='hero-text'>
            <h1>
                Robert
                <br />
                Holdsworth
            </h1>
            <h2>FullStack Developer</h2>
            <div className={styles.socials}>
                <a href="https://github.com/RobH0" target='_blank'>
                    <img src={githubIcon} alt="GitHub Icon" />
                </a>
                <a href="https://www.linkedin.com/in/robert-holdsworth-771911148/" target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vel quis laboriosam ex placeat esse obcaecati. Porro non molestiae animi!
            </p>
        </div>
        <div class="arrow-bounce">
            <img src={arrow} alt="Arrow symbol pointing downwards" />
        </div>
    </section>
  )
}

export default Hero