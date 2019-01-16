import React, { Component } from 'react'
import axios from 'axios'

import './styles/App.scss'

import PostCard from './components/PostCard'
import Loader from './components/Loader'

const baseURL = 'https://hashnode.com'
const browserType = process.env.browser || 'chrome'
const utmVal = (browserType === 'chrome') ? 'chrome_extension' : 'FF_extension'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      context: 'hot',
      posts: [],
      isLoading: false
    }
  }

  fetchHotPosts () {
    window.scrollTo(0, 0)
    let _this = this
    this.setState({ isLoading: true })
    axios.get(`${baseURL}/ajax/posts/hot`)
      .then(function (result) {
        _this.setState({
          posts: result.data.posts,
          context: 'hot',
          isLoading: false
        })
      })
  }

  fetchTrendingPosts () {
    window.scrollTo(0, 0)
    let _this = this
    this.setState({ isLoading: true })
    axios.get(`${baseURL}/ajax/posts/stories/trending`)
      .then(function (result) {
        _this.setState({
          posts: result.data.posts,
          context: 'trending',
          isLoading: false
        })
      })
  }

  componentDidMount () {
    this.fetchHotPosts()
  }

  render () {
    const posts = this.state.posts

    const postsRender = posts.map((post, index) => {
      return <li className='post' key={index}>
        <PostCard post={post} />
      </li>
    }).reverse()

    return (
      <div id='app'>
        <div className='header'>
          <a href={`https://hashnode.com?utm_source=${utmVal}&utm_medium=extension`} className='logo' target='_blank'>
            <img src={require('./images/hn-logo.png')} />
          </a>
          <div className='nav'>
            <button className={this.state.context === 'hot' ? 'active' : ''} onClick={() => this.fetchHotPosts()}> Hot discussions </button>
            <button className={this.state.context === 'trending' ? 'active' : ''} onClick={() => this.fetchTrendingPosts()}> Trending stories </button>
          </div>
        </div>
        <div className='content'>
          {
            (this.state.isLoading && <Loader />) ||
            (this.state.posts.length > 0 ? <ul>{postsRender}</ul> : <small>Error in loading posts</small>)
          }
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
