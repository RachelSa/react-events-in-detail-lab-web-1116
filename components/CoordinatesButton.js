var React = require('react');
var ReactDOM = require('react-dom');

class CoordinatesButton extends React.Component{
  constructor(props){
  super(props)
  this.onReceiveCoordinates = props.onReceiveCoordinates
  }

  getCoordinates(event, callback){
    var coordinates = [event.clientX, event.clientY]
    callback(coordinates)
  }

  render(){
    return (
      <button onClick={(event) => this.getCoordinates(event, this.onReceiveCoordinates)}></button>
    )
  }
}


module.exports = CoordinatesButton