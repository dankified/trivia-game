import React, {Component} from 'react';
import axios from 'axios';
import Questions from './Questions';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      score: 0
    }
  }


  async componentDidMount() { 
    let data;
    ({data} = await axios.get('/api/questions').catch(e => console.log(e)));

    this.setState({
      questions: data
    })

  }

  render() {
    return (
      <div id="questions-div">
        <Questions questions={this.state.questions}/>        
      </div>
    )
  }
}