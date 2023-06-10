import { makeAutoObservable} from "mobx"

export default class BookStore{
    constructor(){
this._type = []       
        this._basket = []
        this._selectedType={}
        this._page=1
        this._limit=10
         // Завантаження даних з JSON файлу
        makeAutoObservable(this);
        this.loadBooksFromJSON();
       
       
    }
    async loadBooksFromJSON() {
        try {
            const response = await fetch("books.json");
            const data = await response.json();
            this._books = data.books;
          } catch (error) {
            console.error("Error loading books from JSON:", error);
          }
    }
    setSelectedType(selectedType){
        this.setPage(1)
        this._selectedType=selectedType
    }

    setType(type){
        this._type=type
    }

    setPage(page){
        this._page=page
    }
    setBook(book){
        this._book=book
    }
    setLimit(limit){
        this._limit=limit
    }

    setBasket(basket){
        this._basket=basket
    }
    get selectedType(){
        return this._selectedType
    }
    get type(){
        return this._type
    }
    get page(){
        return this._page
    }


    get limit(){
        return this._limit
    }

    get basket(){
        return this._basket
    }
    get book(){
        return this._book
    }
}