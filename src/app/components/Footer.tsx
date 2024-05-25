import React from 'react'


const Footer = () => {
    return (
        <footer className='footer__Principal'>
            <div className='footer__container' >
                <article className='footer__title'>
                    <h2>Book a call with me</h2>
                    <p className='footer__body'>
                        I would like to be able to talk and help you with your different projects. <br />
                        The first step is for us to analyze together during a free consultation what your project is. <br />
                        Then we can move forward and look for the best way of development.<br />
                    </p>
                </article>
                <a href="mailto:isaacglgomez98@hotmail.com?subject=Booking%20a%20Call&body=Hi%20there,%20I%20would%20like%20to%20schedule%20a%20call."> 
                <button className='footer__button' type="button">Call of me</button>
                </a>
            </div>
        </footer>
    )
}

export default Footer
