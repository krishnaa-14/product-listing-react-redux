import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilterStatus } from '../slices/FilterStatusSlice';

const FilterDropdown = ({setShowFilterDropdown}) => {

    const filterStatus = useSelector((store) => store.filterStatus);
    const dispatch = useDispatch();

    return (
        <div onMouseLeave = {() => setShowFilterDropdown(false)} className = "absolute top-12 right-0 bg-white border rounded border-gray-300 py-2 px-4 w-40 flex flex-col">
            <label className = "mt-2">
                <input checked = {filterStatus === 'Low'} type = "radio" onChange = {() => dispatch(updateFilterStatus('Low'))}/>
                <span className = "ml-2"> Low </span>
            </label>
            <label> 
                <input checked = {filterStatus === 'Medium'} type = "radio" onChange = {() => dispatch(updateFilterStatus('Medium'))}/>
                <span className = "ml-2"> Medium </span>
            </label>
            <label>
                <input checked = {filterStatus === 'High'} type = "radio" onChange = {() => dispatch(updateFilterStatus('High'))}/>
                <span className = "ml-2"> High </span>
            </label>

            <button className = "bg-gray-500 text-white p-1 rounded shadow mt-2" onClick = {() => dispatch(updateFilterStatus('None'))}> Clear </button>
        </div>
    )
}

export default FilterDropdown;