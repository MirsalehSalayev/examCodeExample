import React, { useState, createContext } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

export const WishContext = createContext({ wish: [] });

export function WishProvider({ children }) {
    const [wish, setWish] = useLocalStorage("wish", []);
    const addToWish = (item) => {
        const elementindex = wish.findIndex((x) => x.id === item.id);
        if (elementindex === -1) {
            setWish([...wish, { ...item, count: 1 }]);
            return;
        }

        wish[elementindex].count++;
        setWish([...wish]);
        console.log(wish)
    };
    function removeItemWish(item) {
        console.log(item);
        setWish(wish.filter(x => x.id !== item.id));
    }
    const data = {
        removeItemWish,
        wish,
        addToWish,
    };

    return (
        <WishContext.Provider value={data}>
            {children}
        </WishContext.Provider>
    );

}