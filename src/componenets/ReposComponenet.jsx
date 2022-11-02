import React from "react";
import { useState, useEffect,useContext} from "react";
import {  Link } from "react-router-dom";
import { ReposContext } from "../reposContext";
import ReturnButton from "./ReturnButton";



function ReposComponenet() {
 

  const {repos}=useContext(ReposContext)
  //extract the repos array by consuming the context


  //set up pagination
  let perPage=5
  const[currentPage,setCurrentPage]=useState(1)
  let startingIndex=currentPage *perPage -perPage
  let endingIndex=currentPage *perPage
  let currentRepos=repos.slice(startingIndex,endingIndex)
  let toTal = Math.ceil(repos.length / perPage);


  return (
    <div className="repos">
        <ReturnButton/>
     
      {currentRepos?.map((repo) => {
        return (
          <Link className="repo" to={repo.name}>
            <p className="name">{repo.name}</p>
            <p className="description">{repo.description}</p>
            {/* <p className="description">{repo.description}</p> */}
            <p className="language">{repo.language}</p>
          </Link>
        );
      })}

      <div className="pagination">
        <div className="buttons">
          <button
            className="previous"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage <= 1}
            aria-disabled={currentPage <= 1}
          >
            previous
          </button>
          <button
            className="previous"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage >= toTal}
            aria-disabled={currentPage >= toTal}
          >
            next
          </button>
        </div>
        <div className="pages">
          {new Array(toTal).fill().map((_, idx) => {
            return (
              <button
                style={
                  currentPage === idx + 1
                    ? { backgroundColor: "#000", color: "#fff" }
                    : {}
                }
                onClick={() => setCurrentPage(idx + 1)}
                key={idx}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ReposComponenet;
