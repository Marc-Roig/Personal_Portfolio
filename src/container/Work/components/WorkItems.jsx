import './../Work.scss';

import { urlFor, client } from "../../../client"
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';


const LogoItem = ({ logo, link }) => {
    
}

export const WorkItem = ({work}) => {

    return (
        
        <div className='app__work-item app__flex'>
            <div className='app__work-img app__flex'>
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                    whileHover={{opacity: [0, 1]}}
                    transition={{duration: 0.25, type: 'easeInOut', staggerChildren: 0.5}}
                    className='app__work-hover app__flex'
                >
                    <a href={work.projectLink} target='_blank' rel='noopener noreferrer'>
                    <motion.div
                        whileHover={{scale: [1, 0.9]}}
                        transition={{duration: 0.25}}
                        className='app__flex'
                    >
                        <AiFillEye className='app__icon' />
                    </motion.div>
                    </a>

                    <a href={work.codeLink} target='_blank' rel='noopener noreferrer'>
                    <motion.div
                        whileHover={{scale: [1, 0.9]}}
                        transition={{duration: 0.25}}
                        className='app__flex'
                    >
                        <AiFillGithub className='app__icon' />
                    </motion.div>
                    </a>

                </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags?.length ? work.tags[0] : ""}</p>
              </div>
            </div>

        </div>
          
    )
}