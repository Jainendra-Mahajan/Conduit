import React, { useContext } from 'react'
import updateContext from '../context/posts/updateContext'

export const ArticleDetails = () => {

    const postUpdate = useContext(updateContext)

    const { update } = postUpdate

    return (
        <>
            <div className="container d-flex justify-content-center my-4">
                <h1>{update.heading}</h1>
            </div>
            <div className="container d-flex justify-content-center">
                <p>{update.description}</p>
            </div>

        </>
    )
}
