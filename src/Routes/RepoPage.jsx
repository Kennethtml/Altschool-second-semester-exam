import React from 'react'
import { useEffect,useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ReposContext } from '../reposContext'

function RepoPage() {
const params=useParams()
// const {repos}=useContext(ReposContext)
// const selectedRepo=repos.filter((repo)=>repo.name===params.name)[0]
// console.log(selectedRepo)
const[selectedRepo,setSelectedRepo]=useState([])

useEffect(()=>{
fetch('https://api.github.com/repos/Kennethtml/'+params.name)
.then((data)=>data.json())
.then((res)=>setSelectedRepo(res))
},[])
  return (
    <div>,
        <h1>{selectedRepo.name}</h1>
        <a href={selectedRepo.html_url}> go to repo</a>
    </div>
  )
}

export default RepoPage