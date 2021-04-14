import { NextFunction, Request, Response } from "express";
import { get, controller, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return; // func is not returning anything but execution must stop
  }

  res.status(403);
  res.send("Not permitted");
}

@controller("")
export class RootContriler {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
              <div>
              <div>You are logged in</div>
              <a href="/auth/logout">Logout</a>
              </div>
              `);
    } else {
      res.send(`
          <div>
          <div>You Not are logged in</div>
          <a href="/auth/login">Login</a>
          </div>
          `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getPRotected(req: Request, res: Response) {
    res.send("Welcome to protected route logged in user");
  }
}
