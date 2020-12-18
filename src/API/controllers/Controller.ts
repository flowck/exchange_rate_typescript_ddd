import express from "express";

export default class BaseController {
  constructor() { }

  public responseOk<TPayload>(response: express.Response, payload: TPayload) {
    response.status(200).json(payload);
  }
}