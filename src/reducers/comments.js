import {
  GET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from "../actions/comments"
import initialStates from './initialStates'

export default function comments(state = initialStates.comments, action) {
  const {comment, comments} = action
  switch (action.type) {

    case GET_COMMENTS:
      return comments

    case ADD_COMMENT:
      return [
        ...state,
        Object.assign({}, comment)
      ]

    case UPDATE_COMMENT:
      return state.map(currentComment => {
        if (currentComment.id === comment.id) {
          return comment
        }
        return currentComment
      })

    case DELETE_COMMENT:
      return state.filter(currentComment => currentComment.id !== comment)

    default:
      return state
  }
}