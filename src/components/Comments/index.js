import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import './index.css'

import {v4 as uudiv4} from 'uuid'

import CreateComment from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    usernameInput: '',
    userTextArea: '',
    initialCommentList: [],
  }

  onDeleteComment = id => {
    const {initialCommentList} = this.state
    const filteredRes = initialCommentList.filter(each => each.id !== id)
    this.setState({initialCommentList: filteredRes})
  }

  onClickLikeBtn = id => {
    const {initialCommentList} = this.state

    this.setState(prevState => ({
      initialCommentList: prevState.initialCommentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onSubmitComment = event => {
    event.preventDefault()
    const {usernameInput, userTextArea} = this.state

    const newObj = {
      id: uudiv4(),
      username: usernameInput,
      comment: userTextArea,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      profileBg:
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ],
    }

    this.setState(prevState => ({
      initialCommentList: [...prevState.initialCommentList, newObj],
      usernameInput: '',
      userTextArea: '',
    }))
  }

  onUsernameChange = event => {
    this.setState({usernameInput: event.target.value})
  }

  onuserTextChange = event => {
    this.setState({userTextArea: event.target.value})
  }

  render() {
    const {initialCommentList, userTextArea, usernameInput} = this.state

    return (
      <div className="bg-container">
        <form
          className="top-section"
          onSubmit={this.onSubmitComment}
          id="user-comment-form"
          name="comment"
        >
          <div>
            <h1 className="main-heading">Comments</h1>
            <p className="main-para">Say something about 4.0 Technologies</p>
            <input
              type="text"
              className="input-userName"
              placeholder="Your Name"
              onChange={this.onUsernameChange}
              value={usernameInput}
            />
            <br />
            <textarea
              rows="6"
              className="textarea-css"
              placeholder="Your Comment"
              value={userTextArea}
              onChange={this.onuserTextChange}
            />
            <br />
            <button type="submit" className="btn">
              Add Comment
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-img-css"
            alt="comments"
          />
        </form>
        <hr className="underline" />
        <div>
          <div className="comments-count">
            <p className="count-comment">{initialCommentList.length}</p>
            <p className="comment-css">Comments</p>
          </div>
          <ul className="comments-list-container">
            {initialCommentList.map(each => (
              <CreateComment
                eachComment={each}
                key={each.id}
                onClickLikeBtn={this.onClickLikeBtn}
                onDeleteComment={this.onDeleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
