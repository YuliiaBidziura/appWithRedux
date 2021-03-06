import React from "react";
import Post from "./Post";
import {connect} from 'react-redux'

const Posts = ({syncPosts}) => {
    return !syncPosts.length ? <p className="text-center">No posts</p> : syncPosts.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = state => {
    console.log(state)
    return {
        syncPosts: state.posts.posts
    };
}

export default connect(mapStateToProps, null)(Posts);