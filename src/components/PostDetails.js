import React , {useContext} from 'react'
import { Link , useHistory} from 'react-router-dom'
import postContext from '../context/posts/postContext'
import updateContext from '../context/posts/updateContext'


export const PostDetails = (props) => {
    const history = useHistory();

    const context = useContext(postContext)
    const postUpdate = useContext(updateContext)

    const {deletePost} = context;
    const{updateValue} = postUpdate;

    const {post} = props;

    const handleUpdate = () =>{
        updateValue(post);
       history.push('/updatepost');
   }


    return (
        <div>
            <div className="row">
                    <div className="container col-lg-9 position-relative">
                        <span className="counter-btn position-absolute top-0 translate-middle badge rounded-pill " style={{ left: "98%", zIndex: "1" }}>
                            <ion-icon name="heart-outline" size="small"></ion-icon>99+

                        </span>
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
                                       
                                            <Link to="/#" className="widget-49-pro-title">{post.user}</Link>  
                                            <span className="widget-49-meeting-time">(post.Date)</span>
                                        </div>
                                            <button  className="functional-btn" onClick={() =>{deletePost(post._id)}}><i className="far fa-trash-alt" style={{paddingRight:"10px"}}></i>  Delete Post</button>
                                            <button className="functional-btn" onClick={handleUpdate}><i className="far fa-edit" style={{paddingRight:"10px"}}></i>Update Post</button>

                                    </div>
                                    <div className="widget-49-meeting-points mx-5 my-3">
                                        <h5 className="card-title"> {post.heading}</h5>
                                        <p className="post-details">{post.description}</p>
                                    </div>
                                    <div className="widget-49-meeting-action">
                                        <Link to="/readmore" className="btn-readMore">Read More...</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}