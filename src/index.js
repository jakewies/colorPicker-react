import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const backgroundColor = { background: this.state.value };

    return (
      <div className="container" style={backgroundColor}>
        <input type="text" placeholder="color" onChange={this.handleOnChange} />
      </div>
    );
  }
}

ReactDOM.render(<ColorPicker />, document.getElementById('root'));
