import React, { useEffect, useState, useContext } from 'react';
import { BasketContext } from '../context/BasketContext';
import { SearchContext } from '../context/SearchContext';
import { WishContext } from '../context/WishContext';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "./product.scss";

function Product() {
    const [data, setData] = useState([]);
    const { addToBasket } = useContext(BasketContext);
    const { addToWish } = useContext(WishContext);
    const { search } = useContext(SearchContext);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products");
            const api = await response.json();
            setData(api);
            console.log(api)
        }
        fetchData();
    }, []);

    const filteredData = data.filter(item => item.name && typeof item.name === 'string' && item.name.toLowerCase().includes(search.toLowerCase()));

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='ProductsCont'>
            <div className='Products'>
                {filteredData.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <img src={item.images} alt="" />
                            <div className="title">{item.name}</div>
                            <div className="price">{item.price}</div>
                            <button onClick={() => handleOpen(item)}>view</button>
                            <button onClick={() => addToWish(item)}>like</button>
                        </div>
                    )
                })}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className="Modal" sx={{ width: 700, height: 500 }}>
                    {selectedItem && (
                        <div className="ModalCard" key={selectedItem.id}>
                            <img className='ModalImage' src={selectedItem.images} alt="" />
                            <div className="ModalTitle">{selectedItem.name}</div>
                            <div className="ModalPrice">{selectedItem.price}</div>

                            <button onClick={() => addToBasket(selectedItem)}>Sepete Ekle</button>
                            <button onClick={() => addToWish(selectedItem)}>like</button>
                            <Button onClick={handleClose}>Close Child Modal</Button>
                        </div>
                    )}
                </Box>
            </Modal>

        </div>
    )
}

export default Product;
