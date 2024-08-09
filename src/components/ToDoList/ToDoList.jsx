import { Component } from 'react';
import friends from '../../data/friends.json';
import css from './ToDoList.module.css';
import { ToDo } from 'components/ToDo/ToDo';

export class ToDoList extends Component {
  state = { friendsList: friends };

  handleClick = id => {
    this.setState(prevState => {
      return {
        friendsList: prevState.friendsList.map(friend =>
          friend.id === id ? { ...friend, isOnline: !friend.isOnline } : friend
        ),
      };
    });
  };

  render() {
    return (
      <ul className={css.friendList}>
        {this.state.friendsList
          .sort((a, b) => b.isOnline - a.isOnline)
          .map(friend => {
            return (
              <ToDo
                friend={friend}
                handleClick={this.handleClick}
                key={friend.id}
              />
            );
          })}
      </ul>
    );
  }
}
