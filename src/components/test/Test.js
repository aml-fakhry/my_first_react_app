import React from 'react';
import './Test.css';
import NiceText from './../niceText/NiceText';

export default class Test extends React.Component {
  intervalId;
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      showText: true,
    };
  }

  componentDidMount() {
    console.log('Test is ready');

    this.intervalId = setInterval(() => {
      this.state.showText &&
        this.setState({
          color: this.state.color === 'red' ? 'green' : 'red',
        });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('Test updated');
  }

  componentWillUnmount() {
    console.log('clear intervals');
    clearInterval(this.intervalId);
  }

  pressed = () => {
    console.log('pressed.');
    this.setState({
      showText: !this.state.showText,
    });
  };

  render() {
    const colorClass = this.state.color;

    return (
      <React.Fragment>
        {this.state.showText &&
          this.props.names.map((name, idx) => (
            <NiceText key={idx} idx={idx} colorClass={colorClass} name={name} />
          ))}
        <button className='changeClr' onClick={this.pressed}>
          {`toggle text`}
        </button>
      </React.Fragment>
    );
  }
}
/*
function NiceText(props) {
  return (
    <h1 key={props.idx} className={`testStyle ${props.colorClass}`}>
      HALLO REACT YA {props.name}
    </h1>
  );
} */
