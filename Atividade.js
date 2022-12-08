class Book {
    constructor(title,description,author){
        this.title = title
        this.description = description
        this.author = author
        this.id = String(description.length * 5 + 2) //geração de ID "aleatórios"
    }
}

class Library {
    constructor(){
        this.Books = []
    }

    addBook(bookInfo){
        let book = new Book(bookInfo['title'],bookInfo['description'],bookInfo['author'])        
        this.Books.push(book)
        console.log(`Livro, de título '${bookInfo['title']}' adicionado com sucesso...`)
        return book
    }

    getBooks(){

        if (this.Books.length === 0) {
            console.log("Não há livros na estante...")
        } 
        for (let index = 0; index < this.Books.length; index++) {
            console.log("=========================")
            console.log(`Título: ${this.Books[index].title}`)
            console.log(`Descrição: ${this.Books[index].description}`)
            console.log(`Autor: ${this.Books[index].author}`)
            console.log(`ID: ${this.Books[index].id}`)
            console.log("=========================")
        }
        return this.Books
    }

    removeBookById(ID){

        for (let index = 0; index < this.Books.length; index++) {
            if (this.Books[index].id === ID){
                this.Books.splice(index,1)
                console.log(`O livro de ID ${ID} foi removido`)
                return
            }
        }

        console.log(`O livro de ID ${ID} não foi encontrado`)

    }

    getBookById(ID){

        for (let index = 0; index < this.Books.length; index++) {
            if (this.Books[index].id === ID) {
                console.log(`O livro | ID: ${ID} | encontrado com sucesso...`)
                return this.Books[index]
            } 
        }
        console.log(`O livro de ID ${ID} não foi encontrado`)
    }

    updateBookById(ID,info){
        for (let index = 0; index < this.Books.length; index++) {
            if (this.Books[index].id === ID) {
                this.Books[index].title = info['title']
                this.Books[index].description = info['description']
                this.Books[index].author = info['author']
                console.log("Atualizado!")
                return this.Books[index]
            } 
        }
        console.log(`O livro de ID ${ID} não foi encontrado`)
        
    }

}


//Casos Testes

Estante1 = new Library()

Estante1.addBook({title: "O poder do hábito", description: "Por que fazemos o que fazemos na vida e nos negócios" ,
    author: "Charles Duhigg"})

Estante1.addBook({title: "É Assim que Acaba", 
    description: "Considerado o livro do ano, que virou febre no TikTok e sozinho já acumulou mais de um milhão de exemplares vendidos no Brasil" ,
    author: "Charles Duhigg"})

Estante1.getBooks()

Estante1.getBookById('100')

Estante1.getBooks()
