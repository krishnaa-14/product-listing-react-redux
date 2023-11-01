import { useParams } from 'react-router-dom';
import { addProductsToCategory } from '../slices/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { useEffect } from 'react';

const CategoryList = () => {

    let {category} = useParams();

    const dispatch = useDispatch();

    const products = useSelector((store) => store.category);

    const getProductsByCategory = async () => {
        const data = await fetch("https://dummyjson.com/products/category/" + category + "?limit=10");
        const json = await data.json();
        console.log(json);
        dispatch(addProductsToCategory(json.products));
    }

    useEffect(() => {
        getProductsByCategory();
    }, [category])

    return (
        <div>
            {/*<h1 className = "font-bold text-3xl text-center mt-5"> Products </h1> */}
            <h1 className = "mt-5 font-bold text-center"> {category} </h1>
            <div className = "mt-5 flex flex-row flex-wrap justify-center">
                {products.map((product) => {
                    return (
                        <ProductItem 
                            title = {product.title}
                            price = {product.price}
                            imageURL = {product.thumbnail}
                            productId = {product.id}
                            key = {product.id}
                            category={product.category}
                        />
                    )
                })}
            </div>
        </div>  
    )
}

export default CategoryList;