import React, { useState } from 'react';
import Comment from './Comment';
import CommentForm from './commentForm';
import './comments.css';

type CommentType = {
  author: string;
  text: string;
  timestamp: Date;
};

const CommentSection = () => {
  const [comments, setComments] = useState<CommentType[]>([]);

  const addComment = (newComment: CommentType) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <CommentForm onSubmit={addComment} />
      <div>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <Comment key={index} author={comment.author} text={comment.text} timestamp={comment.timestamp} />
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
