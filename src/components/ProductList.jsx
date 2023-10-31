import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { useDispatch } from'react-redux';
import { addProduct } from '../slices/ProductSlice';


const ProductList = () => {

    const products = useSelector((store) => store.products);
    const cartProducts = useSelector((store) => store.cart);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const json = await data.json();
    
        dispatch(addProduct(json));
    }

    useEffect(() => {

        if(products.length > 0) {
            return;
        }

        fetchProducts();
    }, [])

    return (
        <div>
            {/*<h1 className = "font-bold text-3xl text-center mt-5"> Products </h1> */}
            <div className = "mt-5 flex flex-row flex-wrap justify-center">
                {products.map((product) => {
                    return (
                        <ProductItem 
                            title = {product.title}
                            price = {product.price}
                            imageURL = {product.image}
                            productId = {product.id}
                            key = {product.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList;