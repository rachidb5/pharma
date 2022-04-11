import React,{ useContext } from 'react';
import Context from '../context/Context';
import TableLine from './Subcomponents/TableLine';


function PacientsTable(props) {
  const { data, filter, genderFilter } = useContext(Context);
  let filteredData = [];
  
  filter === '' ? filteredData = data : filteredData = data
    .filter(d => d.name.first.toLowerCase().includes(filter.toLowerCase())
      || d.location.country.toLowerCase().includes(filter.toLowerCase())
      || d.name.last.toLowerCase().includes(filter.toLowerCase()))

      
  if(genderFilter) {
    filteredData = filteredData.filter(d => d.gender === genderFilter)
  }
  /*filteredData = filteredData.sort((a, b) => {
    if (a.name.first < b.name.first) {
      return -asc;
    }
    if (a.name.first > b.name.first) {
      return asc;
    }
    return 0;
  })*/
    return (
      <div className="container mt-3">
        {console.log(filteredData)}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name </th>
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
                name={`${u.name.first} ${u.name.last}` }
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