import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className="navigation">
        <Link to='/'>
        <h1>
          MyGitH
          <span>
          
            <FaGithub />
          </span>
          b
        </h1>
        </Link>
      

        <Link to={"/error-boundary"} classNameerror-link>test error boundary</Link>
      </div>
    </nav>
  );
}

export default Navigation