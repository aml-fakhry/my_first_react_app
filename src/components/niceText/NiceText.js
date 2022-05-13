import React from 'react';
export default class NiceText extends React.Component {
  onClick = () => {
    console.log(
      'this log is because of the listener you added in the nice text component'
    );
  };
  componentDidMount() {
    window.addEventListener('click', this.onClick);
    console.log('Nice Text is ready');
  }

  componentDidUpdate() {
    console.log('Nice Text updated');
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClick);
    console.log('Nice Text will be removed');
  }

  render() {
    return (
      <h1 key={this.props.idx} className={`testStyle ${this.props.colorClass}`}>
        HALLO REACT YA {this.props.name}
      </h1>
    );
  }
}
