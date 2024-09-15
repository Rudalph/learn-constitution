import React from 'react'
import UnitIndicator from './UnitIndicator'

const MiddleSection = () => {
  return (
    <div className='middle-section relative'>
        <div className="UnitIndicator mt-10 px-5 absolute top-0 w-[100%]">
            <UnitIndicator section={1} unit={1} title={'Pair letters and sounds'}/>
        </div>
    </div>
  )
}

export default MiddleSection