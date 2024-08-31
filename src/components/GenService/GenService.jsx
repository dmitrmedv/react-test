import { Component } from 'react';

const services = [
  {
    name: 'stovg',
    label: 'СТОВГ',
  },
  {
    name: 'abon',
    label: 'Абонвідділ',
  },
  {
    name: 'skplg',
    label: 'СКПЛГ',
  },
  {
    name: 'skpga',
    label: 'СКПГА',
  },
  {
    name: 'vtv',
    label: 'ВТВ',
  },
  {
    name: 'svg',
    label: 'СВіП',
  },
  {
    name: 'jur',
    label: 'Юридичний відділ',
  },
  {
    name: 'avar',
    label: 'Аварійна служба',
  },
  {
    name: 'sepgdv',
    label: 'СЕПЗ',
  },
];

export class GenService extends Component {
  state = {};

  handlerCheck = e => {
    this.setState(prevState => {
      return {
        ...prevState.services,
        [e.target.name]: e.target.checked,
      };
    });
    this.props.handleAddServ(e);
  };

  render() {
    return services.map(item => {
      return (
        <label key={item.name} onChange={this.handlerCheck}>
          {item.label}
          <input
            type="checkbox"
            value={item.label}
            name={item.name}
            checked={this.state[item.name]}
          />
        </label>
      );
    });
  }
}
