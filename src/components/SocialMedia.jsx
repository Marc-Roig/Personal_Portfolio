import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';


function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
          <a 
            href='https://github.com/Marc-Roig'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub />
          </a>
        </div>
        <div>
            <a 
              href='https://www.linkedin.com/in/marc-roig-campos-295451109/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsLinkedin />
            </a> 
        </div>
    </div>
  )
}

export default SocialMedia