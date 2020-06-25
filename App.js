import React from 'react'
import axios from 'axios'

import './styles/App.scss'

import StoriesFeed from './components/StoriesFeed'
import DiscussionsFeed from './components/DiscussionFeed'

const baseURL = 'https://hashnode.com'
const browserType = process.env.browser || 'chrome'
const utmVal = (browserType === 'chrome') ? 'chrome_extension' : 'FF_extension'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.page = 0
    this.state = {
      context: 'trending',
      posts: [],
      isLoading: false
    }
  }

  render() {
    return (
      <div id='app'>
        <div className='header'>
          <a href={`https://hashnode.com?utm_source=${utmVal}&utm_medium=extension`} className='logo' target='_blank'>
            <img src={require('./images/hn-logo.png')} />
          </a>
          <div className='nav'>
            <button className={this.state.context === 'trending' ? 'active' : ''} onClick={() => this.setState({ context: 'trending' })}> Stories </button>
            <button className={this.state.context === 'hot' ? 'active' : ''} onClick={() => this.setState({ context: 'hot' })}> Q&amp;A </button>
          </div>
        </div>
        <div className='content'>
          { this.state.context === 'trending'? <StoriesFeed/> : <DiscussionsFeed/> }
        </div>
        <div className='footer'>
          <div>
            <a href={`https://hashnode.com?utm_source=${utmVal}&utm_medium=extension`} target='_blank' rel='noopener'>My feed</a> · <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <a href='https://hashnode.typeform.com/to/oeFvmK' target='_blank' rel='noopener'>Feedback</a>
        </div>
      </div>
    )
  }
}

export default App
