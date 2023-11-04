import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from 'react';
import FilterDropdown from "./FilterDropdown";
import { Menu } from 'lucide-react';
import Sidebar from "./Sidebar";

const NavBar = () => {

    const cartItems = useSelector(store => store.cart)
    const cartItemsCount = cartItems.length;
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [isSideBarOpen, setisSideBarOpen] = useState(false);

    return (
        <div className = "flex flex-row justify-between items-center h-20 w-full bg-slate-300">
            <div className = "flex flex-row ml-20">
                <Menu onClick={() => setisSideBarOpen(!isSideBarOpen)}/>
                {isSideBarOpen && <Sidebar> </Sidebar>}
                <Link to = "/"><div className = " ml-2 font-semibold hover:cursor-pointer hover:underline">
                    Products
                </div>
                </Link>
            </div>

            <SearchBar > </SearchBar>

            <div className = "flex flex-row justify-between">
                <div className = "relative">
                    <button className = "bg-gray-400 text-white rounded p-2" onMouseEnter={() => setShowFilterDropdown(true)}> Filter Products </button>
                    {showFilterDropdown && <FilterDropdown setShowFilterDropdown={setShowFilterDropdown}></FilterDropdown>}
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