import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Counter } from './Counter/Counter';
import { Component } from 'react';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
    count: 1,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  render() {
    return (
      <>
        <Profile user={user} toggleModal={this.toggleModal} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        <Counter />
        {this.state.showModal && <Modal toggleModal={this.toggleModal} />}
      </>
    );
  }
}
