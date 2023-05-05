import React from 'react';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";


const Navbar = observer(() => {
    const navigate=useNavigate()
    return (
        <div className="navbar">
<div className="mainPageBtn" onClick={()=>navigate('/')}>
    Магазин книг від Санька
</div>
            <button className="basketBtn" onClick={()=>navigate("/basket")}>Кошик</button>
        </div>
    );
});

export default Navbar;