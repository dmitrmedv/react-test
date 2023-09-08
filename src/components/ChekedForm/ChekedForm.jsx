import css from './ChekedForm.module.css';
const { Component } = require('react');

class ChekedForm extends Component {
  state = {
    level: '',
  };

  handleCheck = ({ target: { value } }) => {
    this.setState({
      level: value,
    });
  };

  render() {
    return (
      <>
        <label>
          <input
            type="radio"
            onChange={this.handleCheck}
            value="junior"
            checked={this.state.level === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            onChange={this.handleCheck}
            value="middle"
            checked={this.state.level === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            onChange={this.handleCheck}
            value="senior"
            checked={this.state.level === 'senior'}
          />
          Senior
        </label>
      </>
    );
  }
}

export default ChekedForm;
