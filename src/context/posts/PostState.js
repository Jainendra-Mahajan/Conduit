import postContext from "./postContext";
import { useState } from "react";

const PostState = (props) =>{
    const host = "http://localhost:5000"
    const initialPost = []
    const [posts, setPosts] = useState(initialPost);


    // Don't forget to pass the add , delete and update functions to pass in provider value below

    //add a new article make the changes in new article components
    const addPost = async(heading , description) =>{
      const response = await fetch(`${host}/api/post/createpost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' , 
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({heading , description}) 
      });
      const post = await response.json();
      setPosts(posts.concat(post));

    }

    //get all user written articles
    const getArticle = async()=>{
      //api call to backend

      const response = await fetch(`${host}/api/post/getpost`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json' , 
          'auth-token': localStorage.getItem('token')
        },
      });
      const json = await response.json();
      setPosts(json);
    }

    //get all global data

    const globalData = async()=>{
      const response = await fetch(`${host}/api/post/globaldata`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json' , 
        },
      });

      const data = await response.json();
      setPosts(data);
     }

    //deleting the article 
    const deletePost = async(id) =>{

      //api call for deleting a post
      const response = await fetch(`${host}/api/post/deletepost/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json' , 
          'auth-token': localStorage.getItem('token')
        },
      });
      
      const json =  response.json();
      console.log(json);

      const newPosts = posts.filter((post) =>{
        return (post._id !== id);;
      })
      // filter will check add those posts whose id != the provided one.
      setPosts(newPosts);
    }

    //Update the article
    const editPost = async(id, heading , description) => {
      //add api
      console.log(id)
      const response = await fetch(`${host}/api/post/updatepost/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' , 
          'auth-token': localStorage.getItem('token')
        },
       
        body: JSON.stringify({heading , description}) 
      });
      const json =  await response.json(); 
      console.log(json);
      
      let newNotes = JSON.parse(JSON.stringify(posts));
      

        for (let index = 0; index < posts.length; index++) {
          const element = posts[index];
          if(element._id === id){
            posts[index].heading = heading;
            posts[index].description = description;
            break;
          }
          setPosts(newNotes);
        }
    }

     

    return(
        <postContext.Provider value = {{posts , addPost , deletePost , editPost , globalData,  getArticle}}>
            {props.children}
        </postContext.Provider>
    )
}

export default PostState;