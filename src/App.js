import React from 'react'
import MainBrand from './components/MainBrand'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import PostState from './context/posts/PostState';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { NewArticle } from './components/NewArticle'
import { UpdatePost } from './components/UpdatePost'
import UpdateState from './context/posts/UpdateState'
import { GlobalPosts } from './components/GlobalPosts'
import { ArticleDetails } from './components/ArticleDetails'


function App() {
  return (
    <PostState>
      <UpdateState>
        <Router>
          <div>


            <Switch>
              <Route exact path="/">
                <MainBrand />
                <Posts />
              </Route>

              <Route exact path="/home">
              <Navbar />
                <MainBrand />
                <GlobalPosts />
              </Route>

              <Route exact path="/newarticle">
              <Navbar />
                <NewArticle />
              </Route>

              <Route exact path="/signin">
                <Navbar/>
                <SignIn />
              </Route>

              <Route exact path="/updatepost">
              <Navbar />
                <UpdatePost />
              </Route>

              <Route exact path="/signup">
              <Navbar />
                <SignUp />
              </Route>

              <Route exact path="/globalfeed">
              <Navbar />
                <MainBrand />
                <GlobalPosts />
              </Route>

              <Route exact path="/articledetails">
              <Navbar />
               <ArticleDetails/>
              </Route>

              <Route exact path="/userfeed">
              <Navbar />
                <MainBrand />
                <Posts />
              </Route>

            </Switch>
          </div>
        </Router>
      </UpdateState>
    </PostState>
  )
}

export default App
