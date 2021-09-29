import React, { useContext , useState } from 'react'
import {useHistory } from 'react-router-dom';
import postContext from '../context/posts/postContext'

export const NewArticle = (props) => {

    const history = useHistory();

    const context = useContext(postContext)
    const {addPost} = context;

    const [post, setPost] = useState({heading:props.heading , description:props.description});

    //setting the values typed in text area.
    const onChange = (e)=>{
        setPost({...post , [e.target.name] : e.target.value});
    }

    
    const handleOnClick = (e) =>{
        e.preventDefault();
        addPost(post.heading, post.description);
        history.push('/home')
    }
    return (
            <div className="col-md-6 offset-md-3 col-xs-12 my-5">
           <form>
                <div className="mb-3">
                    <input type="text" onChange={onChange} name="heading" className="form-control" aria-describedby="emailHelp" placeholder="Article Title"></input>
                </div>
                <div className="mb-3 my-3">
                    <textarea name="description" onChange={onChange} style={{width: "45rem", height: "20rem"}} className="form-control" placeholder="write your Article"></textarea>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
             <button type="submit" className="btn button-color" onClick={handleOnClick}>Publish</button>
             </div>
                </form>
        </div>
    )
}


