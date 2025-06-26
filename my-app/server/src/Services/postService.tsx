import path from 'path';
import fs from 'fs';

const postsPath = path.join(__dirname, '../../../client/src/components/Post/posts.json');

export const fetchAllPosts = async () => {
  const file = fs.readFileSync(postsPath, 'utf-8');
  return JSON.parse(file);
};

export const fetchPostById = async (id: number) => {
  const file = fs.readFileSync(postsPath, 'utf-8');
  const posts = JSON.parse(file);

  return posts.filter((post: any) => post.id === id);
};

export const fetchPostsByAuthor = async (author: string) => {
  const file = fs.readFileSync(postsPath, 'utf-8');
  const posts = JSON.parse(file);

  return posts.filter((post: any) => post.author === author);
};

export const fetchAllAuthors = async () => {
  const file = fs.readFileSync(postsPath, 'utf-8');
  const posts = JSON.parse(file);
  const allAuthors = posts.map((post: any)=> post.author);
  const diffAuthors = [...new Set(allAuthors)];
  
  return diffAuthors;
};


