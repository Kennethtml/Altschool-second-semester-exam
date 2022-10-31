import React from 'react'
import { FaGithub } from "react-icons/fa";

function Navigation() {
  return (
    <nav>
      <div className="navigation-bar">
        <h1>
          MyGitH
          <span>
            {" "}
            <FaGithub />
          </span>
          b
        </h1>
      </div>
    </nav>
  );
}

export default Navigation