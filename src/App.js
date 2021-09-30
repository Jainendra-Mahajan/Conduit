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


function App() {
  return (
    <PostState>
      <UpdateState>
        <Router>
          <div>

            <Navbar />

            <Switch>
              <Route exact path="/">
                <MainBrand />
                <Posts />
              </Route>

              <Route exact path="/home">
                <MainBrand />
                <GlobalPosts />
              </Route>

              <Route exact path="/newarticle">
                <NewArticle />
              </Route>

              <Route exact path="/signin">
                <SignIn />
              </Route>

              <Route exact path="/updatepost">
                <UpdatePost />
              </Route>

              <Route exact path="/signup">
                <SignUp />
              </Route>

              <Route exact path="/globalfeed">
                <GlobalPosts />
              </Route>

              <Route exact path="/userfeed">
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
