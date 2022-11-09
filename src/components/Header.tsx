import React from 'react'
import Logo from '../../public/logo.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex justify-center pt-6 pb-6 items-center bg-amber-50'>
      <Image src={Logo} alt="Ramp logo" />
    </header>
  )
}

export default Header