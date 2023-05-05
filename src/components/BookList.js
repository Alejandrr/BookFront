import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const BookList = observer(() => {
    const {book} = useContext(Context)
    const navigate=useNavigate()
   // localStorage.setItem(basket,JSON.stringify(book.basket))
const addToBasket=(bk)=>{
   //  let bask = JSON.parse(localStorage.getItem("basket"));
book.basket.push(bk)

}
    return (
        <div className="bookList">
            {book.book.map(bk=>
                <div className="bookBlock">
                    <img src={bk.img} alt="oops" className="bookImg"></img>
                    <em>{bk.name}</em>
                    <em>Автор: {bk.author}</em>
                    <em>Ціна: {bk.price} грн</em>
                    <button key={bk.id} className="addToBasket" onClick={(e)=>{
                        addToBasket(bk)
navigate("/basket")
                        console.log(book.basket)
                    }}>+</button>
                </div>
            )}
        </div>
    );
});

export default BookList;