import { Router, Request, Response, NextFunction } from "express";
import { get, controller } from "./decorators";

@controller("/")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.sendFile("login.html", { root: __dirname });
  }
}
