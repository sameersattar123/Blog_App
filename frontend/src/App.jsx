import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import ErrorPage from './Pages/ErrorPage'
import Home from './Pages/Home'
import PostDetail from './Pages/PostDetail'
import Login from './Pages/Login'
import Register from './Pages/Register'
import UserProfile from './Pages/UserProfile'
import Authors from './Pages/Authors'
import CreatePost from './Pages/CreatePost'
import CategoryPosts from './Pages/CategoryPosts'
import AuthorPosts from './Pages/AuthorPosts'
import Dashboard from './Pages/Dashboard'
import Logout from './Pages/Logout'
import EditPost from './Pages/EditPost'
import DeletePost from './Pages/DeletePost'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element : <Layout/>,
      errorElement : <ErrorPage/>,
      children : [
        { path: '/', element: <Home/> },
        { path: '/posts/:id', element: <PostDetail/> },
        { path: '/register', element: <Register/> },
        { path: '/login', element: <Login/> },
        { path: '/profile/:id', element: <UserProfile/> },
        { path: '/authors', element: <Authors/> },
        { path: '/create', element: <CreatePost/> },
        { path: '/posts/categories/:category', element: <CategoryPosts/> },
        { path: '/posts/users/:id', element: <AuthorPosts/> },
        { path: '/myposts/:id', element: <Dashboard/> },
        { path: '/logout', element: <Logout/> },
        { path: '/posts/:id/edit', element: <EditPost/> },
        { path: '/posts/:id/delete', element: <DeletePost/> },
      ]
      } 
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
