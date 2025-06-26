import { Request, Response } from 'express';
import { fetchAllAuthors, fetchAllPosts, fetchPostById, fetchPostsByAuthor } from '../Services/postService';

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

export const checkServerAvailable = (req: Request, res: Response) => {

  res.status(200).json({ status: 'ok', message: 'Server is running' });
};

