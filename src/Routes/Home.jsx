import React from 'react'
import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {BiGitRepoForked} from 'react-icons/bi'
import { SlUserFollowing, SlUserFollow } from "react-icons/sl";
import { Helmet } from 'react-helmet-async';

function Home() {
 
   useEffect(()=>{
    fetch('https://api.github.com/users/Kennethtml')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])

  const[user,setUser]=useState(null)
  console.log(user)
  return (
    <>
    <Helmet>
        <title>My GitHub Portfolio</title>
        <meta name="description" content='My github profile'/>
        <link  rel="canonical" href="/"/>
    </Helmet>
      <div className="profile-container">
        <div className="profile">
          <div className="image">
            <img src={user?.avatar_url} alt="" />
          </div>
          <div className="profile-details">
            <h1 className="username">{user?.name}</h1>
            <p className="fullname">{user?.login}</p>
            {/* <p className="fullname">{user?.bio}</p> */}
            <p className="followers">
              <SlUserFollow />
              Followers: <span>{user?.followers}</span>
            </p>
            <p className="followers">
              <SlUserFollowing />
              Following: <span>{user?.following}</span>
            </p>
            <p className="public_repos">
              <BiGitRepoForked /> Public repos:{" "}
              <span>{user?.public_repos}</span>
            </p>
            <Link className="btn-link" to={"/repos"}>
              View repos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  

}

export default Home