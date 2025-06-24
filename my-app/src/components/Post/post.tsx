import React, { useState } from "react";
import CommentForm from "../CommentForm/commentForm";
import Comment from "../Comment/Comment";
import "./post.css";
import { CommentType } from "../CommentSection/CommentSection";

interface PostProps {
  content: string;
  author: string;
  date: Date;
}

const Post: React.FC<PostProps> = ({ content, author, date }) => {
  const [showComments, setShowComments] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleComments = () => setShowComments(!showComments);
  const toggleCommentForm = () => setShowCommentForm(!showCommentForm);

  const handleAddComment = (newComment: CommentType) => {
    setCommentList(prev => [...prev, newComment]);
    setShowCommentForm(false);
    setShowComments(true);
  };

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => Math.max(prev - 1, 0));
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post-container">
      <div>
        <span className="author">{author}</span>
        <span className="icon save">•••</span>
      </div>

      <div className="actions">
        <span className="contect">{content}</span>
      </div>

      <div className="actions">
        <button
          className="icon"
          onClick={handleLike}
          style={{color: liked ? "red" : "black" }}
        >
          ❤️
        </button>
        <button
          className="icon"
          onClick={toggleCommentForm}
        >
          💬
        </button>
      </div>

      <div className="likes">
        <strong>{likeCount}</strong> {likeCount === 1 ? "like" : "likes"}
      </div>

      <div className="comments">
        <span
          className="view-comments"
          onClick={toggleComments}
        >
          {showComments
            ? "Hide comments"
            : `View all ${commentList.length} comments`}
        </span>

        {showComments && ( <div>
            {commentList.map((currComment, index) => (
              <Comment
                key={index}
                author={currComment.author}
                text={currComment.text}
                timestamp={currComment.timestamp}
              />
            ))}
            {}
          </div>
        )}
      </div>

      {showCommentForm && <CommentForm onSubmit={handleAddComment} />}

      <div className="time">{date.toDateString()}</div>
    </div>
  );
};

export default Post;
