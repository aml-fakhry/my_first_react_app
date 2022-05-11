import React from 'react';
import './Test.css';
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
    };
  }

  pressed = () => {
    console.log('pressed.');
    this.setState({
      color: this.state.color === 'red' ? 'green' : 'red',
    });
  };

  render() {
    const colorClass = this.state.color;
    const colorToggle = this.state.color === 'red' ? 'green' : 'red';
    return (
      <React.Fragment>
        {this.props.names.map((name, idx) => (
          <h1 key={idx} className={`testStyle ${colorClass}`}>
            HALLO REACT YA {name}
          </h1>
        ))}
        <button className='changeClr' onClick={this.pressed}>
          {`change Color to ${colorToggle}`}
        </button>
      </React.Fragment>
    );
  }
}
