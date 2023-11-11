import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';

const Shop = () => {

    //get data from API
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    //Add to cart
    const handleToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product => <Product 
                    product={product}
                    Key = {product.id}
                    handleToCart = {handleToCart} //send data as props to product.jsx
                    ></Product> )
            }
                
            
            </div>
            <div className="cart-container">
                <h2>Order summery</h2>
                <p>total cart: {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;