import React from 'react'

function Nav() {
  return (
    <nav className='flex justify-between'>
        <div>
            <span>malakus <span>&gt;</span></span>
            </div>

            <div className="flex gap-4">
              <a href="">Thoughts</a>
              <a href="">Experiments</a>
              <a href="">Work</a>
        </div>
    </nav>
  )
}

export default Nav