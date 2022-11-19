import App from "./App";
import express from "express";
import cors from "cors";

const app = new App().application;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(3000, () => {
  console.log("Server Start");
});

export default server;
