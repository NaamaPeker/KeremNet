import React from 'react';
import Comment from '../Comment/Comment';
import '../Comment/comments.css';

export type CommentType = {
  author: string;
  text: string;
  timestamp: string;
};

interface CommentSectionProps {
  comments: CommentType[];  
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <div>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map(({ author, text, timestamp }, index) => (
            <Comment key={index} author={author} text={text} timestamp={timestamp} />
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;