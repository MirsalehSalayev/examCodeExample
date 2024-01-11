import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext';
import { WishContext } from '../context/WishContext';
import "./wish.scss"
function Wish() {
    const { removeItemWish, wish } = useContext(WishContext) || {};

    return (
        <div className='WishCont'>
            <div className='WishItem'>
                {wish && wish.map((item, index) => (
                    <div key={index} className="cardWish">
                        <img src={item.images} alt="" />
                        <h2>{item.name}</h2>
                        <div>
                            <button onClick={() => removeItemWish(item)}>X</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Wish
