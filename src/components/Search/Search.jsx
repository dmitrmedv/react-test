import { Component } from 'react';

export class Search extends Component {
  handleChange = e => {
    this.props.handleFilter(e.target.value);
  };
  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} />
      </form>
    );
  }
}
