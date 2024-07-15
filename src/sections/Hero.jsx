import styles from './HeroStyles.module.css';
import profileImg from '../assets/profilePic.jpg'

function Hero() {
  return (
    <section className='hero-section'>
        <div className=''>
            <img src={profileImg} alt="Robert's Profile Picture"/>
        </div>
        <div className='hero-text'>
            <h1>Robert Holdsworth</h1>
            <h2>FullStack Developer</h2>
        </div>
    </section>
  )
}

export default Hero