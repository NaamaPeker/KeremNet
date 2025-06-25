import "../src/components/Post/post.css"
import ApplicationLayout from "../src/components/applicationLayout/ApplicationLayout";
import {Routes, Route} from "react-router-dom";
import "../src/components/Post/post.css"
import Posts from "./components/Post/GetPosts";
import HomePage from "./components/applicationLayout/HomePage";

function App(){
  return (
  <div className="space">
  <ApplicationLayout>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/posts" element={<Posts/>}/>  
    </Routes>
    </ApplicationLayout>
</div>
  );
}

export default App;
