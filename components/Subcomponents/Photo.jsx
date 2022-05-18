import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

function Photo(props) {
    const { name, gender, birth, country, id } = props;
    return (
    <img src={props.image} alt="User picture" className="user-img" width="100px" height="100px"/>
    )
}

export default Photo;