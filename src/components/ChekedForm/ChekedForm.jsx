import css from './ChekedForm.module.css';
const { Component } = require('react');

class ChekedForm extends Component {
  state = {
    age: '',
  };

  handleCheck = ({ target: { value } }) => {
    this.setState({
      age: value,
    });
  };

  render() {
    const { age } = this.state;
    return (
      <>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleCheck}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
      </>
    );
  }
}

export default ChekedForm;
