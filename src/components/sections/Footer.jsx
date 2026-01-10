import React from 'react'

function Footer() {
  return (

    <footer className="footer py-20 border-t border-gray-200/60 ">
        <p className="text-center">Copyright &copy; Malakus - {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer