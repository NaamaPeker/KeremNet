import React, { useState } from 'react';
import './comments.css';

type CommentFormProps = {
  onSubmit: (comment: { author: string; text: string; timestamp: Date }) => void;
};

const CommentForm = ({ onSubmit }: CommentFormProps) => {
  const [author, setAuthor] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author.trim() && commentText.trim()) {
      onSubmit({ author, text: commentText, timestamp: new Date() });
      setAuthor('');
      setCommentText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Your Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Write your comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
