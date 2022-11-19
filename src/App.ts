import express, { Request, Response, Application } from "express";

class App {
  public application: Application;

  constructor() {
    this.application = express();
    this.router();
  }

  private router(): void {
    this.application.get("/api/v1", (req: Request, res: Response) => {
      res.json({ message: "Hello Todo List Study" });
    });
  }
}

export default App;
