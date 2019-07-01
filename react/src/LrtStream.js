import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import { Title } from './components/Title';
//import PlayButton from './components/PlayButton.js'

class LrtStream extends Component {
    constructor(props){
        super(props);

        this.state = {
            URL: null
          };
    }

    componentDidMount() {
        fetch('https://www.lrt.lt/servisai/stream_url/live/get_live_url.php?channel=LTV1')
          .then(response => response.json())
          .then(data => {
              this.setState({URL:data.response.data.content});
            });
      }
    
    render () {
      return (
        <div >
        <Title title='Tiesiogiai'/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <ReactPlayer url={this.state.URL} playing controls='true'/>
        </div>
    </div>
      );
    }
  }
  export default  LrtStream;