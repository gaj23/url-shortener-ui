import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      long_url: ''
    };
  }

  handleNameChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const newUrl = {
      ...this.state
    }
    this.props.addUrl(newUrl);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', long_url: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={event => this.handleNameChange(event)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='long_url'
          value={this.state.long_url}
          onChange={event => this.handleNameChange(event)}
        />

        <button onClick={event => this.handleSubmit(event)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
