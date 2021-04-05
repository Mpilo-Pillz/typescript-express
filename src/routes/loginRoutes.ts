import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.sendFile("login.html", { root: __dirname });
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password) {
    res.send(email + password);
  } else {
    res.send("you must provide an email and password");
  }
});

export { router };
