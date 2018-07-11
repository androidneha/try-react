import React, { Component } from 'react'
import PostData from '../data/posts.json'

import PostDetail from './PostDetail'

class PostList extends Component {
    constructor (props) {
        super(props)
        this.handleCallback = this.handleCallback.bind(this)
    }
    handleCallback(msg) {
        console.log(this)
    }
    render() {
        return (
            <div>
                {PostData.map((postDetail, index) => {
                return <PostDetail
                    post={postDetail}
                    key={`post-list-key ${index}`}
                    dataCallBack={this.handleCallback}/>
            })}
            </div>
        );
    }
}

export default PostList;