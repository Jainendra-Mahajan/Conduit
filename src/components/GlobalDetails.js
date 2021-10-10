import React , {useContext} from 'react';
import { Link } from 'react-router-dom'
import updateContext from '../context/posts/updateContext'


export const GlobalDetails = (props) => {

    const postUpdate = useContext(updateContext)

    const {updateValue} = postUpdate

    const {post} = props;
    const handleReadMore = ()=>{
       updateValue(post);
    }

    return (
        <div>
            <div className="row">
                    <div className="container col-lg-9 position-relative">
                        {/* <span className="counter-btn position-absolute top-0 translate-middle badge rounded-pill " style={{ left: "98%", zIndex: "1" }}>
                            <ion-icon name="heart-outline" size="small"></ion-icon>99+

                        </span> */}
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
                                            
                                    </div>
                                    <div className="widget-49-meeting-points mx-5 my-3">
                                        <h4 className="card-title"> {post.heading}</h4>
                                        <p className="post-details">{`${(post.description).substring(0 , 250)}...`}</p>
                                    </div>
                                    <div className="widget-49-meeting-action">
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