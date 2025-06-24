import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/commentForm';
import './comments.css';

export type CommentType = {
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
          comments.map(({author, text, timestamp}, index) => (
            <Comment key={index} author={author} text={text} timestamp={timestamp} />
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
