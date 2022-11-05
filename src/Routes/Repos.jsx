import {Routes, Route } from "react-router-dom"
import ReposComponenet from "../componenets/ReposComponenet"
import RepoPage from "./RepoPage";
import { Helmet } from "react-helmet-async";

function Repos() {
  return (
    <>
      <Helmet>
        <title>My GitHub Repos</title>
        <meta name="description" content="list of all of Kennethtml git hub repos" />
        <link rel="canonical" href="/repos" />
      </Helmet>
      <main>
        <Routes>
          <Route index element={<ReposComponenet />} />
          <Route path=":name" element={<RepoPage />} />
        </Routes>
      </main>
    </>
  );
}

export default Repos