import React, { createContext } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

export const BasketContext = createContext({ basket: [] });

export function BasketProvider({ children }) {
    const [basket, setBasket] = useLocalStorage("basket", []);


    function increaseCount(item) {
        const elementindex = basket.findIndex((x) => x.id === item.id)
        if (elementindex !== 1) {
            basket[elementindex].count++;
            setBasket([...basket])
        }

    }
    function decreaseCount(item) {
        const elementindex = basket.findIndex((x) => x.id === item.id);
        if (elementindex !== -1 && basket[elementindex].count > 1) {
            basket[elementindex].count--;
            setBasket([...basket]);
        }
    }

    function removeItem(item) {
        setBasket(basket.filter(x => x.id !== item.id));
    }

    function getTotal() {
        return Math.round(basket.reduce((prev, initial) => prev + (initial.price * initial.count), 0));
    }

    function addToBasket(item) {
        // const elementindex = basket.findIndex((x) => x.id === item.id)
        // if (elementindex === -1) {
        //     setBasket([...basket, { ...item, count: 1 }])
        //     return;
        // }
        // basket[elementindex].count++;

        // setBasket([...basket]);
        const elementindex = basket.findIndex(x => x.id === item.id)
        if (elementindex === -1) {
            setBasket([...basket, { ...item, count: 1 }])
            return;
        }
        basket[elementindex].count++
        setBasket([...basket])

    };



    const data = {
        basket,
        setBasket,
        getTotal,
        addToBasket,
        removeItem,
        increaseCount,
        decreaseCount,
    };

    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    );
}


