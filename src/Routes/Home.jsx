import React from 'react'
import {useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import {BiGitRepoForked} from 'react-icons/bi'
import { SlUserFollowing, SlUserFollow } from "react-icons/sl";
import { Helmet } from 'react-helmet-async';
import { ReposContext } from '../reposContext';

function Home() {
 

    const{user}=useContext(ReposContext)
   useEffect(()=>{
    fetch('https://api.github.com/users/'+user)
    .then(res=>res.json())
    .then(data=>setUserData(data))
  },[])

  const[userData,setUserData]=useState(null)
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
            <img src={userData?.avatar_url} alt="" />
          </div>
          <div className="profile-details">
            <h1 className="username">{userData?.name}</h1>
            <p className="fullname">{userData?.login}</p>
            {/* <p className="fullname">{user?.bio}</p> */}
            <p className="followers">
              <SlUserFollow />
              Followers: <span>{userData?.followers}</span>
            </p>
            <p className="followers">
              <SlUserFollowing />
              Following: <span>{userData?.following}</span>
            </p>
            <p className="public_repos">
              <BiGitRepoForked /> Public repos:{" "}
              <span>{userData?.public_repos}</span>
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