import libro from "../data/libro.js";
import { LibroFileRepository } from "./file/index.js";

const getAll = () => {
  return LibroFileRepository.getAll();
};

const insert = (libro) => {
  libro.push(libro);
};

const findId = (id) => {
  return libro.find((x) => x.id == id);
};

const LibroRepository = { getAll, insert, findId };

export default LibroRepository;
