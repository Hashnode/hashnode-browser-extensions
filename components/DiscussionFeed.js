import React from 'react'
import { PostCard } from './PostCard'
import Loader from './Loader'

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Waypoint } from 'react-waypoint';

const DISCUSSIONS_FEED_QUERY = gql`
  query discussionsFeed($type: FeedType!, $page: Int = 0){
    discussionsFeed(type: $type, page: $page){
      title
      coverImage
      partOfPublication
      cuid
      slug
      brief
      author{
        username
        photo
      }
      totalReactions
      responseCount
    }
  }
`

export default class DiscussionsFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.page = 0
    }

    postsRender(posts) {
        return posts.map((post, index) => {
            return (
                <li className='post' key={index}>
                    <PostCard post={post} />
                </li>
            )
        })
    }

    render() {
        return (
            <Query query={DISCUSSIONS_FEED_QUERY} variables={{ type: 'GLOBAL', page: 0 }}>
                {({ data, fetchMore, loading, error }) => {
                    if (error) return <small>Error in loading posts</small>
                    return (
                        <div>
                            <ul>
                                {
                                    data.discussionsFeed && data.discussionsFeed.map((post, index) => {
                                        return (
                                            <li className='post' key={index}>
                                                <PostCard post={post} />
                                            </li>
                                        )
                                    })
                                }
                                {!loading &&
                                    <li>

                                        <Waypoint topOffset="-20%" onEnter={
                                            () => {
                                                fetchMore({
                                                    variables: {
                                                        page: (data.discussionsFeed && Math.floor((data.discussionsFeed.length / 5))) || 0
                                                    },
                                                    updateQuery: (prev, { fetchMoreResult }) => {
                                                        if (!fetchMoreResult) return prev
                                                        return Object.assign({}, prev, {
                                                            discussionsFeed: [...prev.discussionsFeed, ...fetchMoreResult.discussionsFeed]
                                                        })
                                                    }
                                                })
                                            }
                                        }
                                        ></Waypoint>
                                    </li>
                                }
                            </ul>
                            {loading && <Loader />}
                        </div>
                    )
                }}
            </Query>
        )
    }
}
