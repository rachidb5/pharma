import React from 'react';
import Link from 'next/link'

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
            <Link href={`/userId=${id}`} as={`/user/${id}`}>
              View
            </Link>
          </button>
        </td>
      </tr>
    )
}

export default TableLine;