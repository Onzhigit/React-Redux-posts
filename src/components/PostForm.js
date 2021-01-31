import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from '../redux/actions'
import {Alert} from './Alert'

const PostForm = (props) => {

  const [state, setState] = useState({
    title: ''
  })

  const submitHandler = (event) => {
    event.preventDefault()
    const {title} = state
    if(!title.trim()) {
      return props.showAlert('Название поста не может быть пустым')
    }

    const newPost = {
      title: title, id: Date.now().toString()
    }
    props.createPost(newPost)
    setState({title: ''})
  }

  const changeInputHandler = (event) => {
    setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  return (
    <form onSubmit={submitHandler}>
     { props.alert && <Alert text={props.alert}/> }
      <div className="form-group">
        <label htmlFor="title">Заголовок поста</label>
        <input
            type="text"
            className="form-control"
            id="title"
            value={state.title}
            name="title"
            onChange={changeInputHandler}
            />
      </div>
      <button className="btn btn-success" type="submit">Создать</button>
    </form>
  )
}

const mapDispatchToProps = {
  createPost: createPost,
  showAlert: showAlert
}

const mapStateToProps = state => ({
  alert: state.app.alert

})

export default connect(mapStateToProps, mapDispatchToProps)( PostForm)
