import React from 'react';
import './comments.css';

interface CommentProps {
  author: string;
  text: string;
  timestamp: Date;
}

const Comment: React.FC<CommentProps> = ({ author, text, timestamp }) => {
  return (
    <div className="comment-box">
      <p className="comment-meta">
        <strong>{author}</strong> - <small>{new Date(timestamp).toLocaleString()}</small>
      </p>
      <p className="comment-text">{text}</p>
    </div>
  );
};

export default Comment;
