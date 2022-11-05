import { Libro } from "../../model/index.js";

import data from "../../data/libro.js";

const getAll = () => {
  return data.map((item) => {
    return new Libro({
      id: item.id,
      titulo: item.titulo,
      autor: item.autor,
      anno: item.anno,
    });
  });
};

const LibroFileRepository = { getAll };

export default LibroFileRepository;
