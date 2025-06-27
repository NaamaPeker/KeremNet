import path from 'path';
import fs from 'fs';

const postsPath = path.join(__dirname, '../../../client/src/components/Post/posts.json');


export interface PostData {
  id: number;
  content: string;
  author: string;
  date: string; 
  comments: CommentType[];
  likeCount: number;
}

export interface CommentType {
  author: string;
  text: string;
  timestamp: string;
}

export const fetchAllPosts = async () => {
  const file = fs.readFileSync(postsPath, 'utf-8');
  return JSON.parse(file);
};

export const fetchPostById = async (id: number) => {
  const file = fs.readFileSync(postsPath, 'utf-8');
  const posts = JSON.parse(file);

  const post = posts.find((post: any) => post.id === id);

  if (post && !post.comments) {
    post.comments = [];
  }

  return post;
};

export const fetchPostsByAuthor = async (author: string) => {
  const file = fs.readFileSync(postsPath, 'utf-8');
  const posts = JSON.parse(file);

  return posts.filter((post: any) => post.author === author);
};

export const fetchAllAuthors = async () => {
  const file = fs.readFileSync(postsPath, 'utf-8');
  const posts = JSON.parse(file);
  const allAuthors = posts.map((post: any) => post.author);
  const diffAuthors = [...new Set(allAuthors)];
  
  return diffAuthors;
};

export const fetchAddNewPost = async(newPost: PostData) => {
  const file = fs.readFileSync(postsPath, 'utf-8');
  const posts = JSON.parse(file);

  posts.push(newPost);
  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2), 'utf-8');

  return newPost;
} 