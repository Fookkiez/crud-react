import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Posts from './components/Posts'
import PostList from './components/PostList'

import './App.css'
import { UserProvider } from './provider/UserProvider'
import Users from './Users'

function App() {

  return (
    <>
      <div className='App'>
        <Router>
          <Nav />

          <Routes>
            <Route exact path='/' element={  <Home />}/>
            <Route exact path='about' element={<About /> }/>
            <Route exact path='contact' element={ <Contact />}/>
            <Route exact path='post' element={ <Posts />}/>
            <Route path='postlist' element={ <PostList />}/>
          </Routes>
        </Router>

        <UserProvider>
          <Users />
        </UserProvider>

      </div>
    </>
  )
}

export default App
