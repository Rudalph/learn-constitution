import React from 'react'
import UnitIndicator from './UnitIndicator'
import Unit from './Unit'

const MiddleSection = () => {
  return (
    <div className='middle-section relative'>
        <div className="UnitIndicator mt-10 px-5  sticky top-10 w-[100%] z-10">
            <UnitIndicator section={1} unit={1} title={'Pair letters and sounds'}/>
        </div>
        <div className="flex flex-col">
            <div className='mt-[180px]'>
                <Unit levels={5} unit={1} nextTopic={'Pair letters and sounds '}/>
            </div>
            <div className=''>
                <Unit levels={5} unit={2} nextTopic={'Pair letters and sounds '}/>
            </div>
        </div>
    </div>
  )
}

export default MiddleSection