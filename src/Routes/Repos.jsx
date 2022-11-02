import {Routes, Route } from "react-router-dom"
import ReposComponenet from "../componenets/ReposComponenet"
import RepoPage from "./RepoPage";

function Repos() {
  return (
    <main >
      <Routes>
        <Route index element={<ReposComponenet/>} />
        <Route path=":name" element={<RepoPage />} />
      </Routes>
    </main>
  );
}

export default Repos