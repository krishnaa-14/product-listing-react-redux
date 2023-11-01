import { useSelector } from 'react-redux';
import ProductItem
 from './ProductItem';
const SearchList = () => {

    const searchProducts = useSelector((store) => store.search);

    return (
        <div>
            {/*<h1 className = "font-bold text-3xl text-center mt-5"> Products </h1> */}
            <div className = "mt-5 flex flex-row flex-wrap justify-center">
                {searchProducts.map((product) => {
                    return (
                        <ProductItem 
                            title = {product.title}
                            price = {product.price}
                            imageURL = {product.thumbnail}
                            productId = {product.id}
                            key = {product.id}
                            category = {product.category}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default SearchList;