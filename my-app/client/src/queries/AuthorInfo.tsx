import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from '../components/Post/post';

function AuthorPosts() {
  const { author } = useParams();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${author}`)
      .then(res => {
        if (!res.ok) throw new Error('No posts found');
        return res.json();
      })
      .then(data => setPosts(data))
      .catch(err => {
        console.error(err);
        setPosts([]);
      });
  }, [author]);

  return (
    <div>
      <h2>Posts by {author}</h2>
      {posts.length === 0 ? (
        <p>No posts found for this author.</p>
      ) : (
        posts.map(post => (
          <Post
        key={post.id}
        author={post.author}
        content={post.content}
        date={post.date}
        comments={post.comments}
        likeCount={post.likeCount}/>
        ))
      )}
    </div>
  );
}

export default AuthorPosts;