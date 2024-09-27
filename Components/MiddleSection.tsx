import React from 'react'
import EachSection from './EachSection'
import curriculumProgressData from '../app/Data/curriculum';
import DropdownWithCallout from './DropdownWithCallout';


const MiddleSection = () => {
  return (
    <div className='middle-section'> 
        <EachSection sectionData ={curriculumProgressData.sections[0]}/>
        <div className="">
          <DropdownWithCallout/>
        </div>
    </div>
  )
}

export default MiddleSection