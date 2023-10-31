import { addProductToCart, removeProductFromCart } from "../slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";


const ProductItem = ({title, price, imageURL, productId}) => {
    
    const cartProducts = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    const handleAddProductToCart = () => {
        dispatch(addProductToCart({title : title, price : price, imageURL : imageURL, productId : productId}));
    }

    const isPresentInCart = (productId) => {
        return cartProducts.find(product => product.productId === productId);
    }

    const handleRemoveProductFromCart = () => {
        dispatch(removeProductFromCart(productId));
    }
    
    return (
        <div className = "w-60 p-8 m-8 h-50 bg-white rounded shadow h-full">
            <img src = {imageURL} className = "w-full h-40 object-fit mt-5" alt = "product image" />
            <div className = "mt-2">
                <h1 className = "font-bold text-sm mb-4"> {title} </h1>
                <h1 className = "font-bold text-xl"> {price} $ </h1>
            </div>

            {isPresentInCart(productId) ? 
            <div className="mt-4 text-center">
                <button onClick = {() => handleRemoveProductFromCart()} className="bg-red-300 text-white py-2 px-4 rounded w-40">Remove From Cart </button>
            </div> : 
            <div className="mt-4 text-center">
                <button onClick = {() => handleAddProductToCart()} className="bg-gray-500 text-white py-2 px-4 rounded w-40">Add to Cart</button>
            </div>}
        </div>
    )
}

export default ProductItem;