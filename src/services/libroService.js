import { LibroRepository } from "../repository/index.js";

const getAll = () => {
  return LibroRepository.getAll();
};

const insert = (libro) => {
  LibroRepository.insert(libro);
};

const findId = (id) => {
  return LibroRepository.findId(id);
};

const LibroService = { getAll, insert, findId };

export default LibroService;
