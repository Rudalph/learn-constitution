import React from 'react'
import EachSection from './EachSection'
import curriculumProgressData from '../app/Data/curriculum';


const MiddleSection = () => {
  return (
    <div className='middle-section'> 
        <EachSection sectionData ={curriculumProgressData.sections[0]}/>
    </div>
  )
}

export default MiddleSection