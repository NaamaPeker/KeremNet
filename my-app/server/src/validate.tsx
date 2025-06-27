import { Request, Response, NextFunction } from "express";

export const validateIdParam = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "ID must be a number" });
  }
  else if(id.toString().length != 9)
  {
    return res.status(400).json({ error: "ID has to be 9 digits long" });
  }

  next();
};

