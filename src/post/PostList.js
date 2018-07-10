import React, { Component } from 'react'
import PostData from '../data/posts.json'

import PostDetail from './PostDetail'

class PostList extends Component {
    render() {
        return (
            <div>
                {PostData.map((postDetail, index) => {
                return <PostDetail post={postDetail} key={`post-list-key ${index}`}/>
            })}
            </div>
        );
    }
}

export default PostList;