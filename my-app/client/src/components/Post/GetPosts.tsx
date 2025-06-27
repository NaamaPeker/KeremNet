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

function Posts() {
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
    {posts.map(({ id, author, content, date, comments, likeCount }) => (
      <Post
        id={Number(id)}
        author={author}
        content={content}
        date={date}
        comments={comments}
        likeCount={likeCount}
      />
    ))}
  </div>
);
};

export default Posts;
