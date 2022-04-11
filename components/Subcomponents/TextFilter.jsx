import React, { useContext } from 'react';
import Context from '../../context/Context';

function TextFilter(props) {
    const { setFilter } = useContext(Context);
    return (
       <input 
       onChange={({ target: { value } }) => setFilter(value)}
       name='search'
       type='search'
       placeholder='Search patient by name or country'/>
    )
}

export default TextFilter;