/*Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.*/

function Libro(isbn,titulo,autor,nroPaginas){
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.nroPaginas = nroPaginas;
}

const boton = document.getElementById("boton");

boton.addEventListener("click",()=>{
    const l = new Libro(document.getElementById("isbn").value,document.getElementById("title").value,document.getElementById("author").value,document.getElementById("pages").value);

    document.getElementById("informacion").textContent = `Libro cargado.
    Autor: ${l.autor}, ISBN: ${l.isbn}, Numero de paginas: ${l.nroPaginas}, Titulo: ${l.titulo}`
})
