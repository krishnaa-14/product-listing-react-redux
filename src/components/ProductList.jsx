import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { addFilterProducts } from '../slices/FilterProductsSlice';
import applyFilter from '../helper/applyFilter';
import { addProduct } from '../slices/ProductSlice';

const ProductList = () => {
    const products = useSelector((store) => store.products);
    const filterStatus = useSelector((store) => store.filterStatus);
    const filterProducts = useSelector((store) => store.filterProducts);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const json = await data.json();
        dispatch(addProduct(json));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    useEffect(() => {
        const filteredProducts = applyFilter(products, filterStatus);
        dispatch(addFilterProducts(filteredProducts));
    }, [filterStatus])

    const displayProducts = filterStatus === 'None' ? products : filterProducts;

    return (
        <div>
            <div className="mt-5 flex flex-row flex-wrap justify-center">
                {displayProducts.map((product) => (
                    <ProductItem 
                        title={product.title}
                        price={product.price}
                        imageURL={product.image}
                        productId={product.id}
                        key={product.id}
                        category={product.category}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList;
