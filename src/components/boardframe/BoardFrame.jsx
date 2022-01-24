import React from 'react';
import Board from '../board/Board';
// import ToolBox from '../toolbox/ToolBox';


import './style.css';

class BoardFrame extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      color: "#000000",
      size: "5",
    }
  }

  render() {

    return (
<div className='boardframe'>

  <div className='tools-section flex-column'>
    <div className='color-picker-container'>
      Brush Color: &nbsp;
      <input type="color" value={ this.state.color } onChange={ this.changeColor.bind(this) } />
    </div>

    <div className='brushsize-container'>
      Brush Size: &nbsp;
      <input type="range" min="1" max="100" className="slider" id="myRange"
        value={ this.state.size }
        onChange={ this.changeSize.bind(this) }
      />
      <span>{ this.state.size } px</span>
    </div>

      <svg id="brush-size-circle" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r={ this.state.size / 2 } stroke={ this.state.color } strokeWidth="2" fill="none"/>
      </svg>
      

    <div>
      
    </div>
  </div>

  <div className='board-container'>
    <Board color={ this.state.color } size={ this.state.size } ></Board>
  </div>
</div>
    )
  }

  changeColor(params) {
    this.setState({
      color: params.target.value
    })
  }

  changeSize(params) {
    this.setState({
      size: params.target.value
    })
  }
}

export default BoardFrame;