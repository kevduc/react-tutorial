import React from 'react'

const NavBar = (props: any) => {
  return (
    <nav className="navbar navbar-light bg-light d-flex flex-row justify-content-start">
      <a className="navbar-brand" href="/">
        Navbar
        <span className={`badge badge-pill badge-secondary ml-2`}>{props.numItems}</span>
      </a>
    </nav>
  )
}

export default NavBar
