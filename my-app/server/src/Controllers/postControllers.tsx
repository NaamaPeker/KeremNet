import { Request, Response } from 'express';
import { fetchAddNewPost, fetchAllAuthors, fetchAllPosts, fetchPostById, fetchPostsByAuthor } from '../Services/postService';
 import { v4 as uuidv4 } from 'uuid';

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await fetchAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: 'server failed to get posts' });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const post = await fetchPostById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: 'server failed to get post' });
  }
};


export const getPostsByAuthor = async (req: Request, res: Response) => {
  try {
    const author = (req.params.author);
    const post = await fetchPostsByAuthor(author);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: 'server failed to get posts' });
  }
};

export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const post = await fetchAllAuthors();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: 'server failed to get list of authors' });
  }
};

export const createNewPost = async (req: Request, res: Response) => {
  try {
    const newPost = req.body;

    if (!newPost.content || !newPost.author || newPost.id) {
      res.status(400).json({ error: 'Missing fields' });
    }

    newPost.id = uuidv4();
    newPost.date = new Date().toString();
    newPost.likeCount = 0;
    newPost.comments = [];

    const post = await fetchAddNewPost(newPost);
    res.status(201).json(post);
  }
  catch {
    res.status(500).json({ error: 'Failed to create new post' });
  }
};