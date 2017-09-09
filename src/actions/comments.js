import * as api from "../utils/api";

export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'


/* Action Creators */

export function loadAllComments(postId) {
  return function (dispatch) {
    return api.getComments(postId).then(response => {
      if (response) {
        dispatch(getComments(response.data))
      }
    })
  }
}

export function addCommentVote(commentId) {
  return function (dispatch) {
    return api.incrementCommentVote(commentId).then(response => {
      if (response) {
        return dispatch(updateComment(response.data))
      }
    })
  }
}

export function subtractCommentVote(commentId) {
  return function (dispatch) {
    return api.decrementCommentVote(commentId).then(response => {
      if (response) {
        return dispatch(updateComment(response.data))
      }
    })
  }
}

export function addNewComment(comment) {
  return function (dispatch) {
    return api.createComment(comment).then(response => {
      if (response) {
        dispatch(addComment(response.data))
      }
    })
  }
}

export function editComment(comment) {
  return function (dispatch) {
    return api.updateComment(comment).then(response => {
      if (response) {
        return dispatch(updateComment(response.data))
      }
    })
  }
}

export function removeComment(commentId) {
  return function (dispatch) {
    return api.deleteComment(commentId).then(response => {
      if (response) {
        dispatch(deleteComment(commentId))
      }
    })
  }
}


/* Actions */
export function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments: comments
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment: comment
  }
}

export function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment: comment
  }
}

export function deleteComment(commentId) {
  return {
    type: DELETE_COMMENT,
    comment: commentId
  }
}