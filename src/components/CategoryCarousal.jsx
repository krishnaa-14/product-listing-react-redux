import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoryCarousal = () => {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCategories = async () => {
        setIsLoading(true);
        const data = await fetch("https://dummyjson.com/products/categories");
        const json = await data.json();
        setCategories(json);
        setIsLoading(false);
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        isLoading ? <h1 className = "font-bold text-center mt-8"> Loading.... </h1> : <div>
            <div className = "mt-5 flex flex-row flex-wrap p-3 justify-center"> 
                {
                    categories.length > 0 && categories.map((category, index) => (
                        <Link key = {index} to = {`/category/${category}`}> <h1 key = {index} className = "m-3 hover:underline"> {category} </h1> </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryCarousal;