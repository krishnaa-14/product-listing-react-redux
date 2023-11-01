import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {

    const cartItems = useSelector(store => store.cart)
    const cartItemsCount = cartItems.length;

    return (
        <div className = "flex flex-row justify-between items-center h-20 w-full bg-slate-300">
            <Link to = "/"><div className = "ml-20 font-semibold hover:cursor-pointer hover:underline">
                Products
            </div>
            </Link>

            <SearchBar > </SearchBar>

            <Link to = "/cart">
            <div className = "mr-20 font-semibold hover:cursor-pointer hover:underline">
                Cart Items - {cartItemsCount}
            </div>
            </Link>
        </div>
    )
}

export default NavBar;