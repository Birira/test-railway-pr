import BookService from "./services/BookService";
const bookService = new BookService();
import { format } from "timeago.js";

class UI{
    async renderBooks(){
        const books = await bookService.getBooks();
        books = books.reverse();

        const booksContainer = document.getElementById("books-cards");
        booksContainer.innerHTML = "";
        books.forEach(book => {
            const div = document.createElement("div");
            div.className = "";
            div.innerHTML = `
            <div class="card m-2">
                <div class="row">
                    <div class="col-md-4">
                    <img src="${book.image}"alt="" class = "img-fluid"/>        
                    </div>

                    <div class="col-md-8">   
                        <div class="card-block px-2">
                        <h4 class="card-title">${book.title}</h4>
                        <p class ="card-text">${book.tag}</p>       
                        <a href= "#" class="btn btn-danger delete" _id=${book._id}>X</a>        
                        </div>         
                    </div>
                </div>  
                <div class="card-footer">
                ${format(book.created_at)}
                </div>          
            </div>

            `;

            booksContainer.appendChild(div);
        });
    }

    async addNewBooks(book){
        await bookService.postBooks(book);
        this.clearBookForm();
        this.renderBooks();
    }

    clearBookForm(){
        document.getElementById("book-form").reset();
    }

    renderMessage(){}

    async deleteBook(bookId){
        const book = await bookService.deleteBooks(bookId);
        this.renderBooks();
    }
};

export default UI;