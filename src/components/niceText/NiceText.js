import React from 'react';
export default class NiceText extends React.Component {
  componentDidMount() {
    console.log('Nice Text is ready');
  }

  componentDidUpdate() {
    console.log('Nice Text updated');
  }
  render() {
    return (
      <h1 key={this.props.idx} className={`testStyle ${this.props.colorClass}`}>
        HALLO REACT YA {this.props.name}
      </h1>
    );
  }
}
