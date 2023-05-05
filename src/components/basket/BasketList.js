import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const BasketList = observer(() => {
    const {book} = useContext(Context)
    return (


        <div className="bookList basketList">

            {book.basket.map(bk=>
                <div className="bookBlock">
                    <img src={bk.img} alt="fuck" className="bookImg"></img>
                    <em>{bk.name}</em>
                    <em>Автор: {bk.author}</em>
                    <em>Ціна: {bk.price} грн</em>
                    <button key={bk.id} className="addToBasket deleteFromBasket" onClick={(e)=>{
                        book.setBasket(book.basket.filter((item) => item.id !== bk.id))
                        console.log(book.basket)
                    }}>-</button>
                </div>
            )}
        </div>

    );
});

export default BasketList;