import React, { Component } from 'react'

const thumbsImage = require('../images/thumbs.png');
const commentsImage = require('../images/comments.png');
const dummyUserImage = require('../images/dummyUser.png');

export class PostCard extends Component {
    constructor(props) {
        super(props);
    }

    getReplacedImage(src) {
        var newSrc = 'https://cdn.hashnode.com/res/hashnode/image/upload/';
        var parts = src.split('/upload/');
        var format = parts[1].substring(parts[1].lastIndexOf('.') + 1);
        var imageNameParts = parts[1].substring(1, src.split('/upload/')[1].length).split('/');
        newSrc += (imageNameParts[1].split('.')[0] + '/' + imageNameParts[0] + '.' + format);
        return newSrc;
    }

    loadProfileImage(src){
        if (src.indexOf('//res.cloudinary.com') !== -1 && src.indexOf('/upload/') !== -1) {
            return this.getReplacedImage(src);
        }
        return src;
    }

    render() {

        const post = this.props.post;

        return (
            <div>
                {post.coverImage && <img className="post-cover" src={post.coverImage} width="100%" />}
                <div className="post-details">
                    <a href={`https://hashnode.com/post/${post.slug}-${post.cuid}?utm_source=chrome_ext`}>
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-desc">
                            {post.brief}
                        </p>
                    </a>
                    <div className="post-footer">
                        <a href={`${post.author ? 'https://hashnode.com/@'+post.author.username+'?utm_source=chrome_ext' : ''}`} target="_blank" className="author">
                            <img src={((post.author && this.loadProfileImage(post.author.photo)) || dummyUserImage)} />
                        </a>
                        <div className="post-activity">
                            <span className="reactions">
                                <img src={thumbsImage} />
                                {post.totalReactions}
                            </span>
                            <span className="comments">
                                <img src={commentsImage} />
                                {post.responseCount}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard
