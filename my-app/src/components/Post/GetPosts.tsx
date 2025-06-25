import React, { useEffect, useState } from "react";
import Post from "./post";
import mockPosts from "./posts.json";
import { CommentType } from "../CommentSection/CommentSection";

export interface PostData {
  id: number;
  content: string;
  author: string;
  date: string; 
  comments: CommentType[];
  likeCount: number;
}

function GetPosts() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      await new Promise(res => setTimeout(res, 500));
      setPosts(mockPosts);
    };

    loadPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
        key={post.id}
        author={post.author}
        content={post.content}
        date={post.date}
        comments={post.comments}
        likeCount={post.likeCount}/>
      ))}
    </div>
  );
};

export default GetPosts;
