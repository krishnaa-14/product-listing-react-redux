import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from 'react';
import FilterDropdown from "./FilterDropdown";

const NavBar = () => {

    const cartItems = useSelector(store => store.cart)
    const cartItemsCount = cartItems.length;
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [filterStatus, setFilterStatus] = useState(null);

    return (
        <div className = "flex flex-row justify-between items-center h-20 w-full bg-slate-300">
            <Link to = "/"><div className = "ml-20 font-semibold hover:cursor-pointer hover:underline">
                Products
            </div>
            </Link>

            <SearchBar > </SearchBar>

            <div className = "flex flex-row justify-between">
                <div className = "relative">
                    <button className = "bg-gray-400 text-white rounded p-2" onMouseEnter={() => setShowFilterDropdown(true)}> Filter Products </button>
                    {showFilterDropdown && <FilterDropdown filterStatus = {filterStatus} setFilterStatus = {setFilterStatus} setShowFilterDropdown={setShowFilterDropdown}></FilterDropdown>}
                </div>
                <Link to = "/cart" >
                    <div className = "mr-20 ml-10 p-2 font-semibold hover:cursor-pointer hover:underline">
                        Cart Items - {cartItemsCount}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;