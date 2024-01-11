import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext';
import "./basker.scss"
function Basket() {
    const { basket, increaseCount, decreaseCount, removeItem, getTotal } = useContext(BasketContext) || {};

    return (
        <div className='BasketCont'>
            <div>
                <h1>{getTotal()}</h1>
            </div>
            <div className="basketItem">

                {basket.map((item, index) => (
                    <div key={index} className="cardBasket">
                        <img src={item.images} alt="" />
                        <h2>{item.name}</h2>
                        <p>{Math.round(item.price * item.count)}</p>
                        <div>
                            <button onClick={() => increaseCount(item)}>
                                +
                            </button>
                            <div className="price">{item.count}</div>
                            <button onClick={() => decreaseCount(item)}>
                                -
                            </button>
                            <button onClick={() => removeItem(item)}>X</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div >
    )
}

export default Basket;
