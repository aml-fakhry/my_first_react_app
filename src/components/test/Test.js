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
          <NiceText idx={idx} colorClass={colorClass} name={name} />
        ))}
        <button className='changeClr' onClick={this.pressed}>
          {`change Color to ${colorToggle}`}
        </button>
      </React.Fragment>
    );
  }
}

function NiceText(props) {
  return (
    <h1 key={props.idx} className={`testStyle ${props.colorClass}`}>
      HALLO REACT YA {props.name}
    </h1>
  );
}
