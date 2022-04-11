import React from 'react';
import GenderFilter from './Subcomponents/GenderFilter'
import TextFilter from './Subcomponents/TextFilter';

function Filter() {
    return (
      <div className="container mt-3 d-flex justify-content-evenly">
          <TextFilter />
          <GenderFilter />
      </div>
    )
}

export default Filter;