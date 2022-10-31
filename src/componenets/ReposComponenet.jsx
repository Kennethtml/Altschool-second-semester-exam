import React from "react";
import { useState, useEffect,useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReposContext } from "../reposContext";
import {FaLongArrowAltLeft} from 'react-icons/fa'


function ReposComponenet() {


  const navigate = useNavigate();
  const {repos}=useContext(ReposContext)
  console.log(repos);

  return (
    <div className="repos">
      <button onClick={() => navigate(-1)}>
        <FaLongArrowAltLeft />
        
      </button>
      {repos?.map((repo) => {
        return (
          <Link className="repo" to={repo.name}>
            <p className="name">{repo.name}</p>
            <p className="description">{repo.description}</p>
            {/* <p className="description">{repo.description}</p> */}
            <p className="language">{repo.language}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ReposComponenet;
