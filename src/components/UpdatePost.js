import React, { useContext , useState } from 'react'
import postContext from '../context/posts/postContext'
import updateContext from '../context/posts/updateContext'
import { useHistory } from 'react-router';

export const UpdatePost = () => {

    const history = useHistory();

    const context = useContext(postContext)
    const postUpdateContext = useContext(updateContext);

    const {update} = postUpdateContext;

    const{editPost} = context;

    const [postUpdate, setPostUpdate] = useState({eheading : update.heading , edescription : update.description});
    
    //setting the values typed in text area.
    const onChange = (e)=>{

        setPostUpdate({...postUpdate , [e.target.name] : e.target.value});
    }

    const handleOnClick = (e) =>{
        e.preventDefault();
        editPost(update._id , postUpdate.eheading , postUpdate.edescription)
        history.push('/home')
    }
    return (
            <div className="col-md-6 offset-md-3 col-xs-12 my-5">
           <form>
                <div className="mb-3">
                    <input type="text" defaultValue={postUpdate.eheading} onChange={onChange} name="eheading" className="form-control" aria-describedby="emailHelp" placeholder="Article Title"></input>
                </div>
                <div className="mb-3 my-3">
                    <textarea name="edescription" defaultValue={postUpdate.edescription}  onChange={onChange} style={{width: "45rem", height: "20rem"}} className="form-control" placeholder="write your Article"></textarea>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
             <button type="submit" className="btn button-color" onClick={handleOnClick}>Update</button>
             </div>
                </form>
        </div>
    )
}
