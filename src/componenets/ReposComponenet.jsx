import React from "react";
import { useState, useEffect,useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReposContext } from "../reposContext";

function ReposComponenet() {


  const navigate = useNavigate();
  const {repos}=useContext(ReposContext)

  return (
    <div className="repos">
      <button onClick={() => navigate(-1)}>back</button>
      {repos?.map((repo) => {
        return (
          <Link className="repo" to={repo.name}>
            <h1>{repo.name}</h1>
            <h4>{repo.owner.login}</h4>
            {/* <p className="description">{repo.description}</p> */}
            <p className="language">{repo.language}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ReposComponenet;
