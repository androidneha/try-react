import React, { Component } from 'react'

class PostDetail extends Component {
    constructor (props) {
        super(props)
        this.titleWasClicked = this.titleWasClicked.bind(this)
    }
    titleWasClicked (event) {
        event.preventDefault
        alert('Hello')
    }
    render() {
        const {post} = this.props
        return (
            <div>
                <h1 onClick={this.titleWasClicked}>{post.title}</h1>
                <h5>{post.content}</h5>
            </div>
        );
    }
}

export default PostDetail;