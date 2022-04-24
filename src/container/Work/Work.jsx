import './Work.scss'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import { FilterButtons } from './components/FilterButtons';
import { WorkItem } from './components/WorkItems';

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, []);

  const handleWorkFilter = (filter) => {

    setActiveFilter(filter);
    
    // Animation to hide items
    setAnimateCard([{y: 100, opacity: 0}])

    setTimeout(() => {

      // Animation to show items again
      setAnimateCard([{y: 0, opacity: 1}]);

      if (filter === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter(work => work.tags.includes(filter)));
      }
    }, 500)
  }

  return (
    <>
      <h2 className='head-text'> 
        My Personal 
        <span> Projects </span>
        Section 
      </h2>

      <FilterButtons {...{activeFilter, handleWorkFilter}} />

      <motion.div
        animate={animateCard}
        transition={{duration:0.5, delayChildren: 0.5}}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => <WorkItem key={index} {...{work}}/>)}
      </motion.div>

      

    </>
  )
}

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');