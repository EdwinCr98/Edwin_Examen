import React from 'react'
import Image from 'next/image'
import logo from '../../assets/lolo2.png'

//Esta parte contiene la etiqueta nav, donde se almacena las clases de presentacion(uso de metodologia ben)//
const Header = () => {
  return (
    <nav className='nav'>
       <button className='nav__buttonLogo'
        type='button'>
        <Image className='nav__imgLogo' alt='logo web' src={logo} />
      </button>
      <p className='nav__textTitle'>Edwin Web Portfolio</p>   
      <button className='nav__buttonLogo2'
        type='button'>
        <Image className='nav__imgLogo' alt='logo web' src={logo} />
      </button>   
    </nav>
  )
}

export default Header
