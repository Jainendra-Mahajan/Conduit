import React, { useContext , useEffect } from 'react'
import postContext from '../context/posts/postContext'
import { PostDetails } from './PostDetails'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'


const Posts = () => {
    let history = useHistory();

    const context = useContext(postContext)
    const { posts , getArticle} = context;
    useEffect(() => {
        if(localStorage.getItem('token'))
        getArticle();

        else{
            history.push('/signin')
        }
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="container my-5">
                <ul className="post-nav-tag container ">

                    <li><Link to="/globalfeed">Global Feed</Link> </li>
                    <li><Link to="/myarticles"> My Articles</Link></li>
                </ul>
            </div>
            <div className="container">

                <div className="container">
                {posts.length === 0 && 'No articles available...'}
                </div>
                {posts.map((post) =>{
                    return <PostDetails post = {post}/>
                })}

            </div>
        </>
    )
}

export default Posts