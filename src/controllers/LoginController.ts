import { Router, Request, Response, NextFunction } from "express";
import { get, controller } from "./decorators";

// function logger(req: Request, res: Response, next: NextFunction) {
//   console.log("request was made!!!");
//   next();
// }
@controller("/")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    console.log("clicked");
    res.sendFile("login.html", { root: __dirname });
  }
}
