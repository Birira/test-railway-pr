require("./styles/app.css");
import BookService from "./services/BookService";
import UI from "./UI";

document.addEventListener("DOMContentLoaded", ()=>{
    const ui = new UI();
    ui.renderBooks();
});

document.getElementById("book-form")
    .addEventListener("submit", e => {
        const title = document.getElementById("title").value;
        const tag = document.getElementById("tag").value;
        const isbn = document.getElementById("isbn").value;
        const image = document.getElementById("image").files;
        
        const formData = new FormData();
        formData.append("image", image[0]);
        formData.append("title", title);
        formData.append("tag", tag);
        formData.append('isbn', isbn);

        const ui = new UI();
        ui.addNewBooks(formData);
        

        e.preventDefault();
    });

document.getElementById("books-cards")
    .addEventListener("click", e=>{
        if (e.target.classList.contains("delete")){
            const ui = new UI();
            ui.deleteBook(e.target.getAttribute('_id'));
        }
        e.preventDefault();

    })