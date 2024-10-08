class BookService{
    constructor(){
        this.URI = "/api/books";
    }

    async getBooks(){
        const res = await fetch(this.URI);
        let books = await res.json();
        books = books.reverse();
        return books;
    }

    async postBooks(book){
        const res = await fetch(this.URI, {
            method:"POST",
            body: book
        });
        const data = await res.json();
        return data;
    }

    async deleteBooks(bookId){
        const res =  await fetch(`${this.URI}/${bookId}`, {
            method:'DELETE'
        });
        const data = await res.json();

    }
}

export default BookService;