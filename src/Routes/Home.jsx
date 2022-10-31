import React from 'react'
import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

function Home() {
 
   useEffect(()=>{
    fetch('https://api.github.com/users/Kennethtml')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])

  const[user,setUser]=useState(null)
  console.log(user)
  return (
    <div className="profile-container">
      <div className="profile">
        <div className="image">
          <img src={user?.avatar_url} alt="" />
        </div>
        <div className="profile-details">
          <h1 className="username">{user?.name}</h1>
          <p className="fullname">{user?.login}</p>
          {/* <p className="fullname">{user?.bio}</p> */}
          <p className="followers">Followers: {user?.followers}</p>
          <p className="followers">Followers: {user?.following}</p>
          <p className="public_repos">Public repos: {user?.public_repos}</p>
          <Link className="btn-link" to={"/repos"}>
            View repos
          </Link>
        </div>
      </div>
    </div>
  );
  

}

export default Home