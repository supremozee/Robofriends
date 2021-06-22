import React from 'react'

const Card = ({name, email, id, username})=> {
    return(
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{username}</p>

        </div>
    )

}
export default Card