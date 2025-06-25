import React, { useEffect, useState } from "react";
import Post from "./components/Post/post";
import mockPosts from "./posts.json";
import "../src/components/Post/post.css"
import ApplicationLayout from "../src/components/applicationLayout/ApplicationLayout";

interface PostData {
  content: string;
  author: string;
  date: string; 
}

function App() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      await new Promise(res => setTimeout(res, 500));
      setPosts(mockPosts);
    };

    loadPosts();
  }, []);
      

  return (
    <div className="space">
  <ApplicationLayout>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        posts.map(({content,author,date}) => (
          <Post
            content={content}
            author={author}
            date={new Date(date)}
          />
        ))
      )}
      </ApplicationLayout>
    </div>
  );
}

export default App;
