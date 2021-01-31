import React from 'react'
import {connect} from 'react-redux'
import Post from './Post';

const Posts = ( { myPost } ) => {
  if(!myPost.length) {
    return <p className="text-center">Постов пока нет</p>
  }
  return myPost.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = state => {
  return {
    myPost: state.posts.posts
  }
}

export default connect(mapStateToProps, null)(Posts)
