import Modal from 'react-modal'
import React,{ useContext, useEffect, useState } from 'react';
import Context from '../context/Context'
import Photo from './Subcomponents/Photo'

function User(props){
    const { data, filter, genderFilter } = useContext(Context)
    const user = data.filter(u => u.login.uuid === props.userId)
   // const userData = data.map(d => data.id.value === props.userId)[0]

    console.log(user)
    console.log(data)
    return(
        <div
            isOpen={props.isOpen}
            onRequestClose={props.close}
            contentLabel="User modal"
            className="d-flex justify-content-center"
        >   
            <div className="col align-self-center">
                <div className="d-flex row justify-content-center">
                    <div className="col-1">
                        <Photo image={user[0].picture.medium} className="col-1"/>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-around">
                <div className="mt-2">
                    <h6 className="my-0">Name </h6>
                    <small>{` ${user[0].name.title} ${user[0].name.first} ${user[0].name.last}` }</small>
                    <h6 className="my-0">Email </h6>
                    <small>{user[0].email}</small>
                    <h6 className="my-0">Gender</h6>
                    <small>{user[0].gender}</small>
                    <h6 className="my-0">Phone </h6>
                    <small>{user[0].cell}</small>
                </div>
                <div className="mt-2">
                    <h6 className="my-0">Street </h6>
                    <small>{user[0].location.street.name}</small>
                    <h6 className="my-0">Number </h6>
                    <small>{user[0].location.street.number}</small>
                    <h6 className="my-0">City</h6>
                    <small>{user[0].location.city}</small>
                    <h6 className="my-0">State</h6>
                    <small>{user[0].location.state}</small>
                    <h6 className="my-0">Country</h6>
                    <small>{user[0].location.country}</small>
                </div>
                </div>
            </div>
      </div>
    )
}

export default User