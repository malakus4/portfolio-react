import React from 'react'

function About() {
  return (
    <div className='py-6'>
        <h2 className='py-2'>About Me</h2>

        <div className='flex flex-col justify-center '>

            <div className='flex flex-col justify-between items-center  aspect-video  bg-gray-200'>
                <p className="pt-10 mt-10 ">
                    Born. Didn't do too much that year.
                </p>

                <p>|I|I|I|I|I|I|I|I|I|I|I|I|I|I|I|I|I|I|I</p>
            </div>

            <p className='text-center py-2'>Scrub the timeline</p>

        </div>

    </div>
  )
}

export default About