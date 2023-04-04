import { NextFunction, Request, Response } from "express";

const createAuthMiddleware =
  () => async (req: Request, _: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    delete req.headers.authorization;
    req.headers.Authorization = token;
    next();
  };

export default createAuthMiddleware;
