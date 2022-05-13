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

    const dataFromApi = await (
      await fetch('https://jsonplaceholder.typicode.com/users/1')
    ).json();

    dataFromApi &&
      this.setState({
        data: { ...dataFromApi },
      });

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
        {[
          this.state.showText && (
            <NiceText colorClass={colorClass} name={this.state.data.name} />
          ),
          this.state.showText &&
            this.props.names.map((name, idx) => (
              <NiceText
                key={idx}
                idx={idx}
                colorClass={colorClass}
                name={name}
              />
            )),
        ]}
        <button className='changeClr' onClick={this.pressed}>
          {`toggle text`}
        </button>
      </React.Fragment>
    );
  }
}
