import React, { Component } from 'react'

class PostDetail extends Component {
    constructor (props) {
        super(props)
        this.titleWasClicked = this.titleWasClicked.bind(this)
        this.toggleClicked = this.toggleClicked.bind(this)
        this.state = {
            showContent: true,
            postItem: null
        }
    }
    titleWasClicked (event) {
        const {dataCallBack} = this.props;
        if (dataCallBack !== undefined) {
            dataCallBack('Hello')
        }
        const newPostItem = {
            title: 'My New awesome state',
            content: this.props.post.content
        }
        this.setState({
            postItem: newPostItem
        })
    }
    toggleClicked(event) {
        event.preventDefault
        const {postItem} = this.state
        const {showContent} = this.state
        this.setState({
            showContent: !showContent
        })
    }
    componentDidMount() {
        const {post} = this.props
        this.setState({
            postItem: post
        })
    }
    render() {
        const {postItem} = this.state;
        const {showContent} = this.state;
        return (
            <div>
                {postItem !== null ? <div>
                    <h1 onClick={this.titleWasClicked}>{postItem.title}</h1>
                    {showContent == true ? <p>{postItem.content}</p> : ''}
                    <button onClick={this.toggleClicked}>Click ME</button>
                </div> : ''}
            </div>
        );
    }
}

export default PostDetail;