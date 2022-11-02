import React from 'react'
import { useEffect,useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ReturnButton from '../componenets/ReturnButton'
import { ReposContext } from '../reposContext'

function RepoPage() {
const params=useParams()
const[selectedRepo,setSelectedRepo]=useState([])
const[language,setLanguage]=useState(null)

useEffect(()=>{
fetch('https://api.github.com/repos/Kennethtml/'+params.name)
.then((data)=>data.json())
.then((res)=>setSelectedRepo(res))
},[language])
useEffect(() => {
  fetch("https://api.github.com/repos/Kennethtml/" + params.name +'/languages')
    .then((data) => data.json())
    .then((res) => setLanguage(res));
}, []);

function setLanguagepercentage(langs){
  const arrayLangs = Object.entries(langs);
  const total=arrayLangs.reduce((acc,item)=>{
    return  acc + parseInt(item[1])
  },0)
  const percent=arrayLangs.reduce((acc,item)=>{
      return [...acc, { [item[0]]: Math.floor((item[1] / total) * 100) }];
  },[])


  return percent
}

console.log(selectedRepo)
let languages=language&&setLanguagepercentage(language)
console.log(languages);
  return (
    <main className='selected-repo'>,
        <ReturnButton/>
        <h1>{selectedRepo.name}</h1>
        <h4>{selectedRepo.owner?.login}</h4>
        <p className="repo-descripion">
            {selectedRepo.description}
        </p>
        <p className="created">
            {selectedRepo.created_at}
        </p>
        <p className="size">Repo size: {selectedRepo.size} kb</p>
        <p className="languages">
            {languages?.map((language)=>{
             return (   <p key={Object.keys(language)[0]}>
               
                <span>{Object.keys(language)[0]}</span>
               
                
                 <span>{Object.values(language)[0]+'%'}</span>
                 <br />
                </p>)
})}
        </p>
        <a className='btn' href={selectedRepo.html_url}> go to repo</a>
    </main>
  )
}

export default RepoPage