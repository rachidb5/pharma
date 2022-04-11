import React, { useContext} from 'react';
import Context from '../../context/Context';

function GenderFilter(props) {
    const { setGenderFilter } = useContext(Context);
    return (
        <select defaultValue='' onChange={({ target: { value } }) => setGenderFilter(value)}>
            <option value=''>Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
        </select>
    )
}

export default GenderFilter;