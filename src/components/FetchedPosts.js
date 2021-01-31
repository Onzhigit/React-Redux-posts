import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Post from './Post'
import Loader from './Loader'
import {fetchPosts} from '../redux/actions'

const FetchedPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => {
    return state.posts.fetchedPosts
  })
  const loading = useSelector((state) => {
    return state.app.loading
  })

  if (loading) {
    return <Loader />
  }
  if (!posts.length) {
    return <button className="btn btn-primary"
                   onClick={() => {dispatch(fetchPosts())}}
                   >Загрузить</button>
  }
  return (
    posts.map(post => <Post post={post} key={post.id}/>)
  )
}

export default FetchedPosts
