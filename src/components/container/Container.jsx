import React from 'react';
import Board from '../board/Board';

import './style.css';

class Container extends React.Component
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
      <div className='container'>
        <div className='tools-section flex-column'>
          <div className='color-picker-container'>
            Brush Color: &nbsp;
            <input type="color" value={ this.state.color } onChange={ this.changeColor.bind(this) } />
          </div>

          <div className='brushsize-container'>
            Brush Size: &nbsp;
            <select value={ this.state.size } onChange={ this.changeSize.bind(this) }>
              <option> 5 </option>
              <option> 10 </option>
              <option> 15 </option>
              <option> 20 </option>
              <option> 25 </option>
              <option> 30 </option>
            </select>
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

export default Container;