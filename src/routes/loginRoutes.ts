import { Router, Request, Response } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.sendFile("login.html", { root: __dirname });
});

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.send(email + password);
});

export { router };
