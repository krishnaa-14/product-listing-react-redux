import { useState, useEffect } from 'react';
import { addProductsToSearch } from '../slices/SearchSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getSearchResults = async () => {
        const data = await fetch("https://dummyjson.com/products/search?q=" + searchText);
        const json = await data.json();
        dispatch(addProductsToSearch(json.products));
        navigate('/search');
    }

    useEffect(() => {
        getSearchResults();
    }, [searchText])

    return (
        <div>
            <input className = "w-96 h-10 shadow rounded bg-white p-2" placeholder = "Search For Products" type = "text" value = {searchText} onChange = {(e) => setSearchText(e.target.value)} /> 
        </div>
    )
}

export default SearchBar;