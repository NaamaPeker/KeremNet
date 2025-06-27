import "../src/components/Post/post.css"
import ApplicationLayout from "../src/components/applicationLayout/ApplicationLayout";
import {Routes, Route} from "react-router-dom";
import "../src/components/Post/post.css"
import Posts from "./components/Post/GetPosts";
import HomePage from "./components/applicationLayout/homepage";
import PostInfo from "./queries/PostInfo";
import AuthorInfo from "./queries/AuthorInfo";
import AllAuthors from "./queries/AllAuthors";
import CheckServer from "./queries/CheckServer";
import AddPost from "./components/Post/addPost";

function App(){
  return (
  <div className="space">
  <ApplicationLayout>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/posts" element={<Posts/>}/>   
    <Route path="/post/:id" element={<PostInfo/>}/>
    <Route path="/posts/:author" element={<AuthorInfo/>}/>
    <Route path="/authors" element={<AllAuthors/>}/>
    <Route path="/Running" element={<CheckServer/>}/>
    <Route path="/addPost" element={<AddPost/>}/>
    </Routes>
    </ApplicationLayout>
</div>
  );
}

export default App;
