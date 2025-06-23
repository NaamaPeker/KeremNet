import React from 'react';
import "./post.css"

interface PostProps {
  content: string;
  comments: number;
  likes: number;
  author: string;
  date?:Date;
}

const Post: React.FC<PostProps> = ({content, comments, likes, author, date }) => {
  return (
    <div className="post-container">
      <div>
        <span className="author">{author}</span>
        <span className="icon save">•••</span>
      </div>

      <div className="actions">
        <span className= "contect">{content}</span>
      </div>
      <div className="actions">
        <span className="icon">❤️</span>
        <span className="icon">💬</span>
        <span className="icon">✈️</span>
        <span className="icon save">🔖</span>
      </div>

      <div className="likes">
        <strong>{likes}</strong>
      </div>

      <div className="caption">
        <strong>naama_something</strong> nice day!! ╰(*°▽°*)╯
      </div>

      <div className="comments">
        <span className="view-comments">view all {comments} comments</span>
        <div className="coment">
          <strong>naama_peker</strong> gooddd
        </div>
        <div className="coment">
          <strong>naama666</strong> niceeee
        </div>
      </div>

      <div className="time">{date?.toDateString()}</div>
    </div>
  );
};

export default Post;