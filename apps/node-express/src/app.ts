import express from "express";
import { deleteProperty } from "@monorepo/utilities";

const data = {
  name: "Jess",
  email: "azul@gmail.com",
  password: "pass123",
  lastName: "Dale",
  birthDate: "01/01/1991",
};

const app = express();

app.get("/", (req, res) => {
    console.log('first', deleteProperty(data,"password"))
  res.send("Hello World!");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
