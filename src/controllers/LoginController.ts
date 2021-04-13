import { Router, Request, Response, NextFunction } from "express";
import { get } from "./decorators/routes";
import { controller } from "./decorators/controller";

@controller("/")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.sendFile("login.html", { root: __dirname });
  }
}
