import { makeAutoObservable} from "mobx"
export default class BookStore{
    constructor(){
this._type = []
        this._book=[
            {id:1,name:"Кобзар",author:"Т.Г.Шевченко",price:"300",img:"kobzar.jpg"},
            {id:2,name:"Психологія впливу",author:"Р.Чалдині",price:"200",img:"chaldini.jpg"},
            {id:4,name:"Рядовий",author:"Д.Паттерсон",price:"50",img:"private.jpg"},
            {id:5,name:"Чорнильно-чорне серце",author:"Р.Галбрейт",price:"25",img:"blackheart.jpg"},
            {id:6,name:"Жити просто",author:"Г.Осадко",price:"10",img:"prosto.jpg"},
            {id:7,name:"Чому не Еванс?",author:"А.Крісті",price:"5",img:"why_not.jpg"},
            {id:10,name:"Кобзар",author:"Т.Г.Шевченко",price:"3000",img:"kobza.jpg"},
        ]
        this._basket = []
        this._selectedType={}
        this._page=1
        this._limit=10
        makeAutoObservable(this)
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