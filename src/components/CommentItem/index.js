// Write your code here
import './index.css'

const CreateComment = props => {
  const {eachComment, onClickLikeBtn, onDeleteComment} = props
  const {id, username, comment, date, isLiked, profileBg} = eachComment
  const firstLetter = username[0].toUpperCase()

  const onLikeClcik = () => {
    onClickLikeBtn(id)
  }

  const onDeleteFunc = () => {
    onDeleteComment(id)
  }

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="each-comment-container">
      <div className="comments-top-section">
        <div className="comment-top-section-css">
          <p className={`each-container-profile ${profileBg}`}>{firstLetter}</p>
          <div className="name-and-comment-section">
            <h1 className="comment-heading">
              {username}
              <span className="comment-time">{date}</span>
            </h1>
            <p className="each-comment">{comment}</p>
          </div>
        </div>
      </div>
      <div className="like-and-del-btn-section">
        <button className="like-btn" type="button" onClick={onLikeClcik}>
          <img src={likeImgUrl} alt="like" className="like-img" />
          <p className={`btn-text ${isLiked ? 'btn-text-blue' : ''}`}>Like</p>
        </button>
        <button
          className="like-btn"
          type="button"
          onClick={onDeleteFunc}
          data-testId="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CreateComment
