import { addProductToCart } from "../slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = ({title, price, imageURL, productId}) => {
    
    const products = useSelector((store) => store.products);
    const dispatch = useDispatch();

    const handleAddProductToCart = () => {
        const item = products.find(product => product.id === productId);
        dispatch(addProductToCart({title : title, price : price, imageURL : imageURL, productId : productId}));
    }

    
    return (
        <div className = "w-60 p-8 m-8 h-50 bg-white rounded shadow h-full">
            <img src = {imageURL} className = "w-full h-40 object-fit mt-5" alt = "product image" />
            <div className = "mt-2">
                <h1 className = "font-bold text-sm mb-4"> {title} </h1>
                <h1 className = "font-bold text-xl"> {price} $ </h1>
            </div>
            <div className="mt-4 text-center">
                <button onClick = {() => handleAddProductToCart()}className="bg-gray-500 text-white py-2 px-4 rounded w-40">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductItem;