import React from 'react'
import { Link } from 'react-router-dom'

const CarNavi = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          EV Charging Booking
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Add Booking
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/view">
                View Bookings
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default CarNavi