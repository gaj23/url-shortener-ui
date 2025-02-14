import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
      .then(data => this.setState({urls: data.urls}))
      .catch(error => console.log(`We're having a problem: ${error}`))
  }

  addUrl = url => {
    postUrl(url)
      .then(newUrl => this.setState({ urls: [...this.state.urls, newUrl] }))
      .catch(error => console.log(`We're having a problem: ${error}`))
  }


  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl} />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
