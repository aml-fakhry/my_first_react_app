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
      data: {},
    };
  }

  async componentDidMount() {
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
      <div>
        {this.state.showText && (
          <NiceText colorClass={colorClass} name={this.props.name} />
        )}
        <button className='changeClr' onClick={this.pressed}>
          {`toggle text`}
        </button>
      </div>
    );
  }
}
