import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';


const header = () => {
  return (
    <div className='flex  justify-center items-center '>
       <TypeWriterEffect
   textStyle={{
    color: '#DBFDC8',
    fontWeight: 500,
    fontSize: '3rem',
  }}

startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'CHuksTheDev Dictionary',
          'Get the meaning of any word ',
          'FInd it',
          'Use it',
          'Peace out',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
        multiTextLoop={true}
      />


    </div>
  )
}

export default header
