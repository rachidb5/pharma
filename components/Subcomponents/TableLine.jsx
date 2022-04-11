import React from 'react';

function TableLine(props) {
    const { name, gender, birth, country, id } = props;
    return (
    <tr>
        <td>{ name }</td>
        <td>{ country }</td>
        <td>{ gender }</td>
        <td>{birth}</td>
        <td>
          <button className='btn btn-primary'>
            View
          </button>
        </td>
      </tr>
    )
}

export default TableLine;