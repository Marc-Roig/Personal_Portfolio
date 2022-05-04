import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';


function SocialMedia() {
  return (
    <div className='app__social'>
      <a 
        href='https://github.com/Marc-Roig'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div>
          <BsGithub />
        </div>
      </a>
      <a 
        href='https://www.linkedin.com/in/marc-roig-campos-295451109/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div>
          <BsLinkedin />
        </div>

      </a> 
    </div>
  )
}

export default SocialMedia