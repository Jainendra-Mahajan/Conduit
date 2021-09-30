import React, { useContext, useEffect } from 'react'
import postContext from '../context/posts/postContext'
import { GlobalDetails } from './GlobalDetails';
import Posts from './Posts';
import { Link } from 'react-router-dom'

export const GlobalPosts = () => {

    const context = useContext(postContext)
    const { posts, globalData } = context;

    useEffect(() => {
        globalData();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const handleClick = ()=>{
        <GlobalPosts/>
    }

    const handleArticles = ()=>{
        <Posts/>
    }

    return (
        <>
            <div className="container my-5">
                <ul className="post-nav-tag container ">

                    <li><Link to="/globalfeed" onClick={handleClick}>Global Feed</Link> </li>
                    <li><Link to="/userfeed" onClick={handleArticles}> My Articles</Link></li>
                </ul>
            </div>
            <div className="container my-5">
                <div className="container">
                    {posts.length === 0 && 'No articles available...'}
                </div>
                {posts.map((post) => {
                    return <GlobalDetails post={post} />
                })}

            </div>
        </>
    )
}