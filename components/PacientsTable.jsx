import React,{ useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import TableLine from './Subcomponents/TableLine';
import { VscArrowSwap } from 'react-icons/vsc'


function PacientsTable(props) {
  const { data, filter, genderFilter } = useContext(Context);
  let filteredData = [];
  const [asc, setAsc] = useState(0);
  
  filteredData = data
    .filter(d => d.name.first.toLowerCase().includes(filter.toLowerCase())
      || d.location.country.toLowerCase().includes(filter.toLowerCase())
      || d.name.last.toLowerCase().includes(filter.toLowerCase()))

      
  if(genderFilter) {
    filteredData = filteredData.filter(d => d.gender === genderFilter)
  }

  if(asc !== 0) {
    filteredData = filteredData.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -asc;
      }
      if (a.name.last > b.name.last) {
        return asc
      }
      return 0;
    })
  }
  const orderByName = () => {
  if(asc === 0){
    setAsc(1) 
  } else if(asc == 1) {
    setAsc(-1)
  } else if(asc === -1) {
    setAsc(0)
  }
}
    return (
      <div className="container mt-3">
        {console.log(filteredData)}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                <button className="name-order-btn" onClick={orderByName}>
                  <div className="d-flex flex-row">
                  Name<div className="rotation"><VscArrowSwap /></div>
                  </div>
                </button>
              </th>
              <th scope="col">Country</th>
              <th scope="col">Gender</th>
              <th scope="col">Birth</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((u) => 
              <TableLine
                key={`${u.name.first} ${u.name.last}`}
                name={`${u.name.last}, ${u.name.first}` }
                country={`${u.location.country}`}
                gender={u.gender}
                birth={u.dob.date.substring(0,10)}
                id={u.id.value}
              />
            )}
          </tbody>
        </table>
      </div>
    )
}

export default PacientsTable;