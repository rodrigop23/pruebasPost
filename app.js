import express, { response } from "express";
import bodyParser from "body-parser";
import { LibroService } from "./src/services/index.js";

var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/libro", (req, res, next) => {
  console.log("received request");
  console.log(req.body);

  LibroService.insert(req.body);

  return res.json();
});

app.get("/libro/getAll", (req, res, next) => {
  return res.json(LibroService.getAll());
});

app.get("/libro/:id", (req, res, next) => {
  console.log(req.params.id);
  const result = LibroService.findId(req.params.id);
  console.log(result);
  return res.json(result);
});

app.listen(8000, () => {
  console.log("Servidor iniciado");
});
