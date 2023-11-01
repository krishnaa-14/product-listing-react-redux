import {useState} from 'react';

const FilterDropdown = ({ filterStatus, setFilterStatus, setShowFilterDropdown}) => {

    return (
        <div onMouseLeave = {() => setShowFilterDropdown(false)} className = "absolute top-12 right-0 bg-white border rounded border-gray-300 py-2 px-4 w-40 flex flex-col">
            <label> 
                <input checked = {filterStatus === 'ascending'} type = "radio" onClick = {() => setFilterStatus('ascending')}/>
                <span className = "ml-2"> Ascending </span>
            </label>
            <label>
                <input checked = {filterStatus === 'descending'} type = "radio" onClick = {() => setFilterStatus('descending')}/>
                <span className = "ml-2"> Descending </span>
            </label>
            <label>
                <input checked = {filterStatus === 'Low'} type = "radio" onClick = {() => setFilterStatus('Low')}/>
                <span className = "ml-2"> Low </span>
            </label>
            <label> 
                <input checked = {filterStatus === 'Medium'} type = "radio" onClick = {() => setFilterStatus('Medium')}/>
                <span className = "ml-2"> Medium </span>
            </label>
            <label>
                <input checked = {filterStatus === 'High'} type = "radio" onClick = {() => setFilterStatus('High')}/>
                <span className = "ml-2"> High </span>
            </label>
        </div>
    )
}

export default FilterDropdown;