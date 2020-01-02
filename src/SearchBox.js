import React from 'react';

const SearchBox = ({searchField , onSearchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='tc ba pa3 b--green bg-lightest-blue'
            type='search' 
            placeholder='Search Robots'
            onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBox;