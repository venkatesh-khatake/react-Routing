import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
        <Outlet/>
      <h1>Dashboard Page</h1>

    </div>
  )
}

export default Dashboard
