import React from 'react'

const thumbsImage = require('../images/thumbs.png')
const commentsImage = require('../images/comments.png')
const dummyUserImage = require('../images/dummyUser.png')

const imageResizer = require('../utils/imageResizer').default;

const browserType = process.env.browser || 'chrome'
const utmVal = (browserType === 'chrome') ? 'chrome_extension' : 'FF_extension'

export class PostCard extends React.Component {

  loadProfileImage (src) {
    if (!src) {
      return
    }
    
    if(src === '?sz=200') {
      return dummyUserImage;
    }
    
    return imageResizer(src, {w: 60, h: 60, c: 'face'}, dummyUserImage)
  }

  render () {
    const post = this.props.post
    return (
      <div>
        {post.coverImage && (
          <a
            href={`https://hashnode.com/post/${post.partOfPublication ? post.cuid : post.slug+'-'+post.cuid}?utm_source=${utmVal}&utm_medium=extension`}
            target='_blank'
          >
            <img className='post-cover' src={post.coverImage} width='100%' />
          </a>
        )}
        <div className='post-details'>
          <a
            href={`https://hashnode.com/post/${post.partOfPublication ? post.cuid : post.slug+'-'+post.cuid}?utm_source=${utmVal}&utm_medium=extension`}
            target='_blank'
          >
            <h3 className='post-title'>{post.title}</h3>
            { post.brief && <p className='post-desc'>{post.brief.substring(0, 140)}...</p> }
          </a>
          <div className='post-footer'>
            <a
              href={`${
                post.author
                  ? 'https://hashnode.com/@' +
                    post.author.username +
                    `?utm_source=${utmVal}&utm_medium=extension`
                  : `https://hashnode.com/post/${post.slug}-${
                    post.cuid
                  }?utm_source=${utmVal}&utm_medium=extension`
              }`}
              target='_blank'
              className='author'
              style={{
                backgroundImage:
                  'url("' +
                  ((post.author &&
                    post.author.photo &&
                    this.loadProfileImage(post.author.photo)) ||
                    dummyUserImage) +
                  '")'
              }}
            >
              {/* <img src={((post.author && post.author.photo && this.loadProfileImage(post.author.photo)) || dummyUserImage)} /> */}
            </a>
            <div className='post-activity'>
              <a
                href={`https://hashnode.com/post/${post.partOfPublication ? post.cuid : post.slug+'-'+post.cuid}?utm_source=${utmVal}&utm_medium=extension`}
                target='_blank'
                className='reactions'
              >
                <img src={thumbsImage} />
                {post.totalReactions}
              </a>
              <a
                href={`https://hashnode.com/post/${post.partOfPublication ? post.cuid : post.slug+'-'+post.cuid}?utm_source=${utmVal}&utm_medium=extension`}
                target='_blank'
                className='comments'
              >
                <img src={commentsImage} />
                {post.responseCount}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostCard
