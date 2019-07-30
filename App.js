import React from 'react'
import axios from 'axios'

import './styles/App.scss'

import PostCard from './components/PostCard'
import Loader from './components/Loader'

const baseURL = 'https://hashnode.com'
const browserType = process.env.browser || 'chrome'
const utmVal = (browserType === 'chrome') ? 'chrome_extension' : 'FF_extension'

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const STORIES_FEED_QUERY = gql`
  query storiesFeed($limit: Int = 30){
    storiesFeed(limit: $limit){
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

const HOT_DISCUSSIONS_QUERY = gql`
  query hotDiscussions($limit: Int = 30){
    hotDiscussions(limit: $limit){
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

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      context: 'trending',
      posts: [],
      isLoading: false
    }
  }

  componentDidMount () {
  }

  render () {
    const postsRender = (posts) => {
      return posts.map((post, index) => {
                return <li className='post' key={index}>
                  <PostCard post={post} />
                </li>
             })
    }

    return (
      <div id='app'>
        <div className='header'>
          <a href={`https://hashnode.com?utm_source=${utmVal}&utm_medium=extension`} className='logo' target='_blank'>
            <img src={require('./images/hn-logo.png')} />
          </a>
          <div className='nav'>
            <button className={this.state.context === 'trending' ? 'active' : ''} onClick={() => this.setState({context: 'trending'})}> Stories </button>
            <button className={this.state.context === 'hot' ? 'active' : ''} onClick={() => this.setState({context: 'hot'})}> Q&amp;A </button>
          </div>
        </div>
        <div className='content'>
          <Query query={this.state.context === 'trending' ? STORIES_FEED_QUERY: (this.state.context === 'hot' && HOT_DISCUSSIONS_QUERY)} variables={{ limit: this.state.limit }}>
            {({ data, loading, error }) => {
              if (loading) return <Loader></Loader>
              if (error) return <small>Error in loading posts</small>

              const posts = this.state.context === 'trending' ? data.storiesFeed : data.hotDiscussions;
              return <ul>{postsRender(posts) }</ul>
            }}
          </Query>
        </div>
        <div className='footer'>
          <div>
            <a href={`https://hashnode.com?utm_source=${utmVal}&utm_medium=extension`} target='_blank' rel='noopener'>My feed</a> · <span>&copy; 2019</span>
          </div>
          <a href='https://hashnode.typeform.com/to/oeFvmK' target='_blank' rel='noopener'>Feedback</a>
        </div>
      </div>
    )
  }
}

export default App
