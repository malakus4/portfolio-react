import React from 'react'

function Nav() {
  return (
    <nav className='flex justify-between'>
        <div>
            <span>malakus <span>&gt;</span></span>
            </div>

            <ul className="flex gap-4">

              <a href="../components/pages/Hometest.jsx"><li>Thoughts</li></a>

              <a href="https://amazon.com"><li>Experiments</li></a>
              
              <a href="https://amazon.com"><li>Work</li></a>
        </ul>
    </nav>
  )
}

export default Nav