var React = require('react');
var ReactDOM = require('react-dom');

class DelayedButton extends React.Component{
  constructor(props){
    super(props)
    //this.onDelayedClick = props.onDelayedClick
    this.delay = props.delay 
  }

  //setTimeout(onDelayedClick(event), delay)
  delayCallback(event){
    event.persist()
      setTimeout(this.props.onDelayedClick, this.delay, event)
  }

    render(){
    return <button onClick={this.delayCallback.bind(this)}></button>
  }

  }


module.exports = DelayedButton