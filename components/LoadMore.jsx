import React,{ useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import TableLine from './Subcomponents/TableLine';
import { IoReload } from 'react-icons/io5'
import axios from 'axios'

function LoadMore() {
    const { pageNumber, setPageNumber, data, setData} = useContext(Context);
    const onClick = async () => {
        setPageNumber(pageNumber+1);
        const stringNum = pageNumber.toString();
        const endpoint = `https://randomuser.me/api/?page=${stringNum}&results=50`;
        await axios.get(endpoint).then(function (response) {
            const arrayData = response.data.results; 
          setData([...data,...arrayData])
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    return(
        <button className="btn btn-primary col-2 mb-3" onClick={ onClick }>
            <IoReload />
            <span className="ml-2">
            Load more
            </span>
        </button>
    )
}

export default LoadMore