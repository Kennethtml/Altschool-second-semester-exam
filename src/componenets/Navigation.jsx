import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <nav>
      <div className="navigation-bar">
        <Link to='/'>
        <h1>
          MyGitH
          <span>
            {" "}
            <FaGithub />
          </span>
          b
        </h1>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation