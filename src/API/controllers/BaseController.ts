import express from "express";

export default class BaseController {
  constructor() {}

  public responseOk<TPayload>(response: express.Response, payload: TPayload) {
    response.status(200).json(payload);
  }

  public response500(response: express.Response) {
    response.status(500).json({
      message: "System is not responding. Please be patient it will be back soon.",
    });
  }
}
