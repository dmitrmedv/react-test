import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Counter } from './Counter/Counter';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <Counter />
    </>
  );
};
