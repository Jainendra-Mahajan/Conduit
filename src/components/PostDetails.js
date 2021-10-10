import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import postContext from '../context/posts/postContext'
import updateContext from '../context/posts/updateContext'


export const PostDetails = (props) => {
    const history = useHistory();

    const context = useContext(postContext)
    const postUpdate = useContext(updateContext)

    const { deletePost } = context;
    const { updateValue } = postUpdate;

    const { post } = props;

    const handleUpdate = () => {
        updateValue(post);
        history.push('/updatepost');
    }
    const handleReadMore = () =>{
        updateValue(post);
    }


    return (
        <div>
            <div className="row">
                <div className="container col-lg-9 position-relative">
                    <div className="card card-margin">
                        <div className="no-border my-2">

                        </div>
                        <div className="card-body pt-0">
                            <div className="widget-49">
                                <div className="widget-49-title-wrapper">
                                    <div className="widget-49-date-primary">
                                        <span className="widget-49-date-day"></span>
                                        <span className="widget-49-date-month"></span>
                                    </div>


                                    <div className="widget-49-meeting-info">

                                        <Link to="/#" className="widget-49-pro-title">{post.user.username}</Link>
                                        <span className="widget-49-meeting-time">{post.Date}</span>
                                    </div>
                                    <button className="functional-btn" onClick={() => { deletePost(post._id) }}><i className="far fa-trash-alt" style={{ paddingRight: "10px" }}></i>  Delete Post</button>
                                    <button className="functional-btn" onClick={handleUpdate}><i className="far fa-edit" style={{ paddingRight: "10px" }}></i>Update Post</button>

                                </div>
                                <div className="widget-49-meeting-points mx-5 my-3">
                                    <h4 className="card-title"> {post.heading}</h4>
                                    <p className="post-details">{`${(post.description).substring(0, 250)}...`}</p>
                                </div>
                                <div className="widget-49-meeting-action">
                                    {/* ToDO */}
                                    <Link to="/articledetails" className="btn-readMore" onClick={handleReadMore}>Read More...</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}