import React from 'react'
import Image from 'next/image'
import principal from '../../assets/principal.jpeg'

//Esta parte contiene la etiqueta bod, donde se almacena las clases de informacion general(uso de metodologia ben)//
const About = () => {
    return (
        <div className='bod' >
            <figure>
                <Image className='about__ftPerfil' alt='foto perfil' src={principal} />
            </figure>
            <article>
                <h2 className='about__tittle'>
                    Personal description
                </h2>
                <p className='about__body'>
                    Hello, my name is Edwin Gomez Lopez, I am 25 years old. <br />
                    I am a student studying business computing at the UCR South Campus,
                    <br />
                    I like creating web pages and developing applications.
                    <br /> I am a fan of anime and Nordic culture.
                    <br />
                    In addition to this, I have knowledge in different aspects of computing.
                </p>
                <a href="https://www.linkedin.com/in/edwin-isaac-g%C3%B3mez-l%C3%B3pez-035610162/" target="_blank" rel="noopener noreferrer">
                    <button className='about__buttonLinkedin' type='button'>Linkedin</button>
                </a>
                <a href="//drive.google.com/file/d/11K0tC6R39q4fQath3S4zFtcb-8y-OAG1/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <button className='about__buttonCV' type='button'>CV</button>
                </a>

            </article>
        </div>
    )
}

export default About
