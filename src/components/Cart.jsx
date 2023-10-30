import { useSelector } from "react-redux";
import { useEffect, useState} from "react";
import CartItem from "../components/CartItem";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {

        let currCartTotal = 0;

        for(let i = 0; i < cartItems.length; i++) {
            currCartTotal += cartItems[i].price;
        }   

        setCartTotal(currCartTotal);
    }, [cartItems])

    return (
        <div>
            <h1 className = "text-center mt-10 text-2xl text-gray-900 font-bold"> Cart Total - {cartTotal}</h1>
            {console.log(cartItems)}
            <div className = "mt-10">
                {cartItems.map((cartItem) => (
                    <CartItem id = {cartItem.id} price = {cartItem.price} title = {cartItem.title} imageURL = {cartItem.imageURL}></CartItem>
                ))}
            </div>
        </div>
    )
}

export default Cart;