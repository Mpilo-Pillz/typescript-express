import { Router, Request, Response, NextFunction } from "express";
import { get, controller, bodyValidator, post } from "./decorators";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

// function logger(req: Request, res: Response, next: NextFunction) {
//   console.log("request was made!!!");
//   next();
// }
@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    console.log("clicked");
    res.sendFile("login.html", { root: __dirname });
  }
  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === "test@one" && password === "mpilo") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
