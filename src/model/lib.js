class Libros {
  constructor(libro) {
    if (!libro) return;

    (this.id = libro.id),
      (this.titulo = libro.titulo),
      (this.autor = libro.autor),
      (this.anno = libro.anno);
  }
}

export default Libros;
