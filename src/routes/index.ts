import express, { NextFunction, Request, Response } from "express";
import todoRouter from "./todo/todo.route";

const router = express.Router();

router.use("/todo", todoRouter);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("!#!@#@!#!@#");
  res.json({ message: "Hello Todo List Study" });
});

export default router;
