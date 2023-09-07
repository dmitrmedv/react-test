import css from './ChekedForm.module.css';
const { Component } = require('react');

class ChekedForm extends Component {
  state = {
    check: true,
  };

  handleCheck = () => {
    this.setState(prevState => ({
      check: !prevState.check,
    }));
  };

  render() {
    return (
      <>
        <label className={css.box}>
          radio buttons
          <input type="checkbox" name="test" onChange={this.handleCheck} />
        </label>
        <button type="button" disabled={this.state.check}>
          SUBMIT
        </button>
      </>
    );
  }
}

export default ChekedForm;
