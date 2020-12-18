import express, { ErrorRequestHandler } from "express";
import { ValidationError } from "express-validation";

export default (err: ErrorRequestHandler, request: express.Request, response: express.Response, next: express.NextFunction) => {
  console.log('Hello');
  if (err instanceof ValidationError) {
    return response.status(err.statusCode).json(err);
  }

  return response.status(400).json(err);
}