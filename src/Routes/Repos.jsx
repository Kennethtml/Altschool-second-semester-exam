import {Routes, Route } from "react-router-dom"
import ReposComponenet from "../componenets/ReposComponenet"
import RepoPage from "./RepoPage";

function Repos() {
  return (
    <div className="l">
      <Routes>
        <Route index element={<ReposComponenet/>} />
        <Route path=":name" element={<RepoPage />} />
      </Routes>
    </div>
  );
}

export default Repos