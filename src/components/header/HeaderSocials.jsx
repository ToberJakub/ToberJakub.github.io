import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'

const HeaderSocials = () => {
  return ( 
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jakub-tober-b543b9242/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/ToberJakub/" target="_blank" rel="noreferrer"><GoMarkGithub /></a>
    </div>
  ) 
}

export default HeaderSocials 