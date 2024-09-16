import React from 'react'
import UnitIndicator from './UnitIndicator'
import Unit from './Unit'

const EachSection = () => {
  return (
    <div className="section">
            <div className="UnitIndicator mt-10 px-5  sticky top-10 w-[100%] z-10">
                <UnitIndicator section={1} unit={1} title={'Pair letters and sounds'}/>
            </div>
            <div className="flex flex-col">
                <div id='unit1' className='mt-[60px]'>
                    <Unit chapters={5} unit={1} unitName={'Pair letters and sounds '} completed={2}/>
                </div>
                <div id='unit2' className=''>
                    <Unit chapters={5} unit={2} unitName={'Pair letters and sounds '} completed={0}/>
                </div>
                <div id='unit3' className=''>
                    <Unit chapters={5} unit={3} unitName={'Pair letters and sounds '} completed={0}/>
                </div>
                <div id='unit4' className=''>
                    <Unit chapters={6} unit={4} unitName={'Pair letters and sounds '} completed={0}/>
                </div>
            </div>
        </div>
  )
}

export default EachSection