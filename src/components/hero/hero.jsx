import './hero.scss';
import aboutImage from '../../assets/images/imgmauro.webp'
const Hero = () => {
    return (
        <>
        <section class="about" id="about">
            <div className='container--space'>
                <h1 className='typed titleAbout'>Hi! I’m Mauricio Santos Rebolledo</h1>
                <p className='descAbout'>I design and code beautifully simple things, and I love what I do.</p>
                <img src={aboutImage} alt="Image Mauricio" className='imgAbput' />
            </div>
        </section>
        </>
    )
}

export default Hero