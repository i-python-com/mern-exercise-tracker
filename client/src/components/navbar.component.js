import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    const collapsed = this.state.collapsed
    const classToggleBtn = collapsed
      ? 'navbar-toggler collapsed'
      : 'navbar-toggler'
    const classNavbar = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show'

    return (
      <nav
        className="navbar navbar-dark navbar-expand-md"
        style={{ backgroundColor: '#2490D9' }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            ExcerTracker
          </Link>
          <button
            onClick={this.toggleNavbar}
            className={classToggleBtn}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={classNavbar} id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Exercises
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Exercise Log
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">
                  Create User
                </Link>
              </li>
              <li className="navbar-item">
                <a
                  target="_blank"
                  className="nav-link ml-auto"
                  rel="noopener noreferrer"
                  href="https://github.com/i-python-com"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
