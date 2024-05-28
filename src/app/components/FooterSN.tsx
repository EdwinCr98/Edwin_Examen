import React from 'react'
import Image from 'next/image'
import Face from '../../assets/logoface.jpg'
import Insta from '../../assets/logoInsta.png'
import Whatsap from '../../assets/logoWhat.jpg'


const FooterSN = () => {
    return (
        <footer className='footerSN__Principal'>
            <div><h2 className='footerSN__tittle'>Social Networks</h2></div>
            <div className='footerSN__container' >
                <a href="https://www.facebook.com/isaac.gomezlopez3" target="_blank" rel="noopener noreferrer">
                    <Image src={Face} alt="Facebook" className='social-media-icon' />
                </a>
                <a href="https://www.instagram.com/edwin_gl98/" target="_blank" rel="noopener noreferrer">
                    <Image src={Insta} alt="Instagram" className='social-media-icon' />
                </a>
                <a href="https://wa.me/50689160602" target="_blank" rel="noopener noreferrer">
                    <Image src={Whatsap} alt="WhatsApp" className='social-media-icon' />
                </a>
            </div>
        </footer>
    )
}

export default FooterSN
