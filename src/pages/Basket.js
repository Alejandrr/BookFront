import React from 'react';
import BasketList from "../components/basket/BasketList";
import "./Basket.css"
const Basket = () => {
    return (
        <div className="basket">
            <p>Ваші товари</p>
            <BasketList/>
        </div>
    );
};

export default Basket;