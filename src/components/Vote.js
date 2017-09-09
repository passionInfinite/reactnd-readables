import React from 'react'
import {bindActionCreators} from "redux";
import * as postActions from '../actions/posts'
import * as commentActions from '../actions/comments'
import {connect} from "react-redux";

class Vote extends React.Component {

  state = {
    size: this.props.size,
    id: this.props.id,
    type: this.props.type
  }

  upVote = e => {
    e.preventDefault()
    switch (this.state.type) {
      case "post":
        return this.props.actions.addVote(this.state.id)
      case "comment":
        return this.props.actions.addCommentVote(this.state.id)
      default:
        console.log("No proper vote method call!")
    }
  }

  downVote = e => {
    e.preventDefault()
    switch (this.state.type) {
      case "post":
        return this.props.actions.subtractVote(this.state.id)
      case "comment":
        return this.props.actions.subtractCommentVote(this.state.id)
      default:
        console.log("No proper vote method call!")
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      size: nextProps.size,
      id: nextProps.id
    })
  }


  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-success btn-sm" style={{height: this.props.size, width: this.props.size, lineHeight:0}} onClick={this.upVote} ><i className="fa fa-plus" style={{fontSize: 10, marginLeft: -3, position: "absolute", marginTop: -5}}></i></button>
          <button className="btn btn-danger btn-sm" style={{height: this.props.size, width: this.props.size, lineHeight:0, marginLeft:10}} onClick={this.downVote} ><i className="fa fa-minus" style={{fontSize: 10, marginLeft: -3, position: "absolute", marginTop: -5}}></i></button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  let actions = {...postActions, ...commentActions};
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)