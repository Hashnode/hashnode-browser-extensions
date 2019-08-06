import React from 'react'
import { PostCard } from './PostCard'
import Loader from './Loader'

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Waypoint } from 'react-waypoint';

const STORIES_FEED_QUERY = gql`
  query storiesFeed($type: FeedType!, $page: Int = 0){
    storiesFeed(type: $type,page: $page){
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

export default class StoriesFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.page = 0
    }

    componentDidMount() {
        window.scrollTo(0, 0)
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
            <Query notifyOnNetworkStatusChange={true} query={STORIES_FEED_QUERY} variables={{ type: 'GLOBAL', page: 0 }}>
                {({ data, fetchMore, loading, error }) => {
                    if (error) return <small>Error in loading posts</small>
                    return (
                        <div>
                            <ul>
                                {
                                    data.storiesFeed && data.storiesFeed.map((post, index) => {
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
                                                        page: (data.storiesFeed && Math.floor((data.storiesFeed.length / 5))) || 0
                                                    },
                                                    updateQuery: (prev, { fetchMoreResult }) => {
                                                        if (!fetchMoreResult) return prev
                                                        return Object.assign({}, prev, {
                                                            storiesFeed: [...prev.storiesFeed, ...fetchMoreResult.storiesFeed]
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
